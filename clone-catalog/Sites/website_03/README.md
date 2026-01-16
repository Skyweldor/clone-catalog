# DAEDALUS Website Template

A modular, dark sci-fi landing page template inspired by [daedalus.am](https://daedalus.am). Built with vanilla HTML, CSS, and JavaScript for maximum flexibility and easy customization.

---

## 📁 Structure Overview

The template is organized into **10 clearly marked sections** that can be independently removed, modified, or reused:

| Section | Description | Lines (approx) |
|---------|-------------|----------------|
| **Navigation** | Fixed header with logo, nav links, social icons | Nav + CSS |
| **Hero** | Full-height hero with parallax background, animated logo, CTAs | Hero section |
| **Stats Bar** | Horizontal terminal-style statistics display | Stats bar |
| **Info Cards** | Two-column newsletter signup + support CTA | Info cards |
| **Story** | Featured content with character image and description | Story section |
| **Game** | Product/game showcase with screenshot | Game section |
| **Support** | Call-to-action grid (merch, discord, donate) | Support section |
| **Team** | Team members grid with photos | Team section |
| **Thanks** | Simple acknowledgments section | Thanks section |
| **Footer** | Site footer with logo, links, social | Footer section |

---

## 🎨 Customization

### CSS Variables (Easy Theming)

All theme values are in CSS custom properties at the top of the `<style>` block:

```css
:root {
    /* Colors */
    --color-bg-primary: #0a0a0a;       /* Main background */
    --color-bg-secondary: #111111;      /* Alternate background */
    --color-bg-card: #1a1a1a;           /* Card backgrounds */
    --color-accent: #e01b24;            /* Primary accent (red) */
    --color-accent-hover: #ff2d38;      /* Accent hover state */
    --color-text-primary: #ffffff;      /* Main text */
    --color-text-secondary: #b3b3b3;    /* Secondary text */
    
    /* Typography */
    --font-display: 'Bebas Neue', sans-serif;  /* Headlines */
    --font-body: 'Inter', sans-serif;          /* Body text */
    --font-mono: 'Space Mono', monospace;      /* Code/stats */
    
    /* Spacing */
    --section-padding: 80px;
    --container-max-width: 1200px;
}
```

### Changing Colors

To create a different color scheme, simply update the CSS variables:

```css
/* Blue theme example */
--color-accent: #2563eb;
--color-accent-hover: #3b82f6;

/* Green theme example */
--color-accent: #10b981;
--color-accent-hover: #34d399;
```

---

## ✂️ Removing Sections

Each section is wrapped in clear HTML comments:

```html
<!-- ============================================
     SECTION: SECTION_NAME
     To remove: Delete from here to matching end comment
     ============================================ -->

[Section content here]

<!-- END SECTION: SECTION_NAME -->
```

**To remove a section:**
1. Find the opening comment `<!-- SECTION: [NAME] -->`
2. Delete everything until `<!-- END SECTION: [NAME] -->`
3. Also remove the corresponding CSS block (marked with `/* #region SECTION_NAME */`)

### CSS Organization

CSS is also organized with region markers:

```css
/* #region NAVIGATION */
.nav { ... }
/* #endregion NAVIGATION */
```

---

## 🔄 Reusing Sections

### Creating a New Page with Selected Sections

1. Copy the base HTML structure (head, body tags, CSS variables)
2. Copy only the sections you need
3. Copy their corresponding CSS blocks
4. Keep the JavaScript block (handles all sections)

### Example: Minimal Landing Page

For a simple landing with just hero + footer:

1. Keep: Navigation, Hero, Footer
2. Remove: Stats Bar, Info Cards, Story, Game, Support, Team, Thanks

---

## 📱 Responsive Breakpoints

The template includes responsive styles at:
- `968px` - Two-column to single-column layouts
- `768px` - Mobile navigation, stacked cards
- `480px` - Single column team grid

---

## 🖼️ Replacing Images

Images are placeholder URLs from Unsplash. Replace with your own:

```html
<!-- Find lines like this -->
<img src="https://images.unsplash.com/..." alt="Description">

<!-- Replace with your image -->
<img src="your-image.jpg" alt="Description">
```

### Image Recommendations

| Section | Recommended Size | Aspect Ratio |
|---------|-----------------|--------------|
| Story Character | 600×900px | 2:3 |
| Game Screenshot | 800×500px | 16:10 |
| Support Cards | 600×600px | 1:1 |
| Team Photos | 400×400px | 1:1 |

---

## ⚡ Features

- **No dependencies** - Pure HTML/CSS/JS
- **Dark theme** - Sci-fi aesthetic with red accents
- **Responsive** - Mobile-first approach
- **Animated** - Scroll animations, hover effects, floating logo
- **Accessible** - Semantic HTML, ARIA labels
- **Fast** - Minimal JS, CSS-only animations where possible

---

## 🚀 Quick Start

1. Open `index.html` in a browser
2. Edit CSS variables for your brand colors
3. Replace placeholder images
4. Update text content
5. Remove unwanted sections
6. Deploy!

---

## 📝 Section Details

### Navigation
- Fixed position with transparent-to-solid scroll effect
- Mobile hamburger menu (toggle functionality ready)
- Social media icons (X/Twitter, Instagram, Discord)

### Hero
- CSS-only parallax background layers
- Animated floating logo letters
- Dual CTA buttons
- Social links

### Stats Bar
- Monospace "terminal" aesthetic
- Accent color highlights
- Flexible spacing

### Info Cards
- Two-column grid
- Email signup form
- Support CTA with accent button

### Story
- Split layout (text + visual)
- Gradient background for character image
- Decorative corner element

### Game
- Reversed split layout
- Image overlay effect
- Corner decoration SVG

### Support
- 3-column grid with varying heights
- Hover zoom effect on images
- Gradient overlays

### Team
- 4-column responsive grid
- Grayscale to color hover effect
- Name and role display

### Thanks
- Simple text section
- Heart emoji accent

### Footer
- Centered layout
- Logo, navigation, social links
- Copyright notice

---

## 📄 License

This template is provided for educational and personal use. Modify freely for your projects.
