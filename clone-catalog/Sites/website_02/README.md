# Swehl-Inspired Website Template

A modular, segmented website template inspired by [Swehl.com](https://swehl.com). Built with vanilla HTML, CSS, and JavaScript for easy customization and reuse.

## 🎨 Design Features

- **Warm color palette**: Peach, yellow, maroon, cream
- **Bold typography**: Playfair Display + Outfit font pairing
- **Retro/playful aesthetic**: Rounded corners, organic curves
- **Fully responsive**: Mobile-first approach
- **Accessible**: Semantic HTML, ARIA labels

---

## 📁 File Structure

```
swehl-template/
├── index.html      # Main HTML with clearly labeled sections
├── styles.css      # Modular CSS with CSS variables
├── script.js       # JavaScript modules for interactivity
└── README.md       # This documentation
```

---

## 🧩 Sections Overview

The template includes **10 modular sections**, each clearly commented and easy to remove or reuse:

| Section | Description | Background Color |
|---------|-------------|------------------|
| **Header** | Sticky nav with logo, links, cart | Transparent → White on scroll |
| **Hero** | Full-screen with headline + CTAs | Peach (`#F4C4A5`) |
| **Marquee** | Animated scrolling features | Cream (`#FDF6E9`) |
| **Products** | Product grid with cards | Yellow (`#F5C343`) |
| **Resources** | Video/article carousel | Maroon (`#6B2D3A`) |
| **Community** | Image with curved overlay | Image + Cream |
| **Testimonials** | Customer reviews grid | Cream (`#FDF6E9`) |
| **Press** | Press/logo showcase | Cream (`#FDF6E9`) |
| **Newsletter** | Email signup form | Yellow (`#F5C343`) |
| **Footer** | Links, social, copyright | Dark (`#1A1A1A`) |

---

## 🛠️ Customization Guide

### Changing Colors

All colors are defined as CSS variables in `styles.css`:

```css
:root {
  /* Primary Colors */
  --color-primary: #E8533E;      /* Coral red */
  --color-secondary: #F5C343;    /* Warm yellow */
  
  /* Background Colors */
  --color-bg-hero: #F4C4A5;      /* Peach */
  --color-bg-products: #F5C343;  /* Yellow */
  --color-bg-resources: #6B2D3A; /* Maroon */
  /* ... more variables ... */
}
```

Simply change these values to update the entire color scheme.

### Changing Fonts

Fonts are loaded from Google Fonts and defined in variables:

```css
:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Outfit', -apple-system, sans-serif;
}
```

To change fonts:
1. Update the `<link>` tag in `index.html`
2. Update the CSS variables

### Removing a Section

Each section is wrapped in clear comments:

```html
<!-- ============================================
     SECTION: MARQUEE / FEATURES BANNER
     ============================================ -->
<section class="marquee" id="marquee">
  ...
</section>
```

To remove a section:
1. Delete the entire `<section>` block from `index.html`
2. Optionally remove corresponding CSS from `styles.css`

### Duplicating a Section

To reuse a section (e.g., add a second product grid):
1. Copy the entire `<section>` block
2. Change the `id` attribute to something unique
3. Update the content as needed

---

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 640px) { ... }
```

---

## ⚡ JavaScript Modules

Each feature is a separate function in `script.js`:

| Function | Purpose |
|----------|---------|
| `initHeaderScroll()` | Adds class on scroll |
| `initMobileMenu()` | Hamburger menu toggle |
| `initSmoothScroll()` | Smooth anchor scrolling |
| `initMarquee()` | Marquee speed adjustment |
| `initCarousel()` | Resource cards carousel |
| `initAddToCart()` | Cart button interactions |
| `initNewsletterForm()` | Form submission handling |
| `initScrollAnimations()` | Fade-in animations |

To disable a feature, comment out the corresponding line in `init()`:

```javascript
function init() {
  initHeaderScroll();
  // initMobileMenu();  // Commented out - disabled
  initSmoothScroll();
  // ... etc
}
```

---

## 🖼️ Replacing Images

Images use placeholder URLs from Unsplash. Replace `src` attributes with your own images:

```html
<!-- Before -->
<img src="https://images.unsplash.com/..." alt="Product">

<!-- After -->
<img src="./images/your-product.jpg" alt="Your Product">
```

---

## 📋 Component Reference

### Buttons

```html
<!-- Primary Button -->
<a href="#" class="btn btn--primary">Shop Now</a>

<!-- Secondary Button -->
<a href="#" class="btn btn--secondary">Learn More</a>

<!-- Outline Light (for dark backgrounds) -->
<a href="#" class="btn btn--outline-light">Let's Learn</a>

<!-- Dark Button -->
<a href="#" class="btn btn--dark">Submit</a>

<!-- Full Width -->
<button class="btn btn--primary btn--full">Add to Cart</button>
```

### Tags

```html
<span class="tag">Category</span>
<span class="tag tag--primary">Featured</span>
```

### Cards

Product and resource cards follow a consistent structure:

```html
<article class="product-card">
  <div class="product-card__badge">Best Seller</div>
  <div class="product-card__image-wrapper">
    <img src="..." alt="..." class="product-card__image">
  </div>
  <div class="product-card__content">
    <h3 class="product-card__name">Product Name</h3>
    <p class="product-card__price">$99.99</p>
    <p class="product-card__description">Description text.</p>
    <button class="btn btn--primary btn--full">Add to Cart</button>
  </div>
</article>
```

---

## 🚀 Quick Start

1. Download/clone the template files
2. Open `index.html` in a browser
3. Edit content in `index.html`
4. Customize colors in `styles.css` CSS variables
5. Deploy to your hosting

---

## 📝 License

This template is for personal and commercial use. Original design inspiration from Swehl.com.

---

## 🤝 Credits

- Design inspiration: [Swehl.com](https://swehl.com)
- Fonts: [Google Fonts](https://fonts.google.com)
- Placeholder images: [Unsplash](https://unsplash.com)
