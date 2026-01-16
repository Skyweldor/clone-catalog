# 1337 Universe - Modular Website Template

A cyberpunk-themed, modular website template inspired by the 1337 Universe design. Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and easy customization.

---

## 🎨 Design Features

- **Cyberpunk Aesthetic**: Neon greens, hot pinks, dark backgrounds
- **L33t Speak Typography**: Numbers replacing letters (1337, CH4O$, M3MORY, R4V3)
- **Glitch Effects**: CSS-only animated glitch text
- **Responsive Design**: Mobile-first, works on all devices
- **Zero Dependencies**: No frameworks required

---

## 📁 File Structure

```
1337-universe/
├── index.html          # Main template (all-in-one)
└── README.md           # This documentation
```

---

## 🧩 Modular Sections

Each section is **clearly marked with comments** and can be:
- ✅ Removed entirely
- ✅ Duplicated for more content
- ✅ Reordered freely
- ✅ Styled independently

### Section Map

| Section | Class/ID | Purpose | Removable? |
|---------|----------|---------|------------|
| Header | `.site-header` | Navigation bar | ✅ Yes |
| Hero | `.hero` | Main headline | ✅ Yes |
| Pillars | `.pillars` | 3-column features | ✅ Yes |
| Entity Intro | `.entity-intro` | A1 lore section | ✅ Yes |
| Chaos | `.character-chaos` | Character card (dark) | ✅ Yes |
| Memory | `.character-memory` | Character card (pink) | ✅ Yes |
| Rave | `.character-rave` | Character card (gradient) | ✅ Yes |
| Newsletter | `.newsletter` | Email signup | ✅ Yes |
| Footer | `.site-footer` | Social links | ✅ Yes |

---

## 🔧 Customization Guide

### 1. Colors (CSS Variables)

All colors are defined at the top of the `<style>` block:

```css
:root {
    /* Primary Colors - Edit these! */
    --color-neon-green: #00FF41;
    --color-neon-cyan: #00FFFF;
    --color-hot-pink: #FF1493;
    --color-magenta: #FF00FF;
    --color-coral: #FF6B6B;
    
    /* Backgrounds */
    --color-bg-dark: #0a0a0a;
    --color-bg-light: #f5f5f0;
    --color-bg-cream: #faf9f6;
}
```

### 2. Fonts

Change fonts by updating these variables:

```css
:root {
    --font-display: 'Anton', sans-serif;      /* Headlines */
    --font-mono: 'Space Mono', monospace;      /* Body text */
    --font-serif: 'Playfair Display', serif;   /* Accent text */
}
```

### 3. Adding a New Character Section

1. Copy an existing character section (e.g., `.character-chaos`)
2. Rename the classes (e.g., `.character-newchar`)
3. Update colors in CSS
4. Update content in HTML

**Template for new character:**

```html
<section id="newchar" class="character-newchar">
    <div class="container">
        <div class="character-newchar__hero">
            <h2 class="character-newchar__title">N3W CH4R</h2>
        </div>
        <div class="character-newchar__image">
            <img src="your-image.jpg" alt="Character Name">
        </div>
        <div class="character-newchar__description">
            <p>Your character description here.</p>
            <dl class="character-newchar__meta">
                <div>
                    <dt>Alignment</dt>
                    <dd>Your Alignment</dd>
                </div>
                <!-- More meta items -->
            </dl>
        </div>
    </div>
</section>
```

### 4. Removing a Section

Simply delete the HTML between the comment markers:

```html
<!-- ==========================================
     SECTION: HERO
     ========================================== -->
<!-- Delete from here... -->
<section class="hero">
    ...
</section>
<!-- ...to here -->
```

Also remove the corresponding CSS block if you want to reduce file size.

---

## 🖼️ Adding Images

Replace placeholder divs with actual images:

**Before:**
```html
<div style="width:100%;height:100%;background:...">
    [CHARACTER IMAGE]
</div>
```

**After:**
```html
<img src="images/chaos-character.jpg" alt="Chaos - Entity of Creation">
```

---

## ⚡ JavaScript Features

### Scroll Animations
All sections fade in on scroll using Intersection Observer.

### Smooth Scrolling
Navigation links smoothly scroll to sections.

### Form Handling
Newsletter form includes basic validation and submission handling.

**To disable animations:**
```javascript
// Comment out or remove this block:
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile: 0 - 768px */
@media (max-width: 768px) {
    /* Navigation hidden */
    /* Single column layouts */
    /* Adjusted font sizes */
}
```

---

## 🎭 Special Effects

### Glitch Text Effect

Add to any element:
```html
<span class="glitch" data-text="YOUR TEXT">YOUR TEXT</span>
```

### Pulsing Animation

Add to any element:
```html
<div class="animate-pulse">Content</div>
```

---

## 📋 Quick Start Checklist

- [ ] Update hero title text
- [ ] Replace placeholder images
- [ ] Customize color variables
- [ ] Update character names/descriptions
- [ ] Add your social links in footer
- [ ] Configure newsletter form action
- [ ] Remove unwanted sections
- [ ] Test on mobile devices

---

## 🔗 Resources

- **Fonts Used**: [Google Fonts](https://fonts.google.com/)
  - Anton (Display)
  - Space Mono (Body)
  - Playfair Display (Accent)

---

## 📄 License

Free to use and modify for personal and commercial projects.

---

Made with 💚 in the 1337 Universe
