# Anterior Website Clone - Modular Template

A clean, modular recreation of the Anterior healthcare AI platform landing page. Built with semantic HTML and CSS, designed for easy customization and section reusability.

---

## 📁 File Structure

```
anterior-template/
├── index.html          # Main template file (single-file, self-contained)
└── README.md           # This documentation
```

---

## 🧩 Sections Overview

The template is divided into **6 distinct, removable sections**. Each section is clearly marked with HTML comments and has its own CSS block.

| Section | ID | Description | Removable? |
|---------|-----|-------------|------------|
| **Header** | `#header` | Sticky nav with logo, links, announcement badge, CTA | ✅ Yes |
| **Hero** | `#hero` | Main headline, hero card with image, email signup | ✅ Yes |
| **Value Proposition** | `#value-prop` | Two-column layout explaining mission/product | ✅ Yes |
| **Security** | `#security` | Dark card with certifications (HITRUST, HIPAA) | ✅ Yes |
| **Bottom CTA** | `#bottom-cta` | Final email signup call-to-action | ✅ Yes |
| **Footer** | `#footer` | Logo, nav links, social icons, copyright | ✅ Yes |

---

## 🔧 How to Remove a Section

1. **Find the section** in the HTML (marked with clear comments like `<!-- SECTION: HERO -->`)
2. **Delete the entire `<section>` or `<header>` block**
3. **Optionally remove the corresponding CSS** (each section's styles are grouped and labeled)

### Example: Removing the Security Section

Delete this block from HTML:
```html
<!-- ==========================================
     SECTION: SECURITY
     ========================================== -->
<section class="section-security" id="security">
    ...
</section>
```

And optionally remove the CSS block starting with:
```css
/* ============================================
   SECTION: SECURITY
   ============================================ */
```

---

## 🎨 Customization Guide

### Colors
All colors are defined as CSS variables at the top of the `<style>` block:

```css
:root {
    --color-bg-primary: #F5F0E8;      /* Cream background */
    --color-bg-dark: #1A1A1A;          /* Dark sections */
    --color-text-primary: #1A1A1A;     /* Main text */
    --color-text-light: #FFFFFF;       /* Light text */
    --color-text-muted: #666666;       /* Secondary text */
    --color-accent: #E8E0D0;           /* Accent color */
    --color-cta: #1A1A1A;              /* CTA button background */
    --color-cta-text: #FFFFFF;         /* CTA button text */
}
```

### Typography
```css
:root {
    --font-display: 'Playfair Display', Georgia, serif;  /* Headlines */
    --font-body: 'Inter', -apple-system, sans-serif;     /* Body text */
}
```

### Spacing
```css
:root {
    --section-padding: 80px 0;
    --container-max-width: 1200px;
    --container-padding: 0 40px;
}
```

---

## 🔄 Recycling Sections

### Using the Hero Card elsewhere
The `.hero-card` component can be reused:
```html
<div class="hero-card">
    <div class="hero-image-container">
        <div class="hero-image"></div>
    </div>
    <div class="hero-content">
        <p class="hero-tagline">Your content here</p>
        <form class="hero-form">
            <input type="email" class="hero-input" placeholder="Email">
            <button type="submit" class="btn-join">Submit</button>
        </form>
    </div>
</div>
```

### Using the Security Card pattern
```html
<div class="security-card">
    <div class="security-content">
        <h2>Your Heading</h2>
        <p>Your description</p>
    </div>
    <div class="security-badges">
        <!-- Add badges here -->
    </div>
</div>
```

### Using the Value Prop Grid
```html
<div class="value-prop-grid">
    <div class="value-prop-headline">
        Left column content (italic headline)
    </div>
    <div class="value-prop-content">
        Right column content (body text)
    </div>
</div>
```

---

## 📱 Responsive Breakpoints

- **Desktop**: Default styles
- **Tablet** (`max-width: 968px`): Grid layouts collapse, security badges rearrange
- **Mobile** (`max-width: 640px`): Single column, reduced spacing, hidden nav links

---

## 🖼️ Replacing the Hero Image

The hero uses a CSS gradient animation as a placeholder. To use a real image:

1. Replace the `<div class="hero-image">` with an `<img>` tag:
```html
<img src="your-image.jpg" alt="Description" class="hero-image">
```

2. Update the CSS:
```css
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## ⚡ Features

- **Single file**: Everything in one HTML file for easy deployment
- **No dependencies**: Pure HTML/CSS (Google Fonts loaded via CDN)
- **Semantic HTML**: Proper use of `<header>`, `<section>`, `<footer>`, `<nav>`
- **Accessible**: ARIA labels, proper contrast, keyboard navigation
- **Responsive**: Mobile-first approach with tablet and desktop breakpoints
- **CSS Variables**: Easy theming and customization
- **Smooth animations**: Subtle hover effects and transitions

---

## 📝 License

This is a template recreation for educational/portfolio purposes. The original design belongs to Anterior (https://www.anterior.com).
