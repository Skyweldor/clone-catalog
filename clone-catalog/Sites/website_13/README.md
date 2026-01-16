# Monaverse Clone - Modular Template

A clean, modular recreation of the Monaverse website designed for easy customization and section reuse.

## 📁 File Structure

```
monaverse-clone/
├── index.html      # Main HTML with segmented sections
├── styles.css      # Modular CSS with clear organization
├── script.js       # JavaScript with separated functionality
└── README.md       # This documentation
```

## 🧩 Section Overview

The template is divided into **7 distinct sections**, each clearly marked with HTML comments and corresponding CSS/JS modules:

### 1. Header / Navigation
```html
<!-- SECTION: HEADER / NAVIGATION -->
<header class="site-header" id="header">
```
- Fixed navigation bar
- Logo + nav links + CTA button
- Mobile responsive hamburger menu

### 2. Hero / Featured World
```html
<!-- SECTION: HERO / FEATURED WORLD -->
<section class="hero-section" id="hero">
```
- Large featured space showcase
- Decorative script typography overlay
- Enter/Collect action buttons
- Metadata grid (creator, category, description, price)

### 3. Mission Statement
```html
<!-- SECTION: MISSION STATEMENT -->
<section class="mission-section" id="mission">
```
- Elegant script typography header
- Centered mission text
- "Learn more" CTA link

### 4. Metaverse Gallery
```html
<!-- SECTION: METAVERSE GALLERY -->
<section class="gallery-section" id="explore">
```
- Sidebar with category filters
- Featured space card (large)
- Grid of space cards (4-column)
- Interactive filtering system

### 5. News / Blog
```html
<!-- SECTION: NEWS / BLOG -->
<section class="news-section" id="news">
```
- Sidebar with news categories
- Featured article with image
- Read more CTA

### 6. Call to Action
```html
<!-- SECTION: CALL TO ACTION -->
<section class="cta-section" id="cta">
```
- Gradient background (white to pink)
- Script typography header
- "Become a creator" CTA

### 7. Footer
```html
<!-- SECTION: FOOTER -->
<footer class="site-footer" id="footer">
```
- Logo + tagline
- Navigation columns (Explore, About)
- Social media links
- Legal links (Privacy, Terms)

---

## 🔧 How to Remove a Section

Each section is self-contained. To remove one:

### HTML
Delete the entire section block (from opening comment to closing tag):
```html
<!-- ============================================
     SECTION: [SECTION NAME]
     ============================================ -->
<section class="[section]-section" id="[section]">
    ...
</section>
```

### CSS
The CSS is organized with clear headers. Find and delete the corresponding block:
```css
/* ============================================
   [NUMBER]. SECTION: [SECTION NAME]
   ============================================ */
```

### JavaScript
Most sections don't require JS cleanup, but if they do, functions are clearly named:
- `initHeader()` - Header functionality
- `initGalleryFilters()` - Gallery section
- `initMobileMenu()` - Mobile navigation

---

## 🎨 How to Customize

### Colors
All colors are defined as CSS variables in `:root`:
```css
:root {
    --color-pink: #ff4d6d;        /* Primary accent */
    --color-pink-light: #ffb3c1;   /* Light accent */
    --color-pink-pale: #ffe5ec;    /* Background gradient */
    /* ...more colors */
}
```

### Typography
```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-script: 'Playfair Display', serif;
}
```

### Spacing
```css
:root {
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    /* ...up to --space-5xl */
}
```

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 1200px) { /* Tablet landscape */ }
@media (max-width: 992px)  { /* Tablet portrait */ }
@media (max-width: 768px)  { /* Mobile landscape */ }
@media (max-width: 480px)  { /* Mobile portrait */ }
```

---

## 🔄 Recycling Sections

### To reuse the Gallery Section:
1. Copy the HTML block
2. Update `id` attribute
3. Copy corresponding CSS (Section 9)
4. Copy `initGalleryFilters()` from JS if needed

### To reuse the Card Component:
```html
<article class="space-card">
    <div class="card-tags">
        <span class="tag">Category</span>
    </div>
    <div class="card-image">
        <img src="your-image.jpg" alt="Description">
    </div>
    <div class="card-info">
        <span class="card-creator">Creator Name</span>
        <h4 class="card-title">Card Title</h4>
        <span class="card-category">Category</span>
    </div>
    <div class="card-price">
        <span class="price-label">Price</span>
        <span class="price-value">MAKE AN OFFER</span>
    </div>
</article>
```

---

## 📋 Component Library

### Buttons
```html
<a class="btn btn-primary">Pink Button</a>
<a class="btn btn-dark">Black Button</a>
<a class="btn btn-outline">Outline Button</a>
```

### Tags
```html
<span class="tag">Default Tag</span>
<span class="tag tag-active">Active Tag</span>
```

### Links
```html
<a class="link-underline">UNDERLINED LINK</a>
```

---

## 🚀 Quick Start

1. Clone/download the files
2. Replace placeholder images with your own
3. Update text content
4. Customize colors via CSS variables
5. Remove/add sections as needed

---

## 📝 Notes

- Images use Unsplash placeholders - replace with your actual assets
- Font imports are from Google Fonts (Inter, Playfair Display)
- All sections are scroll-animated using Intersection Observer
- Mobile menu is automatically generated from the main nav
