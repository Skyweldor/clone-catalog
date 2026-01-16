# Mainframe Website Clone - Modular Template

A clean, modular clone of the Mainframe manifesto landing page. Each section is clearly marked and can be easily removed, modified, or recycled for other projects.

## 🎨 Design System

### Colors (CSS Variables)
```css
--color-bg: #f5f5f3;        /* Light background */
--color-bg-dark: #1a1a1a;   /* Dark sections */
--color-text: #1a1a1a;      /* Primary text */
--color-text-light: #f5f5f3; /* Text on dark bg */
--color-text-muted: #666;    /* Secondary text */
--color-accent: #e63946;     /* Red accent */
--color-border: #ddd;        /* Light borders */
```

### Typography
- **Mono**: IBM Plex Mono (technical/code text)
- **Sans**: Inter (UI/body text)
- **Serif**: Playfair Display (editorial/quotes)

### Spacing
```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 2rem;     /* 32px */
--spacing-lg: 4rem;     /* 64px */
--spacing-xl: 6rem;     /* 96px */
--spacing-xxl: 8rem;    /* 128px */
```

---

## 📦 Sections Overview

| Section | Class | Background | Description |
|---------|-------|------------|-------------|
| Header | `.header` | Light | Logo & navigation |
| Hero | `.hero` | Light | Main headline & terminal text |
| Interface Preview | `.interface-preview` | Light | Window mockup with shapes |
| Apps Grid | `.apps-grid` | Light | 6-icon grid with text |
| Shift | `.shift-section` | **Dark** | Large "SHIFT" typography |
| Vision | `.vision-section` | Light | Future vision & CTA button |
| Abstract | `.abstract-section` | **Dark** | Pixel art & philosophical text |
| Promise | `.promise-section` | Light | AI promise statement |
| CTA | `.cta-section` | **Dark** | Email signup & access card |
| Footer | `.footer` | Light | Company info & links |

---

## 🔧 How to Modify Sections

### Removing a Section
Simply delete the entire `<section>` block. Each section is wrapped in HTML comments:

```html
<!-- ==========================================
     SECTION: Hero
     To remove: Delete this entire <section> block
     ========================================== -->
<section class="hero">
    ...
</section>
```

### Duplicating a Section
1. Copy the entire `<section>` block
2. Paste it where needed
3. Update the class name and content as needed

### Reordering Sections
Simply cut and paste the `<section>` blocks in your desired order. The CSS is modular so sections work independently.

---

## 🎯 Section-by-Section Customization

### Header
```html
<header class="header">
    <!-- Change brand name -->
    <div class="header__brand">
        <strong>Your Company Name</strong><br>
        Your tagline here
    </div>
    <!-- Update navigation links -->
    <nav class="header__nav">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
</header>
```

### Hero
```html
<section class="hero">
    <!-- Update main text -->
    <p class="hero__text">
        Your headline here
    </p>
    <!-- Update subtitle -->
    <p class="hero__subtitle">
        Supporting text or metadata
    </p>
</section>
```

### Shift (Big Typography)
```html
<section class="shift-section">
    <p class="shift-section__intro">Introduction text</p>
    <!-- Change the big word -->
    <h2 class="shift-section__title">YOUR WORD</h2>
    <p class="shift-section__subtitle">Explanation text</p>
</section>
```

### CTA Section
```html
<section class="cta-section">
    <!-- Update title -->
    <h2 class="cta-section__title">Your CTA Title</h2>
    <!-- Update form -->
    <input placeholder="Your placeholder" />
</section>
```

---

## 📱 Responsive Behavior

The template is fully responsive:
- **Desktop**: 2-column grids, full typography
- **Tablet**: Adjusted spacing, some stacking
- **Mobile**: Single column, smaller typography

Breakpoint: `768px`

---

## ✨ Adding Animations

The template includes a simple scroll animation system:

```html
<!-- Add this class to any element -->
<div class="animate-on-scroll">
    Content fades in when scrolled into view
</div>

<!-- Add delays for staggered effects -->
<div class="animate-on-scroll animate-delay-1">First</div>
<div class="animate-on-scroll animate-delay-2">Second</div>
<div class="animate-on-scroll animate-delay-3">Third</div>
```

---

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Edit CSS variables at the top for global changes
3. Modify individual sections as needed
4. Delete sections you don't need

---

## 📂 File Structure

```
mainframe-clone/
├── index.html      # Complete template (single file)
└── README.md       # This documentation
```

---

## 💡 Tips

1. **Keep it minimal**: The design's strength is in restraint
2. **Preserve the rhythm**: Alternate light/dark sections
3. **Typography matters**: The mono font is key to the aesthetic
4. **Figure labels**: Use `fig-label` class for consistent captions
5. **Accent sparingly**: The red accent should be rare

---

## 📋 License

This is a template clone for educational/personal use. The original design belongs to Mainframe Computer, Inc.
