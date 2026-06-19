/* Whey Maker PDP — gallery, zoom lightbox, quantity/variant, FAQ.
   Classes are wmk- prefixed to match the namespaced markup. Load-once guarded. */
(function () {
  'use strict';
  if (window.__wmPDPLoaded) return;
  window.__wmPDPLoaded = true;

  function money(cents) { return '$' + (cents / 100).toFixed(2); } // USD; edit if not USD

  /* ---- Hero gallery + zoom lightbox ---------------------------------- */
  function initHero(root) {
    if (root.dataset.wmHero === '1') return;
    root.dataset.wmHero = '1';

    var mainWrap = root.querySelector('.wmk-main');
    var main = mainWrap ? mainWrap.querySelector('img') : null;
    var thumbs = Array.prototype.slice.call(root.querySelectorAll('.wmk-thumbs .wmk-thumb'));
    var lb = root.querySelector('.wmk-lightbox');
    if (!main || !thumbs.length) return;

    var slides = thumbs.map(function (t) {
      var im = t.querySelector('img');
      return { full: t.getAttribute('data-full'), alt: im ? im.alt : '' };
    });
    var idx = 0;

    function setIdx(i) {
      idx = (i + slides.length) % slides.length;
      main.src = slides[idx].full;
      main.alt = slides[idx].alt;
      thumbs.forEach(function (t, k) { t.classList.toggle('wmk-active', k === idx); });
      if (lb) {
        var lbImg = lb.querySelector('.wmk-lb-stage img');
        if (lbImg) { lbImg.src = slides[idx].full; lbImg.alt = slides[idx].alt; lbImg.classList.remove('wmk-zoomed'); lbImg.style.transformOrigin = ''; }
        Array.prototype.forEach.call(lb.querySelectorAll('.wmk-lb-thumb'), function (t, k) {
          t.classList.toggle('wmk-active', k === idx);
        });
      }
    }

    thumbs.forEach(function (t, k) { t.addEventListener('click', function () { setIdx(k); }); });

    /* swipe; guard the click that follows a swipe */
    var startX = null, swiped = false;
    mainWrap.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; swiped = false; }, { passive: true });
    mainWrap.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX; startX = null;
      if (Math.abs(dx) < 40) return;
      swiped = true; setIdx(idx + (dx < 0 ? 1 : -1));
    }, { passive: true });

    if (lb) {
      var stageImg = lb.querySelector('.wmk-lb-stage img');
      var zoomed = false;
      function openLB() {
        if (swiped) { swiped = false; return; }
        lb.hidden = false; zoomed = false;
        if (stageImg) { stageImg.classList.remove('wmk-zoomed'); stageImg.style.transformOrigin = ''; }
        document.body.style.overflow = 'hidden';
      }
      function closeLB() { lb.hidden = true; document.body.style.overflow = ''; }

      mainWrap.addEventListener('click', openLB);
      lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
      var closeBtn = lb.querySelector('.wmk-lb-close'); if (closeBtn) closeBtn.addEventListener('click', closeLB);
      var prev = lb.querySelector('.wmk-lb-nav.wmk-prev'); if (prev) prev.addEventListener('click', function (e) { e.stopPropagation(); setIdx(idx - 1); });
      var next = lb.querySelector('.wmk-lb-nav.wmk-next'); if (next) next.addEventListener('click', function (e) { e.stopPropagation(); setIdx(idx + 1); });
      Array.prototype.forEach.call(lb.querySelectorAll('.wmk-lb-thumb'), function (t, k) {
        t.addEventListener('click', function (e) { e.stopPropagation(); setIdx(k); });
      });
      var stage = lb.querySelector('.wmk-lb-stage'); if (stage) stage.addEventListener('click', function (e) { e.stopPropagation(); });
      if (stageImg) {
        stageImg.addEventListener('click', function () {
          zoomed = !zoomed; stageImg.classList.toggle('wmk-zoomed', zoomed);
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
    var chips = Array.prototype.slice.call(root.querySelectorAll('.wmk-flavor-chip[data-variant-id]'));
    var qty = 1;
    function currentCents() {
      var sel = root.querySelector('.wmk-flavor-chip.wmk-selected[data-price]');
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
        if (atc && !atc.disabled) atc.textContent = 'Add to cart — ' + money(cents * qty);
      }
    }
    root.querySelectorAll('[data-wm-qty]').forEach(function (b) {
      b.addEventListener('click', function () { qty = Math.max(1, qty + parseInt(b.getAttribute('data-wm-qty'), 10)); refresh(); });
    });
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('wmk-selected'); });
        chip.classList.add('wmk-selected');
        if (idInput) idInput.value = chip.getAttribute('data-variant-id');
        var avail = chip.getAttribute('data-available') !== 'false';
        if (atc) { atc.disabled = !avail; if (!avail) atc.textContent = 'Sold out'; }
        refresh();
      });
    });
    refresh();
  }

  /* ---- FAQ accordion (event delegation) ------------------------------ */
  var PLUS = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>';
  var MINUS = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 8h10"/></svg>';
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.wm-pdp .wmk-faq-item button') : null;
    if (!btn) return;
    var item = btn.closest('.wmk-faq-item');
    var list = item.parentNode;
    var open = item.classList.contains('wmk-open');
    Array.prototype.forEach.call(list.querySelectorAll('.wmk-faq-item'), function (it) {
      it.classList.remove('wmk-open');
      var a = it.querySelector('.wmk-a'); if (a) a.hidden = true;
      var pm = it.querySelector('.wmk-pm'); if (pm) pm.innerHTML = PLUS;
    });
    if (!open) {
      item.classList.add('wmk-open');
      var a = item.querySelector('.wmk-a'); if (a) a.hidden = false;
      var pm = item.querySelector('.wmk-pm'); if (pm) pm.innerHTML = MINUS;
    }
  });

  function boot() {
    document.querySelectorAll('.wm-hero-root').forEach(initHero);
    document.querySelectorAll('.wm-hero-root .wmk-buy').forEach(initBuy);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  document.addEventListener('shopify:section:load', boot);
})();
