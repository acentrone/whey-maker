# Whey Maker — Shopify sections (Horizon theme)

A 1:1 port of the `/whey-maker-minimal/` PDP into editable Horizon sections. Product
**title, description, price, variants and gallery come from the native Shopify product**;
all other copy is editable in the theme editor. Horizon's own header & footer are kept
(put the logo in Horizon's header settings).

## What's here

```
assets/
  wm-pdp.css          # all styling, namespaced under .wm-pdp so it never collides with Horizon
  wm-pdp.js           # gallery, zoom lightbox, qty/variant, FAQ accordion (loads once)
  *.jpg / *.png / *.svg  # ingredient, athlete, NSF badge, glass, founder, logo images
snippets/
  wm-assets.liquid    # includes the CSS + JS (rendered by every section)
  wm-icon.liquid      # inline SVG icons
sections/
  wm-hero.liquid          wm-marquee.liquid   wm-meal.liquid     wm-nsf.liquid
  wm-ingredients.liquid   wm-compare.liquid   wm-math.liquid     wm-athletes.liquid
  wm-founder.liquid       wm-whey-way.liquid  wm-faq.liquid      wm-results.liquid
  wm-cta.liquid
templates/
  product.whey-maker.json  # wires all sections in order
```

## Install

**Option A — Shopify CLI (recommended)**
1. `shopify theme dev` / `shopify theme push` from a folder that merges these files into your
   Horizon theme (copy `assets/`, `snippets/`, `sections/`, `templates/` into the theme root).

**Option B — Admin code editor**
1. Online Store → Themes → Horizon → **Edit code**.
2. Recreate each file under the matching folder and paste the contents. Upload every file in
   `assets/` via **Add a new asset**.

## Product setup
1. Create the product **Whey Maker**.
2. **Title** = `Whey Maker` (the hero auto-colors the first word blue — toggle in the section).
3. **Description** = the buy-box paragraph (it renders in the hero `.lede`).
4. **Media**: upload the bag photos as product images, in the order you want the gallery —
   e.g. front, back, side A, side B, bottom, nutrition panel. These drive the thumbnails,
   main image, and zoom lightbox.
5. **Price** and **variants**: add a variant per flavor (e.g. "Vanilla Buttercream"). The flavor
   chips + price come straight from the variants.
6. Product → **Theme template** → choose **whey-maker**.
7. **Logo**: Horizon → Header settings → upload `whey-maker-logo.svg` (we keep Horizon's header).

## Notes
- **Namespacing**: every section wraps its markup in `.wm-pdp`; all CSS is scoped to it, so it
  won't fight Horizon's styles. Fonts (Inter / JetBrains Mono / Caveat) load via `@import` in the CSS.
- **Currency**: `wm-pdp.js` formats the live qty×price as `$0.00` (USD). If the store isn't USD,
  edit the `money()` helper at the top of `wm-pdp.js`. The first render uses Shopify's `money` filter.
- **Add to cart**: the hero uses a standard `{% form 'product' %}`. If your Horizon setup has a cart
  drawer that only enhances its own `<product-form>`, this adds via a normal page submit to `/cart`.
- **Editable copy**: open each section in the theme editor to change headings, paragraphs, macro
  numbers, comparison sub-copy, FAQ Q&As, reviews, testimonial Vimeo IDs, etc. Repeating lists
  (ingredient tiles, comparison rows) are fixed in markup to match the design exactly.
- **Images**: ingredient tiles + the comparison table reference theme assets by filename. The NSF
  badge, glass diagram, founder photo, and the four athlete photos default to theme assets but can
  be overridden per-section with an image picker.
- **Scriptural note carried over**: the claims bar reads `Isaiah 40:31 "I am the WAY"` exactly as
  provided — "I am the way" is John 14:6, so confirm the citation before launch.

## Homepage redirect
There's no standalone homepage — `/` redirects to the product page. This is done in
`layout/theme.liquid` (Horizon's layout, not in this folder) with a `<head>` snippet:

```liquid
{%- if request.page_type == 'index' -%}
  <script>window.location.replace("/products/whey-maker");</script>
  <meta http-equiv="refresh" content="0; url=/products/whey-maker">
{%- endif -%}
```

Shopify's admin URL-redirect tool can't redirect `/`, so this is the theme-level approach.
To restore a real homepage later, remove that snippet.
