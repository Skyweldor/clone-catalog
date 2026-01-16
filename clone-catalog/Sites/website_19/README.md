# PlanetScale-Style Website Template

A modular, dark-themed landing page template inspired by PlanetScale's design. Each section is clearly documented and can be easily removed, reused, or modified.

## 🎨 Design Features

- **Dark theme** with orange accent colors
- **CSS Variables** for easy customization
- **Responsive** design that works on all devices
- **Smooth animations** and hover effects
- **Semantic HTML** with clear section markers

## 📦 Sections Overview

Each section in the HTML is marked with comments indicating:
- **Status**: `REQUIRED` or `REMOVABLE`
- **Description**: What the section does

### Available Sections

| Section | Status | Description |
|---------|--------|-------------|
| Announcement Banner | REMOVABLE | Top promotional banner |
| Header/Navigation | REQUIRED | Main navigation with logo |
| Hero | REQUIRED | Main value proposition |
| Logo Cloud | REMOVABLE | Trusted by / customer logos |
| Featured Testimonial | REMOVABLE | Large standalone quote |
| Architecture Diagram | REMOVABLE | Technical diagram with tabs |
| Performance | REMOVABLE | Performance metrics and graph |
| Uptime | REMOVABLE | Reliability features |
| Stats/Metrics | REMOVABLE | Key statistics display |
| Cost | REMOVABLE | Pricing benefits |
| Security | REMOVABLE | Compliance info |
| Features | REMOVABLE | Platform features list |
| CTA Banner | REMOVABLE | Final call to action |
| Footer | REQUIRED | Site navigation and links |

## 🔧 Customization

### Colors
Edit the CSS variables at the top of the `<style>` section:

```css
:root {
    --color-accent-primary: #f97316;    /* Main accent (orange) */
    --color-accent-secondary: #fb923c;  /* Hover accent */
    --color-bg-primary: #0a0a0a;        /* Main background */
    --color-text-primary: #f5f5f5;      /* Main text */
    /* ... more variables */
}
```

### Fonts
The template uses Google Fonts (Inter + JetBrains Mono). Change in the `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

And update the CSS variable:
```css
--font-sans: 'YourFont', sans-serif;
```

## 🗑️ Removing Sections

Each section is wrapped in comments like this:

```html
<!-- ============================================
     SECTION: LOGO CLOUD
     Status: REMOVABLE
     Description: Trusted by / customer logos
     ============================================ -->
<section class="logo-cloud">
    ...
</section>
```

Simply delete from the opening comment to the closing tag to remove a section.

## ♻️ Reusing Components

### Testimonial (Inline)
```html
<div class="testimonial-inline">
    <p>"Your quote here."</p>
    <cite>— Name, Title @Company</cite>
</div>
```

### Feature List
```html
<ul class="feature-list">
    <li>Feature with checkmark icon</li>
    <li>Another feature item</li>
</ul>
```

### Content Section
```html
<section class="content-section">
    <div class="container">
        <div class="section-header">
            <span class="section-eyebrow">Label</span>
            <h2 class="section-title">Title</h2>
            <p class="section-description">Description text.</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Stats Grid
```html
<div class="stats-grid">
    <div class="stat-item">
        <div class="stat-value">99.9%</div>
        <div class="stat-label">Uptime</div>
    </div>
</div>
```

### Buttons
```html
<a href="#" class="btn btn-primary">Primary Button</a>
<a href="#" class="btn btn-outline">Outline Button</a>
<a href="#" class="btn btn-ghost">Ghost Button</a>
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout
- **Tablet** (< 900px): Adjusted footer grid
- **Mobile** (< 768px): Hidden nav links, stacked hero actions

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Edit the content to match your brand
3. Remove sections you don't need
4. Customize colors via CSS variables
5. Deploy to your hosting provider

## 📄 License

Free to use for personal and commercial projects.
