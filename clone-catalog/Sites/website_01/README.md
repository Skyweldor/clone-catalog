# Revitin Clone - Modular Website Template

A clean, modular clone of the Revitin toothpaste website, designed with easily removable and recyclable sections.

## 📁 File Structure

```
revitin-clone/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete stylesheet with CSS variables
├── script.js       # JavaScript for interactivity
└── README.md       # This documentation
```

## 🎨 Quick Customization

### Changing Brand Colors

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    /* Primary Colors - Change these for your brand */
    --color-primary: #2D5016;        /* Main brand color */
    --color-primary-light: #4A7A2A;  /* Lighter variant */
    --color-primary-dark: #1E3A0F;   /* Darker variant */
    
    /* Accent Colors */
    --color-accent: #E8A54B;         /* Call-to-action, highlights */
    
    /* Background Colors */
    --color-bg-cream: #FAF6F0;       /* Main background */
    --color-bg-warm: #F5EDE0;        /* Section backgrounds */
    --color-bg-sage: #E8EDE3;        /* Alternate sections */
}
```

### Changing Fonts

Modify the font variables and update the Google Fonts link in `index.html`:

```css
:root {
    --font-display: 'Cormorant Garamond', Georgia, serif;  /* Headings */
    --font-body: 'DM Sans', sans-serif;                    /* Body text */
}
```

---

## 📦 Section Guide

Each section is clearly marked in the HTML with comments for easy identification and removal.

### Available Sections:

| Section ID | Name | Description |
|------------|------|-------------|
| `announcement-bar` | Announcement Bar | Top promotional banner |
| `header` | Header/Navigation | Logo and navigation menu |
| `hero` | Hero | Main banner with headline |
| `product-intro` | Product Intro | "Toothpaste, Evolved" section |
| `products` | Product Showcase | Featured product with options |
| `trust-badges` | Trust Badges | Scrolling badge bar |
| `prebiotics` | Prebiotics | Educational content about prebiotics |
| `ingredients` | Ingredients | Ingredient cards |
| `comparison` | Comparison Table | Us vs. Them comparison |
| `problems` | Problems | Common problems section |
| `microbiome` | Microbiome | "Pretend your mouth is a city" |
| `why-revitin` | Why Revitin | Three feature cards |
| `testimonials` | Testimonials | Customer reviews |
| `cta` | CTA Banner | Final call-to-action |
| `footer` | Footer | Site links and newsletter |

---

## ✂️ How to Remove a Section

### Step 1: Remove HTML
Find the section in `index.html` between the comment markers:

```html
<!-- ============================================
     SECTION: SECTION_NAME
     ...
     ============================================ -->
<section id="section-id">
    ...
</section>
<!-- END: SECTION_NAME -->
```

Delete everything from the opening comment to the closing comment.

### Step 2: Remove CSS (Optional)
Find the corresponding CSS in `styles.css`:

```css
/* ============================================
   X. SECTION_NAME
   ============================================ */
.section-class {
    ...
}
```

### Step 3: Update Navigation
If the section was linked in the navigation, update the nav links.

---

## 🔄 How to Reorder Sections

Simply cut and paste the entire section block (including comments) to your desired position in `index.html`.

---

## 📋 Section Templates for Reuse

### Basic Section Template

```html
<!-- ============================================
     SECTION: YOUR_SECTION_NAME
     - Description of what this section does
     ============================================ -->
<section id="your-section" class="your-section">
    <div class="container">
        <span class="section-label">Label</span>
        <h2 class="section-title">Your Title</h2>
        <p class="section-description">Your description text.</p>
        
        <!-- Your content here -->
        
    </div>
</section>
<!-- END: YOUR_SECTION_NAME -->
```

### Card Grid Template

```html
<div class="your-grid">
    <div class="your-card">
        <div class="card-icon">🎯</div>
        <h4>Card Title</h4>
        <p>Card description text goes here.</p>
    </div>
    <!-- Repeat for more cards -->
</div>
```

### Two-Column Layout Template

```html
<div class="two-col-container">
    <div class="col-image">
        <img src="your-image.jpg" alt="Description">
    </div>
    <div class="col-content">
        <span class="section-label">Label</span>
        <h2 class="section-title">Title</h2>
        <p class="section-text">Your text content.</p>
        <a href="#" class="btn btn-primary">Button Text</a>
    </div>
</div>
```

---

## 🧩 Component Classes

### Buttons

```html
<!-- Primary Button -->
<a href="#" class="btn btn-primary">Primary Button</a>

<!-- Secondary Button -->
<a href="#" class="btn btn-secondary">Secondary Button</a>

<!-- Full Width Button -->
<button class="btn btn-primary btn-full">Full Width</button>

<!-- Large Button -->
<a href="#" class="btn btn-primary btn-large">Large Button</a>
```

### Typography

```html
<span class="section-label">Small Label</span>
<h2 class="section-title">Section Title</h2>
<p class="section-subtitle">Subtitle text</p>
<p class="section-description">Description text</p>
<p class="section-text">Regular paragraph text</p>
```

### Cards

```html
<!-- Feature Card -->
<div class="feature-card">
    <span class="feature-number">01</span>
    <div class="feature-icon"><!-- SVG --></div>
    <h3>Feature Title</h3>
    <p>Feature description.</p>
</div>

<!-- Ingredient Card -->
<div class="ingredient-card">
    <div class="ingredient-icon">
        <img src="icon.png" alt="Ingredient">
    </div>
    <h4>Ingredient Name</h4>
    <p>Ingredient benefit.</p>
</div>

<!-- Testimonial Card -->
<div class="testimonial-card">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">"Quote text..."</p>
    <div class="testimonial-author">
        <div class="author-avatar">AB</div>
        <span class="author-name">Author Name</span>
    </div>
</div>
```

---

## 📱 Responsive Breakpoints

The template includes responsive styles for:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## 🖼️ Replacing Placeholder Images

The template uses placeholder images. Replace them with your actual images:

1. **Product Images**: Update the `src` attributes in the product showcase section
2. **Hero Background**: Modify the `.hero-fruits` elements or replace with actual images
3. **Ingredient Icons**: Replace placeholder URLs in the ingredients section
4. **Section Images**: Update image placeholders in prebiotics and microbiome sections

---

## ⚡ Performance Tips

1. **Optimize Images**: Compress all images before adding
2. **Lazy Loading**: Add `loading="lazy"` to images below the fold
3. **Critical CSS**: Consider inlining critical CSS for above-the-fold content
4. **Minify**: Minify CSS and JS for production

---

## 🚀 Deployment

This is a static site that can be deployed to any web host:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a `gh-pages` branch
- **Traditional Hosting**: Upload via FTP

---

## 📝 License

This template is created for educational and personal use. Please ensure you have appropriate rights before using in commercial projects.

---

## 🆘 Support

For questions about customization:

1. Check the section comments in `index.html`
2. Review CSS variable definitions in `styles.css`
3. Look for console logs in `script.js` for debugging

Happy building! 🎉
