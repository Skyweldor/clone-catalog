# Every Layout Template

A modular, section-based landing page template inspired by [every-layout.dev](https://every-layout.dev). Built for easy customization, with clearly segmented sections that can be removed, reordered, or reused.

## 📁 File Structure

```
every-layout-template/
├── index.html          # Main HTML template
├── styles.css          # All styles (modular CSS)
└── README.md           # This file
```

## 🧱 Section Overview

The template is divided into clearly marked sections. Each section is wrapped in HTML comments explaining its purpose and dependencies:

| Section | ID | Description | Removable? |
|---------|-----|-------------|-----------|
| Hero | `#hero` | Main landing with book cover & CTA | Yes |
| Recovery (Top) | `#recovery-top` | Lost access form | Yes |
| Social Proof | `#social-proof` | Company logos | Yes |
| Testimonials | `#testimonials` | Customer quotes | Yes |
| Features | `#features` | Content introduction | Yes |
| Layout Cards | `#layouts` | Product grid cards | Yes |
| Authors | `#authors` | Team bios | Yes |
| Pricing | `#checkout` | Checkout form | Yes |
| Recovery (Bottom) | `#recovery-bottom` | Lost access form (duplicate) | Yes |
| Footer | `#footer` | Site footer | Keep |

## 🔧 How to Customize

### Removing a Section

**Method 1: Delete from HTML**
Simply delete the entire section block from `<!-- SECTION: ... -->` to `<!-- END SECTION: ... -->`.

**Method 2: Hide with CSS**
Add the `section--hidden` class to hide without deleting:
```html
<section class="section section--testimonials section--hidden" id="testimonials">
```

### Reordering Sections

Cut and paste entire section blocks. Each section is self-contained with its own styles.

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-black: #1a1a1a;      /* Primary text/borders */
    --color-white: #ffffff;       /* Background */
    --color-gray-100: #f7f7f7;   /* Light backgrounds */
    /* ... more variables ... */
}
```

### Changing Fonts

Update the Google Fonts import in `index.html` and the CSS variables:

```css
:root {
    --font-serif: 'Literata', Georgia, serif;
    --font-sans: 'DM Sans', sans-serif;
}
```

### Modifying Spacing

Adjust spacing variables:

```css
:root {
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    /* etc. */
}
```

## 📋 Section Templates

### Adding a New Testimonial Card

```html
<blockquote class="testimonial-card">
    <div class="testimonial-card__avatar">
        <div class="avatar avatar--placeholder">XX</div>
    </div>
    <div class="testimonial-card__content">
        <cite class="testimonial-card__author">Name Here</cite>
        <p class="testimonial-card__quote">Quote text goes here...</p>
    </div>
</blockquote>
```

### Adding a New Layout Card

```html
<a href="#" class="layout-card">
    <div class="layout-card__icon">
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">
            <!-- SVG content -->
        </svg>
    </div>
    <h3 class="layout-card__title">Card Title</h3>
</a>
```

For free content badge:
```html
<a href="#" class="layout-card layout-card--free">
    <!-- ... -->
    <span class="layout-card__badge">read for free</span>
</a>
```

### Adding a New Author Card

```html
<article class="author-card">
    <div class="author-card__avatar">
        <div class="avatar avatar--large avatar--placeholder">XX</div>
    </div>
    <div class="author-card__content">
        <h3 class="author-card__name"><a href="#">Author Name</a></h3>
        <p class="author-card__bio">Bio paragraph 1...</p>
        <p class="author-card__bio">Bio paragraph 2...</p>
    </div>
</article>
```

## 🎨 Component Classes

### Buttons
- `.btn` - Base button
- `.btn--primary` - Black background, white text
- `.btn--secondary` - White background, black text
- `.btn--outline` - Transparent with border
- `.btn--full` - Full width

### Forms
- `.form-group` - Form field wrapper
- `.form-group--inline` - Horizontal layout
- `.form-input` - Text inputs
- `.checkbox-label` - Checkbox with label

### Avatars
- `.avatar` - Base avatar (48px)
- `.avatar--large` - Large avatar (96px)
- `.avatar--placeholder` - Black with white initials

### Containers
- `.container` - Max width 72rem
- `.container--narrow` - Max width 40rem

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px - 1024px
- Large: > 1024px

## ⚡ Quick Start

1. Copy `index.html` and `styles.css` to your project
2. Update text content and images
3. Remove unwanted sections
4. Customize colors/fonts via CSS variables
5. Deploy!

## 🖨️ Print Styles

The template includes print styles that automatically hide the hero, pricing, and recovery sections for cleaner printed output.

---

Built with ❤️ as a template based on Every Layout's design patterns.
