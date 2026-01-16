# Build Collective Website Template

A modular, clean clone of the Build Collective website design. Each section is clearly marked and can be easily removed, reordered, or recycled.

---

## 🏗️ Structure Overview

The template is organized into **clearly marked sections** with HTML comments:

```
<!-- ========================================================================
     SECTION: [NAME]
     Remove this entire section block to remove the [name]
     ======================================================================== -->
```

### Available Sections

| Section | Description | Removable |
|---------|-------------|-----------|
| **Header** | Fixed navigation with logo and links | ✅ |
| **Hero** | Large headline with description box | ✅ |
| **Card Grid** | Masonry-style grid of content cards | ✅ |
| **CTA Banner** | Call-to-action button section | ✅ |
| **Footer** | Multi-column footer with newsletter | ✅ |

---

## 🎨 Customization

### CSS Variables

All theming is controlled via CSS variables at the top of the stylesheet:

```css
:root {
    /* Colors */
    --color-background: #ffffff;
    --color-text-primary: #1a1a1a;
    
    /* Category Colors */
    --color-category-about: #c84b5a;
    --color-category-book: #d4a574;
    --color-category-team: #4a9b8c;
    --color-category-builders: #7b5aa6;
    --color-category-news: #4a7c9b;
    --color-category-podcast: #9b4a6e;
    
    /* Typography */
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'DM Sans', sans-serif;
    
    /* Spacing */
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
}
```

---

## 🃏 Card Components

### Card Types

Each card is individually removable from the grid. Available card types:

#### 1. Standard Card
```html
<article class="card">
    <span class="card__category card__category--news">News</span>
    <img src="..." class="card__image">
    <h3 class="card__title">Title</h3>
    <p class="card__description">Description</p>
    <a href="#" class="card__link"></a>
</article>
```

#### 2. Founder/Person Card
```html
<article class="card card--founder">
    <span class="card__category card__category--about">Meet Tony</span>
    <img src="..." class="card__image">
    <h3 class="card__title">Born to build.</h3>
    <p class="card__description">Bio text</p>
    <a href="#" class="card__link"></a>
</article>
```

#### 3. Book/Product Card
```html
<article class="card card--book">
    <span class="card__category card__category--book">The Book</span>
    <img src="..." class="card__image">
    <h3 class="card__title">Product Name</h3>
    <p class="card__description">Description</p>
    <a href="#" class="card__link"></a>
</article>
```

### Card Modifiers

| Class | Effect |
|-------|--------|
| `card--featured` | Spans 2 columns and 2 rows |
| `card--wide` | Spans 2 columns |
| `card--tall` | Spans 2 rows |
| `card--founder` | Centered layout with portrait |
| `card--book` | Centered layout with product image |
| `card--no-image` | Larger title text |

### Category Colors

```html
<span class="card__category card__category--about">About</span>
<span class="card__category card__category--book">Book</span>
<span class="card__category card__category--team">Team</span>
<span class="card__category card__category--builders">Builders</span>
<span class="card__category card__category--news">News</span>
<span class="card__category card__category--podcast">Podcast</span>
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 4-column grid (1200px+)
- **Tablet Large**: 3-column grid (900px - 1200px)
- **Tablet**: 2-column grid (600px - 900px)
- **Mobile**: 1-column grid (< 600px)

---

## ✂️ How to Remove Sections

Each section is wrapped with clear comment markers. To remove a section:

1. Find the `<!-- SECTION: [NAME] -->` comment
2. Delete everything between the start and `<!-- END SECTION: [NAME] -->` comments
3. The rest of the page will adjust automatically

### Example: Remove Hero Section

Delete this entire block:
```html
<!-- ========================================================================
     SECTION: HERO
     ======================================================================== -->
<section class="hero">
    ...
</section>
<!-- END SECTION: HERO -->
```

---

## 🔄 Reordering Cards

Cards can be reordered by simply moving the `<article class="card">` blocks within the `.card-grid__container` div.

The CSS Grid will automatically reflow the layout.

---

## 🎭 Adding New Cards

Copy any card template and modify:

```html
<!-- Add your new card here -->
<article class="card">
    <span class="card__category card__category--news">Your Category</span>
    <img src="your-image.jpg" alt="Description" class="card__image">
    <h3 class="card__title">Your Title</h3>
    <p class="card__description">Your description text here.</p>
    <a href="/your-link" class="card__link" aria-label="Read more"></a>
</article>
```

---

## 📁 File Structure

```
buildc-template/
├── index.html          # Main template file (all CSS/JS inline)
└── README.md           # This documentation
```

---

## 🚀 Quick Start

1. Open `index.html` in a browser
2. Modify the CSS variables to match your brand
3. Replace placeholder images and content
4. Remove unwanted sections
5. Deploy!

---

## 💡 Tips

- **Images**: Replace `https://placehold.co/...` URLs with your actual images
- **Fonts**: Change Google Fonts import to use your brand fonts
- **Colors**: Update CSS variables to match your color palette
- **Logo**: Replace the SVG text logo with your actual logo
- **Links**: Update all `href="#"` with actual page URLs

---

## 📝 License

This template is for personal/commercial use. Original design inspiration from buildc.com.
