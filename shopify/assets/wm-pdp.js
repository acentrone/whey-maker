/* Whey Maker PDP — gallery, zoom lightbox, quantity/variant, FAQ.
   Vanilla JS, namespaced to .wm-pdp markup, safe to load once per page.
   Re-runnable: every initializer guards with a data-flag so Shopify's
   theme-editor section re-renders don't double-bind. */
(function () {
  'use strict';

  // Load-once guard: sections each include this script, but the global
  // listeners below must bind only once per page.
  if (window.__wmPDPLoaded) return;
  window.__wmPDPLoaded = true;

  function money(cents) {
    // Simple USD formatter to match the mockup ("$120.00"). Adjust if the
    // store is not USD.
    return '$' + (cents / 100).toFixed(2);
  }

  /* ---- Hero gallery + zoom lightbox ---------------------------------- */
  function initHero(root) {
    if (root.dataset.wmHero === '1') return;
    root.dataset.wmHero = '1';

    var main = root.querySelector('.wm-hero .main img');
    var mainWrap = root.querySelector('.wm-hero .main');
    var thumbs = Array.prototype.slice.call(root.querySelectorAll('.wm-hero .thumbs .thumb'));
    var lb = root.querySelector('.lightbox');
    if (!main || !thumbs.length) return;

    var slides = thumbs.map(function (t) {
      return { full: t.getAttribute('data-full'), alt: t.querySelector('img') ? t.querySelector('img').alt : '' };
    });
    var idx = 0;

    function setIdx(i) {
      idx = (i + slides.length) % slides.length;
      main.src = slides[idx].full;
      main.alt = slides[idx].alt;
      thumbs.forEach(function (t, k) { t.classList.toggle('active', k === idx); });
      if (lb) {
        var lbImg = lb.querySelector('.lb-stage img');
        if (lbImg) { lbImg.src = slides[idx].full; lbImg.alt = slides[idx].alt; lbImg.classList.remove('zoomed'); lbImg.style.transformOrigin = ''; }
        Array.prototype.forEach.call(lb.querySelectorAll('.lb-thumb'), function (t, k) {
          t.classList.toggle('active', k === idx);
        });
      }
    }

    thumbs.forEach(function (t, k) { t.addEventListener('click', function () { setIdx(k); }); });

    /* swipe on the main image; guard the click that follows a swipe */
    var startX = null, swiped = false;
    mainWrap.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; swiped = false; }, { passive: true });
    mainWrap.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX; startX = null;
      if (Math.abs(dx) < 40) return;
      swiped = true;
      setIdx(idx + (dx < 0 ? 1 : -1));
    }, { passive: true });

    /* ---- lightbox ---- */
    if (lb) {
      var stageImg = lb.querySelector('.lb-stage img');
      var zoomed = false;

      function openLB() {
        if (swiped) { swiped = false; return; }
        lb.hidden = false;
        zoomed = false; if (stageImg) { stageImg.classList.remove('zoomed'); stageImg.style.transformOrigin = ''; }
        document.body.style.overflow = 'hidden';
      }
      function closeLB() { lb.hidden = true; document.body.style.overflow = ''; }

      mainWrap.addEventListener('click', openLB);

      lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
      var closeBtn = lb.querySelector('.lb-close'); if (closeBtn) closeBtn.addEventListener('click', closeLB);
      var prev = lb.querySelector('.lb-nav.prev'); if (prev) prev.addEventListener('click', function (e) { e.stopPropagation(); setIdx(idx - 1); });
      var next = lb.querySelector('.lb-nav.next'); if (next) next.addEventListener('click', function (e) { e.stopPropagation(); setIdx(idx + 1); });
      Array.prototype.forEach.call(lb.querySelectorAll('.lb-thumb'), function (t, k) {
        t.addEventListener('click', function (e) { e.stopPropagation(); setIdx(k); });
      });
      var stage = lb.querySelector('.lb-stage'); if (stage) stage.addEventListener('click', function (e) { e.stopPropagation(); });

      if (stageImg) {
        stageImg.addEventListener('click', function () {
          zoomed = !zoomed;
          stageImg.classList.toggle('zoomed', zoomed);
          if (!zoomed) stageImg.style.transformOrigin = '';
        });
        stageImg.addEventListener('mousemove', function (e) {
          if (!zoomed) return;
          var r = stageImg.getBoundingClientRect();
          stageImg.style.transformOrigin = ((e.clientX - r.left) / r.width * 100) + '% ' + ((e.clientY - r.top) / r.height * 100) + '%';
        });
      }

      document.addEventListener('keydown', function (e) {
        if (lb.hidden) return;
        if (e.key === 'Escape') closeLB();
        else if (e.key === 'ArrowRight') setIdx(idx + 1);
        else if (e.key === 'ArrowLeft') setIdx(idx - 1);
      });
    }

    setIdx(0);
  }

  /* ---- Buy box: quantity, variant chips, price ----------------------- */
  function initBuy(root) {
    if (root.dataset.wmBuy === '1') return;
    root.dataset.wmBuy = '1';

    var qtyVal = root.querySelector('[data-wm-qty-val]');
    var qtyInput = root.querySelector('[data-wm-qty-input]');
    var idInput = root.querySelector('[data-wm-variant-id]');
    var atc = root.querySelector('[data-wm-atc]');
    var priceEl = root.querySelector('[data-wm-price]');
    var chips = Array.prototype.slice.call(root.querySelectorAll('.flavor-chip[data-variant-id]'));
    var qty = 1;

    function currentCents() {
      var sel = root.querySelector('.flavor-chip.selected[data-price]');
      if (sel) return parseInt(sel.getAttribute('data-price'), 10);
      if (atc && atc.getAttribute('data-price')) return parseInt(atc.getAttribute('data-price'), 10);
      return null;
    }
    function refresh() {
      var cents = currentCents();
      if (qtyVal) qtyVal.textContent = qty;
      if (qtyInput) qtyInput.value = qty;
      if (cents != null) {
        if (priceEl) priceEl.textContent = money(cents);
        if (atc) atc.textContent = 'Add to cart — ' + money(cents * qty);
      }
    }

    root.querySelectorAll('[data-wm-qty]').forEach(function (b) {
      b.addEventListener('click', function () {
        qty = Math.max(1, qty + parseInt(b.getAttribute('data-wm-qty'), 10));
        refresh();
      });
    });

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('selected'); });
        chip.classList.add('selected');
        if (idInput) idInput.value = chip.getAttribute('data-variant-id');
        var avail = chip.getAttribute('data-available') !== 'false';
        if (atc) { atc.disabled = !avail; if (!avail) atc.textContent = 'Sold out'; }
        refresh();
      });
    });

    refresh();
  }

  /* ---- FAQ accordion (event delegation) ------------------------------ */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.wm-pdp .faq-item button') : null;
    if (!btn) return;
    var item = btn.closest('.faq-item');
    var list = item.parentNode;
    var open = item.classList.contains('open');
    Array.prototype.forEach.call(list.querySelectorAll('.faq-item'), function (it) {
      it.classList.remove('open');
      var a = it.querySelector('.a'); if (a) a.hidden = true;
      var pm = it.querySelector('.pm'); if (pm) pm.innerHTML = PLUS;
    });
    if (!open) {
      item.classList.add('open');
      var a = item.querySelector('.a'); if (a) a.hidden = false;
      var pm = item.querySelector('.pm'); if (pm) pm.innerHTML = MINUS;
    }
  });
  var PLUS = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>';
  var MINUS = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 8h10"/></svg>';

  function boot() {
    document.querySelectorAll('.wm-hero-root').forEach(initHero);
    document.querySelectorAll('.wm-hero-root .buy').forEach(initBuy);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  // Shopify theme editor: re-init when a section is reloaded.
  document.addEventListener('shopify:section:load', boot);
})();
