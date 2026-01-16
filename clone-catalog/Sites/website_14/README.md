# The Cool Club - Modular Website Template

A clean, modular website template inspired by illustration-focused e-commerce designs. Built with vanilla HTML, CSS, and JavaScript for maximum portability and easy customization.

## 🎨 Design Features

- **Playful pastel color scheme** with easily customizable CSS variables
- **Responsive grid layouts** that adapt to all screen sizes
- **Smooth hover animations** on cards and interactive elements
- **Sticky header** with smooth scroll navigation
- **Modular sections** - easily add, remove, or reorder

---

## 📁 File Structure

```
cool-club-clone/
├── index.html          # Complete single-file template
└── README.md           # This documentation
```

---

## 🧩 Section Guide

Each section is clearly marked with HTML comments for easy identification:

| Section | Lines | Background Variable | Purpose |
|---------|-------|---------------------|---------|
| **Header** | `<!-- SECTION: HEADER -->` | — | Navigation & branding |
| **Hero** | `<!-- SECTION: HERO -->` | `--bg-hero` | Featured product showcase |
| **Card Games** | `<!-- SECTION: CARD GAMES -->` | `--bg-card-games` | Product category |
| **Cars** | `<!-- SECTION: CARS -->` | `--bg-cars` | Illustration category |
| **Animals** | `<!-- SECTION: ANIMALS -->` | `--bg-animals` | Illustration category |
| **People** | `<!-- SECTION: PEOPLE -->` | `--bg-people` | Illustration category |
| **Random** | `<!-- SECTION: RANDOM -->` | `--bg-random` | Illustration category |
| **Footer** | `<!-- SECTION: FOOTER -->` | `--bg-footer` | Site information |

---

## 🔧 Customization Guide

### Changing Colors

All colors are defined as CSS variables at the top of the `<style>` block:

```css
:root {
    /* Brand Colors */
    --color-primary: #1a1a1a;
    --color-secondary: #666666;
    --color-accent: #ff6b6b;
    
    /* Section Backgrounds - Change these! */
    --bg-hero: #f8d7e8;        /* Pink */
    --bg-card-games: #e8e4f0;  /* Lavender */
    --bg-cars: #f5f5f5;        /* Light gray */
    --bg-animals: #d4e8f0;     /* Light blue */
    --bg-people: #e0d8e8;      /* Purple */
    --bg-random: #d8e8d4;      /* Sage green */
    --bg-footer: #f0ede8;      /* Warm gray */
}
```

### Removing a Section

1. Find the section you want to remove (marked with `<!-- SECTION: NAME -->`)
2. Delete from the opening comment to `<!-- END NAME -->`
3. Optionally remove the corresponding navigation link in the header

**Example:** To remove the "Animals" section:
```html
<!-- Delete everything from here... -->
<!-- SECTION: ANIMALS -->
<section id="animals" class="product-section section-animals">
    ...
</section>
<!-- END ANIMALS -->
<!-- ...to here -->
```

### Adding a New Section

1. Copy an existing section (e.g., `section-cars`)
2. Update the `id`, class names, and content
3. Add a new CSS variable for the background color
4. Add navigation link in header

```html
<!-- SECTION: YOUR-CATEGORY -->
<section id="your-category" class="product-section section-your-category">
    <div class="container">
        <!-- Copy structure from existing section -->
    </div>
</section>
<!-- END YOUR-CATEGORY -->
```

```css
.section-your-category {
    background: var(--bg-your-category);
}
```

### Card Types

**Product Card** (with title & price):
```html
<article class="product-card">
    <div class="product-card__image-wrapper" style="background: #f8f0d8;">
        <img src="your-image.jpg" alt="..." class="product-card__image">
    </div>
    <div class="product-card__info">
        <h3 class="product-card__title">Product Name</h3>
        <p class="product-card__price">€6.00</p>
    </div>
</article>
```

**Illustration Card** (poster-style, no text):
```html
<article class="illustration-card illustration-card--cream">
    <div class="illustration-card__frame">
        <img src="your-image.jpg" alt="..." class="illustration-card__image">
    </div>
</article>
```

**Available frame colors:**
- `illustration-card--cream`
- `illustration-card--white`
- `illustration-card--peach`
- `illustration-card--pink`
- `illustration-card--mint`
- `illustration-card--lavender`
- `illustration-card--sky`
- `illustration-card--sage`
- `illustration-card--yellow`

---

## 📱 Responsive Breakpoints

- **Desktop:** Full navigation, 4-column grid
- **Tablet (≤768px):** Mobile menu, 2-column grid
- **Mobile (≤480px):** Single column grid

---

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Edit the CSS variables to match your brand colors
3. Replace placeholder images with your own
4. Add/remove sections as needed
5. Deploy to any static hosting service

---

## 💡 Tips

- **Images:** Replace the inline SVG placeholders with actual product images
- **Fonts:** The template uses Google Fonts (Playfair Display + DM Sans) - change in the `<head>`
- **Carousel:** The navigation buttons are placeholder - integrate Swiper.js or Splide for real carousel functionality
- **Icons:** Replace emoji icons in footer with proper SVG icons or an icon library

---

## 📦 Dependencies

**None!** This is a zero-dependency template using only:
- Vanilla HTML5
- Vanilla CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6)
- Google Fonts (loaded via CDN)

---

## 📄 License

Free to use for personal and commercial projects.
