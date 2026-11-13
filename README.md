# VESTA — Luxury Fashion & Modern Atelier Storefront Template

A luxury e-commerce and editorial fashion website template inspired by **Vesta** (by uiCookies), re-engineered cleanly with **HTML5** and **Modern CSS3** (accompanied by lightweight vanilla JavaScript for dynamic drawer, tabs, gallery, and filtering).

---

## 🎨 Visual Identity & Design System

* **Typography Pairing:**
  * **Display Serif:** `Bodoni Moda` (Google Fonts) — Editorial, high-contrast, elegant serif.
  * **Body & Interface:** `Manrope` (Google Fonts) — Clean, legible modern sans-serif.
* **Curated Color Palette:**
  * **Warm Off-White:** `#FBF9F5` / `#F3EFE8` (editorial ivory backdrop)
  * **Warm Ink / Near-Black:** `#1A1817` (deep, warm dark for text & primary buttons)
  * **Oxblood Burgundy Accent:** `#6B1724` / `#520F1A` (signature high-fashion accent)
  * **Gold / Atelier Accent:** `#C29F68` (subtle badges & highlights)
  * **Border Tone:** `#E8E3DA` (soft organic separators)

---

## 📂 Template Architecture & Pages

1. **`index.html` — Homepage Storefront:**
   * Global announcement bar with shipping and currency controls
   * Sticky glassmorphism header with navigation, brand logo, search, and cart indicator
   * Editorial hero section with oversized typography, model showcase, and floating badges
   * Brand pillars banner (Artisanal Craft, Slow Fashion, Organic Fibers, Free Returns)
   * Curated category spotlight tiles (Outerwear, Suiting, Heavy Knitwear, Leatherware, Footwear)
   * Instant category filtering tabs (*All Silhouettes, Outerwear, Tailoring, Knitwear, Accessories*)
   * Dual-image hover swap product cards with wishlist heart button & quick add
   * "The Atelier" editorial narrative section with floating quote and workshop metrics
   * Full-bleed lookbook banner (*The Solitude of Winter: Vol. V*)
   * Press marquee (Vogue, Harper's Bazaar, Elle, GQ, Monocle)
   * Client reviews & testimonials
   * Instagram community editorial gallery
   * Atelier newsletter subscription box
   * Comprehensive 4-column footer with boutique locations and payment badges

2. **`product.html` — Interactive Product Detail Page (PDP):**
   * Multi-angle thumbnail image gallery with instant preview swap
   * Sticky layout with category tags, pricing, savings badges, and star ratings
   * Color selector swatches with active state indicator
   * Size picker with stock status (*Low stock alert* and *Sold out state*)
   * Quantity stepper (`-` / `+`)
   * Action buttons (*Add to Shopping Bag*, *Wishlist*)
   * Collapsible accordion tabs (*Description & Architecture*, *Materials & Traceability*, *Size & Fit*, *Delivery & Returns*, *Patron Reviews*)
   * "Complete The Look" cross-sell styling recommendations

3. **`shop.html` — Full Catalog / Collection Archive:**
   * Editorial banner with breadcrumbs and collection description
   * Sorting dropdown (*Featured, Newest, Price, Rating*) and item counter
   * 2-column catalog layout with a sticky filter sidebar (Category checkboxes, Color palette swatches, Size chips, Fiber composition, Price ranges)
   * 3-column responsive product card grid
   * Numbered pagination bar

4. **`about.html` — Brand Atelier & Craft Story:**
   * Editorial narrative on the studio's founding between Milan and Stockholm
   * 3 split-story chapters covering origins, raw material traceability, and hand-split invisible seams
   * Global flagship boutiques directory (Milan, Paris, New York, Tokyo)

5. **`contact.html` — Concierge, Appointments & Inquiries:**
   * Direct contact channels for Client Care, Private Fittings, and Press
   * Interactive customer FAQ accordion
   * Clean contact form for client sizing and appointment inquiries

6. **`css/style.css`:**
   * Comprehensive CSS3 with CSS custom properties (`:root`), Flexbox, CSS Grid, media queries for all device sizes (mobile, tablet, desktop).

7. **`js/main.js`:**
   * Lightweight vanilla JavaScript for the slide-in shopping bag drawer, thumbnail image gallery swapping, category filtering, quantity adjusters, and accordion panels.

---

## 🚀 How to View & Run

Open any of the `.html` files (`index.html`, `product.html`, `shop.html`, `about.html`, `contact.html`) directly in your web browser, or serve them locally with any static server:

```powershell
# Using Python
cd "C:\Users\saiteja\.gemini\antigravity\scratch\vesta-template"
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## 🚀 Live Demo
Web Link : https://saiteja525934.github.io/Vesta-fashion-atelier/

