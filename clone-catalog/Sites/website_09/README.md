# Stardock WindowBlinds 6 - Authentic Archaic Style Template

A modular HTML/CSS template that faithfully recreates the late-2000s Stardock product page aesthetic. This template preserves the authentic "Web 2.0" era design including dark blue-gray color scheme, glossy buttons, gradient backgrounds, fixed-width layouts, and the distinctive sidebar-content layout.

## 📁 Project Structure

```
stardock-template/
├── index.html                          # Complete single-file template
├── README.md                           # This documentation
└── sections/                           # Individual modular sections
    ├── section-corp-header.html        # Stardock logo & tagline bar
    ├── section-main-nav.html           # Top navigation with search
    ├── section-sidebar.html            # Left sidebar with widgets
    ├── section-product-header.html     # Product logo & badge
    ├── section-content-box.html        # Main content, screenshot, price, CTAs
    ├── section-content-tabs.html       # Tabbed content area
    ├── section-partner-bar.html        # Partner/affiliate logos
    └── section-footer.html             # Copyright and links
```

## 🚀 Quick Start

### Option 1: Use the Complete Template
Open `index.html` in a browser. Everything is included in one file.

### Option 2: Build Custom Pages
1. Start with basic HTML structure
2. Copy CSS variables from `index.html` (the `:root` section)
3. Pick sections from `/sections/` folder
4. Each section includes its own CSS - copy to your `<style>` block

## 📐 Template Architecture

### Page Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                   CORPORATE HEADER                       │
│            [Logo]  Stardock    "Your Edge in Software"   │
├─────────────────────────────────────────────────────────┤
│                    MAIN NAVIGATION                       │
│   Home | Products | Downloads | Forums | ... | [Search]  │
├────────────┬────────────────────────────────────────────┤
│            │                                             │
│  SIDEBAR   │              CONTENT AREA                   │
│            │                                             │
│ [Product   │  ┌─────────────────────────────────────┐   │
│  Nav Menu] │  │ Product Header (Logo + Badge)       │   │
│            │  └─────────────────────────────────────┘   │
│ [Dev       │  ┌─────────────────────────────────────┐   │
│  Resources]│  │ Content Box                         │   │
│            │  │  [Text]              [Screenshot]   │   │
│ [Featured  │  │  ─────────────────────────────────  │   │
│  Skins]    │  │  Price | Badges | [Buy] [Trial]    │   │
│            │  └─────────────────────────────────────┘   │
│ [News]     │  ┌─────────────────────────────────────┐   │
│            │  │ Content Tabs                        │   │
│            │  │ [Overview|Features|Screenshots|Sys] │   │
│            │  │  Tab content here...                │   │
│            │  └─────────────────────────────────────┘   │
├────────────┴────────────────────────────────────────────┤
│                    PARTNER LOGOS BAR                     │
├─────────────────────────────────────────────────────────┤
│                        FOOTER                            │
│          Contact | Forums | Support | Privacy            │
│              Copyright © 2025 Stardock                   │
└─────────────────────────────────────────────────────────┘
```

### CSS Custom Properties (Theme Variables)

All design tokens are defined as CSS custom properties:

```css
:root {
    /* Background Colors - Dark blue-gray theme */
    --color-bg-darkest: #1a2030;
    --color-bg-dark: #232d3d;
    --color-bg-medium: #2a3648;
    --color-bg-panel: #2f3a4d;
    --color-bg-content: #3a4860;
    --color-bg-highlight: #4a5a75;
    
    /* Accent Colors */
    --color-accent-orange: #e85d00;
    --color-accent-green: #5a9e2f;
    --color-accent-blue: #4a90d9;
    --color-accent-gold: #c9a227;
    
    /* Text Colors */
    --color-text-white: #ffffff;
    --color-text-light: #c8d0dc;
    --color-text-muted: #8899aa;
    --color-text-link: #6cb4ee;
    
    /* Layout */
    --layout-width: 960px;
    --sidebar-width: 180px;
}
```

## 📋 Section Overview

| Section | File | Purpose | Removable? |
|---------|------|---------|------------|
| Corporate Header | `section-corp-header.html` | Company logo & tagline | ✅ Yes |
| Main Navigation | `section-main-nav.html` | Site nav with search | ✅ Yes |
| Left Sidebar | `section-sidebar.html` | Product nav & widgets | ✅ Yes* |
| Product Header | `section-product-header.html` | Product logo & badge | ✅ Yes |
| Content Box | `section-content-box.html` | Main content & CTAs | ✅ Yes |
| Content Tabs | `section-content-tabs.html` | Tabbed info sections | ✅ Yes |
| Partner Bar | `section-partner-bar.html` | Affiliate logos | ✅ Yes |
| Footer | `section-footer.html` | Links & copyright | ✅ Yes |

*Removing sidebar requires adjusting content area width

## 🎨 Customization Guide

### Changing Colors

Edit the CSS custom properties in `:root`:

```css
/* Example: Warmer color scheme */
--color-bg-darkest: #1a1510;
--color-bg-dark: #2d2520;
--color-accent-orange: #ff6b00;
```

### Changing the Layout Width

```css
/* Wider layout */
--layout-width: 1100px;
--sidebar-width: 220px;

/* Narrower layout */
--layout-width: 800px;
--sidebar-width: 160px;
```

### Removing the Sidebar

1. Delete `#sidebar` element from HTML
2. Remove `#sidebar` styles from CSS
3. The content area will automatically expand (it uses `flex: 1`)

### Customizing Buttons

The template includes two button styles:

```html
<!-- Green "Buy" button -->
<a href="#" class="btn btn-green">Buy Now!</a>

<!-- Orange "Trial" button -->
<a href="#" class="btn btn-orange">Free Trial!</a>
```

### Adding Sidebar Widgets

Use this structure for new widgets:

```html
<div class="sidebar-box">
    <div class="sidebar-box-header">Widget Title</div>
    <div class="sidebar-box-content">
        <!-- Your content here -->
    </div>
</div>
```

## 🕰️ Archaic Design Elements Preserved

| Element | Archaic Style | Modern Alternative |
|---------|---------------|-------------------|
| Layout | Fixed 960px width | Responsive/fluid |
| Sidebar | Left-aligned, 180px | Hidden/hamburger menu |
| Colors | Dark blue-gray, high contrast | Light themes, muted colors |
| Fonts | Verdana, Trebuchet MS | System fonts, Google Fonts |
| Font sizes | Pixels (10-14px) | rem/em units |
| Buttons | Glossy gradients with shadows | Flat design |
| Navigation | Tab-style with borders | Minimal, borderless |
| Tabs | Visual tab metaphor | Underlines or pills |
| Icons | Emoji placeholders | SVG icon libraries |

## 📱 Mobile Compatibility

⚠️ **Note**: This template is intentionally NOT responsive. The fixed-width layout is part of the archaic aesthetic. The 960px width was standard for late-2000s web design.

## 🔧 Browser Compatibility

Designed to work in modern browsers while maintaining the visual style of the era. The CSS uses standard properties that work in:
- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)

## 📝 Placeholder Content

Replace these placeholders with actual content:

| Placeholder | Location | Replace With |
|-------------|----------|--------------|
| `[Skin Preview]` | Sidebar featured skins | Actual thumbnail images |
| `[ Main Screenshot ]` | Content box | Product screenshot |
| Thumbnail numbers | Screenshot thumbs | Thumbnail images |
| Emoji icons | Various | Actual product/OS icons |

## 📄 License

This template is provided for educational and development purposes. The original Stardock design elements are the property of Stardock Corporation.

---

*Template faithfully recreating the classic late-2000s Stardock software product page aesthetic.*
