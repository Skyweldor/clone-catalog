# Fishwife Website Template Clone

A modular, segment-friendly website template inspired by the Fishwife tinned seafood brand. Built with vanilla HTML, CSS, and JavaScript for easy customization and section management.

## 📁 File Structure

```
fishwife-template/
├── index.html      # Main HTML with segmented sections
├── styles.css      # Complete CSS with organized sections
├── script.js       # JavaScript for interactivity
└── README.md       # This documentation
```

## 🎨 Design System

### Colors
| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-cream` | #FDF6E3 | Primary background |
| `--color-yellow` | #F7D046 | Hero, accents, highlights |
| `--color-green-dark` | #2D4A3E | Primary text, buttons |
| `--color-coral` | #E8654B | Badges, CTAs |
| `--color-teal` | #3D8B8B | Social section |

### Typography
- **Display Font:** Libre Baskerville (headings)
- **Body Font:** DM Sans (content)

---

## 📦 Modular Sections

Each section is clearly marked with comments and uses a `data-section` attribute for easy manipulation. Here's what's included:

| Section | data-section | Removable | Description |
|---------|--------------|-----------|-------------|
| Announcement Bar | `announcement-bar` | ✅ Yes | Scrolling promo banner |
| Header | `header` | ❌ No | Main navigation (core) |
| Hero | `hero` | ✅ Yes | Main hero with product showcase |
| Best Sellers | `best-sellers` | ✅ Yes | Product carousel |
| Features | `features` | ✅ Yes | Value proposition icons |
| Bundle | `bundle` | ✅ Yes | Build your bundle CTA |
| Social Proof | `social-proof` | ✅ Yes | UGC gallery with social links |
| Comparison | `comparison` | ✅ Yes | Protein comparison table |
| Canneries | `canneries` | ✅ Yes | Supplier info carousel |
| Press | `press` | ✅ Yes | Media quotes and logos |
| Recipes | `recipes` | ✅ Yes | Featured recipe cards |
| Newsletter | `newsletter` | ✅ Yes | Email signup form |
| Footer | `footer` | ❌ No | Site footer (core) |

---

## 🔧 How to Remove/Toggle Sections

### Method 1: HTML Comments
Simply wrap the section in HTML comments:

```html
<!-- SECTION DISABLED
<section class="section-comparison" data-section="comparison">
    ...content...
</section>
-->
```

### Method 2: JavaScript Console
Open browser console and use these utilities:

```javascript
// Toggle visibility (show/hide)
toggleSection('comparison');

// Completely remove from DOM
removeSection('comparison');

// Get list of all sections
getAllSections();
// Returns: ["announcement-bar", "header", "hero", ...]
```

### Method 3: CSS Display
Add to your CSS:

```css
/* Hide specific section */
[data-section="comparison"] {
    display: none;
}
```

### Method 4: Delete from HTML
Simply delete the entire section block between the comment markers:

```html
<!-- ============================================
     SECTION: Comparison Table
     Removable: YES
     ...
============================================ -->
<section class="section-comparison" data-section="comparison">
    <!-- DELETE THIS ENTIRE BLOCK -->
</section>
```

---

## 🔄 How to Recycle Sections

### Duplicating a Section
1. Copy the entire section block (including comments)
2. Paste where needed
3. Update the `data-section` attribute to be unique
4. Modify content as needed

### Example: Creating a Second Product Grid

```html
<!-- Copy of Best Sellers for "New Arrivals" -->
<section class="section-best-sellers" data-section="new-arrivals">
    <div class="container">
        <h2 class="section-title">New Arrivals</h2>
        <!-- ... same structure, different content ... -->
    </div>
</section>
```

---

## 🎯 Customization Guide

### Changing Brand Colors
Edit the CSS variables in `:root`:

```css
:root {
    --color-cream: #YOUR_COLOR;
    --color-yellow: #YOUR_COLOR;
    --color-green-dark: #YOUR_COLOR;
    /* etc. */
}
```

### Changing Fonts
1. Update Google Fonts link in HTML `<head>`
2. Update CSS variables:

```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### Adding Real Images
Replace placeholder elements with actual images:

```html
<!-- Before (placeholder) -->
<div class="product-tin-display tin-salmon"></div>

<!-- After (real image) -->
<img src="images/salmon.jpg" alt="Smoked Salmon" class="product-image">
```

### Adding Real Product Data
The product cards are structured for easy data insertion:

```html
<div class="product-card">
    <div class="product-image">
        <img src="your-image.jpg" alt="Product Name">
        <div class="product-badge">Best Seller</div>
    </div>
    <div class="product-info">
        <div class="product-rating">★★★★★</div>
        <h3 class="product-name">Your Product Name</h3>
        <a href="/product-url" class="btn btn-secondary">$24.00 • Add to Cart</a>
    </div>
</div>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1024px | Tablets, small laptops |
| 768px | Tablets portrait, large phones |
| 480px | Mobile phones |

---

## 🚀 Quick Start

1. **Download all files** to your project folder
2. **Open `index.html`** in a browser to preview
3. **Edit sections** as needed using the methods above
4. **Customize colors/fonts** in `styles.css`
5. **Replace placeholder content** with your own

---

## 📋 Section-by-Section Breakdown

### Announcement Bar
```html
<section class="section-announcement-bar" data-section="announcement-bar">
```
- Scrolling promotional text
- Easy to update messages
- Animation: horizontal scroll

### Hero
```html
<section class="section-hero" data-section="hero">
```
- Background: Yellow (`--color-yellow`)
- Layout: 2-column grid (content + images)
- Includes: Badge, title, subtitle, CTA button
- Animated floating product tins

### Best Sellers
```html
<section class="section-best-sellers" data-section="best-sellers">
```
- 4-column product grid
- Each card includes: image, badge, rating, name, price button
- Hover: lift effect with shadow

### Features
```html
<section class="section-features" data-section="features">
```
- 4-column icon grid
- SVG icons with descriptions
- Background: Cream dark

### Bundle Builder
```html
<section class="section-bundle" data-section="bundle">
```
- Background: Yellow
- 2-column layout (image + content)
- Includes accordion for product details

### Social Proof
```html
<section class="section-social" data-section="social-proof">
```
- Background: Teal
- Social media links
- 6-column UGC gallery (video/image placeholders)

### Comparison Table
```html
<section class="section-comparison" data-section="comparison">
```
- Responsive table with highlighted column
- Check/X marks for feature comparison

### Canneries
```html
<section class="section-canneries" data-section="canneries">
```
- Carousel with dot navigation
- Image gallery + text info

### Press Quotes
```html
<section class="section-press" data-section="press">
```
- Auto-rotating quote carousel
- Logo strip at bottom

### Recipes
```html
<section class="section-recipes" data-section="recipes">
```
- Horizontal carousel with nav arrows
- Recipe cards with image, title, description, meta

### Newsletter
```html
<section class="section-newsletter" data-section="newsletter">
```
- Email input + subscribe button
- Dashed border styling

### Footer
```html
<footer class="section-footer" data-section="footer">
```
- Brand illustration + tagline
- 3-column link grid
- Legal links + social icons

---

## 💡 Tips

1. **Keep sections independent** - Each section should work without relying on others
2. **Use CSS variables** - Makes theming much easier
3. **Test responsiveness** - After removing sections, check mobile layout
4. **Preserve spacing** - Sections have built-in padding; maintain visual rhythm

---

## 📄 License

This is a template recreation for educational/demonstration purposes. The original Fishwife brand and design belongs to Fishwife Tinned Seafood Co.

---

## 🤝 Support

For questions or customization help, refer to the inline code comments which explain each component's purpose and structure.
