# Making Software Template

A modular, segmented clone of [makingsoftware.com](https://www.makingsoftware.com/) — a beautiful blueprint-style website for technical documentation.

## 📁 File Structure

```
making-software-template/
├── index.html      # Main HTML with segmented sections
├── styles.css      # Modular CSS with section-based organization
├── script.js       # JavaScript with SectionManager utility
└── README.md       # This file
```

## 🎨 Design System

### Colors
```css
--blue: #4a6fa5;        /* Primary blue */
--blue-light: #7b9cd1;  /* Accent blue */
--blue-dark: #2d4a6f;   /* Dark blue */
--bg: #fafafa;          /* Background */
--bg-paper: #f5f5f0;    /* Paper texture background */
```

### Typography
- **Serif**: Playfair Display (headers, body text)
- **Monospace**: IBM Plex Mono (labels, technical text)

## 🧩 Sections

The template is divided into easily removable/recyclable sections. Each section is marked with HTML comments:

| Section ID | Description |
|------------|-------------|
| `header` | Site title and navigation |
| `hero-intro` | Main introduction with CD diagram |
| `typography-showcase` | Font rendering & bezier curves |
| `hardware-diagram` | Electron beam / CRT diagram |
| `newsletter` | Email signup form |
| `table-of-contents` | Chapter listing |
| `faq` | Common questions table |
| `cta` | Call-to-action buttons |
| `footer` | Copyright and credits |

## 🔧 Managing Sections

### Method 1: HTML Comments
Simply comment out or delete section blocks in `index.html`:

```html
<!-- REMOVE THIS SECTION BY DELETING OR COMMENTING -->
<!--
<section class="section newsletter" id="newsletter">
    ...
</section>
-->
```

### Method 2: JavaScript API
Use the SectionManager in browser console or your code:

```javascript
// List all sections
sectionManager.list()

// Hide a section (keeps in DOM)
sectionManager.hide('newsletter')

// Show a hidden section
sectionManager.show('newsletter')

// Toggle visibility
sectionManager.toggle('faq')

// Remove from DOM entirely
sectionManager.remove('cta')

// Reorder sections
sectionManager.reorder(['hero-intro', 'faq', 'toc'])
```

### Method 3: CSS Classes
Add utility classes to hide sections:

```html
<section class="section hidden" id="newsletter">
```

## 🆕 Adding New Sections

### Basic Text Section
```html
<section class="section" id="my-new-section">
    <div class="section-grid">
        <div class="content">
            <h3>Section Title</h3>
            <p>Your content here...</p>
        </div>
        <aside class="illustration">
            <!-- Add SVG or image -->
        </aside>
    </div>
</section>
```

### Full-width Diagram
```html
<section class="section" id="my-diagram">
    <div class="diagram-full">
        <h3 class="diagram-title">DIAGRAM TITLE</h3>
        <svg viewBox="0 0 800 400">
            <!-- Your SVG content -->
        </svg>
    </div>
</section>
```

### CTA Section
```html
<section class="section cta" id="my-cta">
    <div class="cta-content">
        <h3 class="cta-title">CALL TO ACTION</h3>
        <p class="cta-desc">Description text</p>
        <div class="cta-buttons">
            <a href="#" class="btn btn-outline">LEARN MORE</a>
            <a href="#" class="btn btn-primary">BUY NOW</a>
        </div>
    </div>
</section>
```

## 📐 CSS Organization

The stylesheet is organized by section for easy modification:

```css
/* VARIABLES & RESET */
/* SECTION: BASE STYLES */
/* SECTION: HEADER */
/* SECTION: HERO INTRO */
/* SECTION: DIAGRAMS */
/* SECTION: TYPOGRAPHY SHOWCASE */
/* SECTION: HARDWARE DIAGRAM */
/* SECTION: NEWSLETTER */
/* SECTION: TABLE OF CONTENTS */
/* SECTION: FAQ */
/* SECTION: CTA */
/* SECTION: FOOTER */
/* UTILITY CLASSES */
/* ANIMATIONS */
/* PRINT STYLES */
```

## 🎯 Customization Tips

### Change Primary Color
Update the CSS variable:
```css
:root {
    --blue: #your-color;
}
```

### Change Fonts
Replace the Google Fonts import and update variables:
```css
:root {
    --font-serif: 'Your Serif Font', Georgia, serif;
    --font-mono: 'Your Mono Font', monospace;
}
```

### Add Your Own Diagrams
Use the blueprint styling:
```html
<div class="blueprint-diagram">
    <svg viewBox="0 0 300 300" class="diagram-svg">
        <!-- Use var(--blue) for stroke colors -->
        <circle cx="150" cy="150" r="50" fill="none" stroke="var(--blue)"/>
        <text class="diagram-label">LABEL TEXT</text>
    </svg>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: Full 2-column grid layout
- **Tablet** (< 900px): Single column, stacked sections
- **Mobile** (< 768px): Simplified FAQ table, adjusted spacing

## 🖨️ Print Styles

The template includes print-friendly styles that:
- Hide interactive sections (newsletter, CTA)
- Prevent page breaks inside sections
- Maintain readable typography

## 📄 License

This is a template inspired by makingsoftware.com by Dan Hollick. 
Please create your own original content and designs.
