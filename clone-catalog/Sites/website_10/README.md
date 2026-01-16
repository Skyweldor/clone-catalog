# Daisy AI Clone - Modular Template

A modular, section-based clone of the [Daisy AI](https://www.hidaisy.ai) landing page. Each section is self-contained and can be easily removed, modified, or reused in other projects.

---

## 📁 Structure Overview

The template consists of **8 independent sections**:

| # | Section | CSS Class | Removable | Notes |
|---|---------|-----------|-----------|-------|
| 1 | Header/Nav | `.header` | ✅ | Fixed navigation with logo + CTA |
| 2 | Hero | `.hero` | ✅ | Main headline + image collage |
| 3 | Transform | `.transform-section` | ✅ | Features intro with visuals |
| 4 | Tagline Banner | `.tagline-banner` | ✅ | Simple centered text section |
| 5 | Product Features | `.features-section` | ✅ | Contains 3 sub-features |
| 6 | Philosophy | `.philosophy-section` | ✅ | Brand message / CTA |
| 7 | Waitlist | `.waitlist-section` | ✅ | Email signup form |
| 8 | Footer | `.footer` | ✅ | Links + team info |

---

## 🎨 Design System

### Colors (CSS Variables)
```css
--color-cream: #F5F3EB;        /* Main background */
--color-mint: #A8E6CF;          /* Primary accent */
--color-pink: #FFB6C1;          /* Secondary accent */
--color-yellow: #FFF59D;        /* Tertiary accent */
--color-black: #1a1a1a;         /* Text/buttons */
```

### Typography
```css
--font-serif: 'Instrument Serif'   /* Headlines */
--font-sans: 'DM Sans'             /* Body text */
--font-handwritten: 'Caveat'       /* Sticky notes */
```

---

## ✂️ How to Remove a Section

Each section is marked with HTML comments:

```html
<!-- ==========================================
     SECTION X: NAME
     To remove: Delete this entire section
     ========================================== -->
```

Simply delete everything between the comment and the closing tag.

### Example: Remove the Philosophy Section

Delete this entire block:
```html
<!-- SECTION 6: PHILOSOPHY / CTA ... -->
<section class="philosophy-section">
    ...
</section>
```

---

## 🔄 How to Reuse a Section

1. Copy the HTML section you want
2. Copy the corresponding CSS (search for the class name)
3. Ensure required CSS variables are included
4. Add any required JavaScript (if applicable)

### Standalone Section Example

To use just the **Waitlist Section** elsewhere:

```html
<!-- Required CSS Variables -->
<style>
    :root {
        --color-yellow: #FFF59D;
        --color-black: #1a1a1a;
        --color-gray: #666;
        --font-sans: 'DM Sans', sans-serif;
    }
    /* Copy .waitlist-section styles */
    /* Copy .btn-primary styles */
</style>

<!-- Section HTML -->
<section class="waitlist-section">
    ...
</section>
```

---

## 🧩 Sub-sections in Features

The **Product Features** section (Section 5) contains independent blocks:

| Block | Class | Can Remove Independently |
|-------|-------|--------------------------|
| Wide Spaces | `.feature-wide-spaces` | ✅ |
| AI Help Card | `.feature-card-mint` | ✅ |
| Save Inspiration Card | `.feature-card-pink` | ✅ |

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 900px)  /* Tablet */
@media (max-width: 600px)  /* Mobile */
```

---

## ⚡ Customization Tips

### Change the Primary Color
Update CSS variable:
```css
--color-mint: #YOUR_COLOR;
--color-mint-light: #YOUR_LIGHTER_COLOR;
```

### Change Fonts
Replace Google Font import and update:
```css
--font-serif: 'Your Font', serif;
--font-sans: 'Your Font', sans-serif;
```

### Remove Grid Background
Delete the `.grid-bg` class from elements or remove its definition.

### Add New Sticky Notes
```html
<div class="sticky-note sticky-yellow" style="top: 10px; left: 10px; transform: rotate(-5deg);">
    Your text here
</div>
```

---

## 📋 Checklist for New Projects

- [ ] Update logo SVG or replace with image
- [ ] Change brand colors in `:root`
- [ ] Update all text content
- [ ] Replace placeholder images
- [ ] Update form action/handler
- [ ] Update footer links
- [ ] Test responsive behavior

---

## 🎯 Key Aesthetic Elements

This template captures the Daisy AI aesthetic:

1. **Scrapbook feel** - Rotated cards, sticky notes, playful overlaps
2. **Soft, warm palette** - Cream background with mint/pink/yellow accents
3. **Mixed typography** - Serif headlines + sans body + handwritten notes
4. **Grid texture** - Subtle background pattern
5. **Organic shapes** - Rounded corners, floating elements
6. **Micro-interactions** - Hover effects, scroll reveals

---

Built with 💛 as a modular template
