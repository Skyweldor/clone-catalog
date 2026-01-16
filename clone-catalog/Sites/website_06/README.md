# Browserbase Clone - Modular Template

A clean, well-organized clone of the Browserbase landing page, built with semantic HTML and modular CSS for easy customization and section reuse.

## 🗂️ Section Guide

The template is divided into **10 clearly marked sections**, each wrapped in comments for easy identification:

| Section | ID | Description |
|---------|-----|-------------|
| 1. Header | `#header-section` | Fixed navigation with logo, nav links, and CTA buttons |
| 2. Hero | `#hero-section` | Main headline, subtitle, and primary call-to-action |
| 3. Trusted By | `#trusted-section` | Logo strip showing partner/investor logos |
| 4. Features | `#features-section` | 8-card grid showcasing product features |
| 5. How It Works | `#how-it-works-section` | Two-column layout with text and diagram |
| 6. Use Cases | `#use-cases-section` | Tabbed interface with use case details |
| 7. Pricing | `#pricing-section` | 3-tier pricing cards |
| 8. Testimonials | `#testimonials-section` | Social proof with tweet-style cards |
| 9. CTA | `#cta-section` | Final call-to-action banner |
| 10. Footer | `#footer-section` | Links, branding, and social icons |

## ✂️ Removing Sections

To remove any section, simply delete the entire block between its HTML comments:

```html
<!-- ==========================================
     SECTION 7: PRICING
     To remove this section: Delete this entire block
     ========================================== -->
<section id="pricing-section">
    ...
</section>
```

**Also remove the corresponding CSS** (marked with matching section numbers) if you want to reduce file size.

## 🎨 Customization

### Colors

All colors are defined as CSS variables at the top of the `<style>` block:

```css
:root {
    --color-primary: #FF4D4D;        /* Main brand color */
    --color-secondary: #1A1A1A;      /* Dark text/buttons */
    --bg-white: #FFFFFF;             /* White backgrounds */
    --bg-light: #FAFAFA;             /* Light gray backgrounds */
    --bg-cream: #FFF8F0;             /* Warm background (testimonials) */
    /* ...and more */
}
```

### Typography

Two Google Fonts are loaded by default:
- **Space Grotesk** - Headings and display text
- **Inter** - Body text

Change them by updating the Google Fonts import and CSS variables:

```css
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Spacing

Key spacing values:

```css
--section-padding: 100px;    /* Vertical section padding */
--container-width: 1200px;   /* Max content width */
--border-radius: 12px;       /* Card corners */
--border-radius-lg: 20px;    /* Large card corners */
```

## 📱 Responsive Breakpoints

The template includes responsive styles for:

- **1024px** - Tablets (2-column grids)
- **768px** - Mobile (single column, hidden nav)

## 🧩 Reusing Sections

### Feature Cards

Copy a single feature card and customize:

```html
<div class="feature-card">
    <div class="feature-icon red">🔗</div>
    <h3>Your Feature Title</h3>
    <ul>
        <li>Feature benefit one</li>
        <li>Feature benefit two</li>
        <li>Feature benefit three</li>
    </ul>
</div>
```

Icon color classes: `red`, `yellow`, `blue`, `green`, `purple`, `orange`

### Pricing Cards

```html
<div class="pricing-card featured"> <!-- Add 'featured' for highlight -->
    <p class="pricing-tier">Plan Name</p>
    <p class="pricing-price">$99</p>
    <p class="pricing-period">Per month</p>
    <ul class="pricing-features">
        <li>Feature one</li>
        <li>Feature two</li>
    </ul>
    <a href="#" class="btn btn-primary">CTA Button</a>
</div>
```

### Testimonial Cards

```html
<div class="testimonial-card">
    <div class="testimonial-header">
        <div class="testimonial-avatar">JD</div>
        <div class="testimonial-author">
            <div class="testimonial-name">John Doe</div>
            <div class="testimonial-handle">@johndoe</div>
        </div>
        <span class="testimonial-platform">𝕏</span>
    </div>
    <div class="testimonial-content">
        Your testimonial text here with <a href="#">@mentions</a> supported.
    </div>
</div>
```

## 🔘 Button Styles

Available button classes:

```html
<a class="btn btn-primary">Red filled button</a>
<a class="btn btn-secondary">White outlined button</a>
<a class="btn btn-dark">Dark filled button</a>
```

## 📝 Utility Classes

Quick spacing and text utilities:

```css
.text-center    /* Center text */
.text-muted     /* Muted gray text */
.mt-1, .mt-2, .mt-3    /* Margin top (8px, 16px, 24px) */
.mb-1, .mb-2, .mb-3    /* Margin bottom (8px, 16px, 24px) */
```

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Customize CSS variables for your brand colors
3. Replace placeholder content with your own
4. Remove sections you don't need
5. Deploy!

## 📁 File Structure

```
browserbase-template/
├── index.html          # Complete single-file template
└── README.md           # This documentation
```

Everything is contained in a single HTML file for simplicity. For production, consider:
- Extracting CSS to a separate `styles.css` file
- Extracting JS to a separate `main.js` file
- Adding image assets to an `/assets` folder

---

Built with ❤️ as a modular, reusable template.
