# Healthcare Landing Page Template

A modular, professional healthcare landing page template inspired by Charlie Health's design. Built with semantic HTML, CSS custom properties, and vanilla JavaScript.

## 📁 File Structure

```
template/
├── index.html              # Complete single-file template
├── README.md               # This documentation
└── sections/
    ├── 01-variables.css    # CSS custom properties (colors, fonts, spacing)
    ├── 02-base.css         # Reset and base styles
    ├── 03-navigation.html  # Header navigation component
    ├── 04-hero.html        # Hero section
    ├── 05-services.html    # "Who We Serve" cards
    ├── 06-features.html    # "Why It Works" features
    ├── 07-testimonial.html # Quote/testimonial block
    ├── 08-community.html   # Community section
    ├── 09-stats.html       # Statistics/proof section
    ├── 10-cta.html         # Call-to-action with form
    └── 11-footer.html      # Footer component
```

## 🎨 Customizing the Theme

All theme variables are defined at the top of `index.html` in the `:root` selector:

```css
:root {
    /* Primary Colors - Change these to match your brand */
    --color-primary: #1a5f4a;        /* Main brand color */
    --color-primary-light: #2d7a62;  /* Hover states */
    --color-primary-dark: #0f3d2f;   /* Dark variants */
    
    /* Accent Colors */
    --color-accent: #e8a54b;         /* Call-to-action highlights */
    
    /* Background Colors */
    --color-bg-cream: #faf8f5;       /* Main background */
    --color-bg-sage: #e8f0eb;        /* Alt section backgrounds */
    
    /* Typography */
    --font-display: 'Fraunces', serif;  /* Headlines */
    --font-body: 'DM Sans', sans-serif; /* Body text */
}
```

## 🧩 Section Management

### To Remove a Section

1. Find the section in `index.html` (marked with HTML comments)
2. Delete the entire `<section>` block
3. Remove corresponding CSS styles (marked with matching comments)

Example - removing the testimonial section:
```html
<!-- Delete this entire block -->
<!-- ============================================================
     SECTION: TESTIMONIAL
     ============================================================ -->
<section class="testimonial-section">
    ...
</section>
```

### To Reorder Sections

Simply cut and paste the `<section>` blocks in your desired order. Each section is self-contained.

### To Duplicate a Section

Copy the entire `<section>` block and update:
- The `id` attribute
- The content
- Class names if you want different styling

## 📱 Responsive Breakpoints

```css
@media (max-width: 1024px)  /* Tablets */
@media (max-width: 768px)   /* Mobile */
```

## 🔧 Section Reference

| Section | Class Name | Purpose |
|---------|------------|---------|
| Navigation | `.nav-header` | Fixed top navigation |
| Hero | `.hero-section` | Main headline + CTA |
| Services | `.services-section` | Service/program cards |
| Features | `.features-section` | Key benefits/features |
| Testimonial | `.testimonial-section` | Customer quote |
| Community | `.community-section` | Social proof/community |
| Stats | `.stats-section` | Key statistics |
| CTA | `.cta-section` | Contact form |
| Footer | `.footer` | Site footer |

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Customize CSS variables for your brand colors
3. Replace placeholder content with your actual content
4. Add your images (replace `.hero-image` placeholder)
5. Update form action to your backend endpoint

## 💡 Tips

- **Images**: Replace the gradient placeholder in `.hero-image` with actual images
- **Icons**: SVG icons are inline for easy customization
- **Forms**: The form has no backend - connect it to your preferred service
- **Fonts**: Google Fonts are loaded via CDN; swap for self-hosted if needed

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

*Template created for easy customization and section modularity.*
