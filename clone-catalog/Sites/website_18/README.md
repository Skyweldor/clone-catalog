# PlanetScale Website Template

A modular, dark-themed landing page template inspired by PlanetScale's design. Each section is clearly documented and can be easily removed, modified, or recycled for your own projects.

## 🎨 Design Features

- **Dark theme** with teal/cyan accent colors
- **Glassmorphism** header with backdrop blur
- **Animated** performance graph
- **ASCII** architecture diagrams
- **Responsive** design for all screen sizes
- **Modular** sections for easy customization

## 📁 Section Map

| Section | Line Start | Removable | Description |
|---------|------------|-----------|-------------|
| **Announcement Bar** | ~Line 400 | ✅ Yes | Top banner for promotions/announcements |
| **Header/Navigation** | ~Line 410 | ❌ Core | Sticky header with logo and nav links |
| **Hero** | ~Line 450 | ❌ Core | Main landing section with headline and CTAs |
| **Logo Cloud** | ~Line 495 | ✅ Yes | Customer/partner logo showcase |
| **Testimonial** | ~Line 515 | ✅ Yes | Featured quote card |
| **Architecture** | ~Line 540 | ✅ Yes | Technical diagram with tabs |
| **Performance** | ~Line 580 | ✅ Yes | Metrics graph and stat cards |
| **Uptime** | ~Line 630 | ✅ Yes | Feature list with visual |
| **Cost** | ~Line 665 | ✅ Yes | Pricing features (reversed layout) |
| **Security** | ~Line 705 | ✅ Yes | Compliance features |
| **Features Grid** | ~Line 745 | ✅ Yes | 6-card feature showcase |
| **CTA Banner** | ~Line 835 | ✅ Yes | Call-to-action section |
| **Footer** | ~Line 850 | ❌ Core | Multi-column footer with links |

## 🛠️ How to Remove a Section

Each section is wrapped in HTML comments that clearly mark its boundaries:

```html
<!-- ============================================
     SECTION: SECTION_NAME
     Removable: Yes - Delete entire section
     ============================================ -->
<section class="section-name">
    ...
</section>
```

Simply delete everything from `<!-- SECTION: ... -->` to the closing `</section>` tag.

## 🎨 CSS Variables (Easy Customization)

All colors, fonts, and spacing are controlled via CSS variables at the top of the `<style>` block:

```css
:root {
    /* Colors - Change these to match your brand */
    --color-bg-primary: #0a0a0f;
    --color-bg-secondary: #12121a;
    --color-accent-primary: #00d4aa;    /* Main accent (teal) */
    --color-accent-secondary: #00b894;  /* Secondary accent */
    
    /* Typography */
    --font-display: 'Plus Jakarta Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Spacing */
    --section-padding: 100px 0;
    --container-width: 1200px;
}
```

## 📐 Section Components

### Content Section (Uptime/Cost/Security pattern)
```html
<section class="content-section">
    <div class="container">
        <div class="content-grid">          <!-- or content-grid reverse -->
            <div class="content-text">
                <div class="section-label">Label</div>
                <h2>Heading</h2>
                <p>Description</p>
                <ul class="content-list">
                    <li><svg>...</svg><span>Feature</span></li>
                </ul>
            </div>
            <div class="content-visual">
                <!-- Visual element -->
            </div>
        </div>
    </div>
</section>
```

### Feature Card
```html
<div class="feature-card">
    <div class="feature-icon">
        <svg>...</svg>
    </div>
    <h3>Feature Title</h3>
    <p>Feature description text.</p>
    <a href="#" class="feature-link">
        Learn more <svg>→</svg>
    </a>
</div>
```

### Stat Card
```html
<div class="stat-card">
    <div class="stat-value">99.999%</div>
    <div class="stat-label">Uptime SLA</div>
</div>
```

### Testimonial Card
```html
<div class="testimonial-card">
    <blockquote>"Quote text here"</blockquote>
    <div class="testimonial-author">
        <div class="testimonial-avatar">TB</div>
        <div class="testimonial-info">
            <strong>Name</strong>
            <span>@Company</span>
        </div>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **1024px**: Features grid → 2 columns, Content grid → single column
- **768px**: Mobile navigation, Hero adjustments, Footer reorganization
- **480px**: Stats → single column, Footer → single column

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Customize CSS variables at the top
3. Replace placeholder content (YourBrand, text, links)
4. Remove any sections you don't need
5. Add your own images and logos

## 📝 Customization Tips

### Change the accent color:
```css
--color-accent-primary: #YOUR_COLOR;
--color-accent-secondary: #YOUR_DARKER_COLOR;
--color-accent-glow: rgba(YOUR_RGB, 0.15);
```

### Add a light theme:
Create a `.light-theme` class and override the color variables.

### Add more feature cards:
Copy an existing `.feature-card` and update the content.

### Change the architecture diagram:
Edit the `<pre>` content inside `.architecture-diagram`.

## 📦 Dependencies

- **Google Fonts**: Plus Jakarta Sans, JetBrains Mono
- **No JavaScript frameworks required** - Pure vanilla JS for interactions

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

---

Built with ❤️ as a template based on PlanetScale's excellent design.
