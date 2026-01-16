# Agency Book Landing Page Template

A modular, easily customizable clone of the [AgencyBook.com](https://www.agencybook.com) website. Built with semantic HTML, CSS custom properties, and vanilla JavaScript.

---

## 🎨 Quick Theme Customization

All theme colors and settings are controlled via CSS variables at the top of the file:

```css
:root {
    /* Primary Colors - Change these to rebrand */
    --color-primary: #0B6B4F;        /* Main green */
    --color-primary-dark: #064535;    /* Darker green */
    --color-primary-light: #0D8A66;   /* Lighter green */
    
    /* Typography */
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Source Sans 3', -apple-system, sans-serif;
}
```

---

## 📦 Section Guide

Each section is clearly marked in the HTML with comments indicating:
- **Removable**: Whether the section can be safely deleted
- **Dependencies**: What other sections or scripts it relies on

### Section Overview

| Section | ID | Removable | Purpose |
|---------|-----|-----------|---------|
| Navigation | `#nav` | ✅ Yes | Fixed header with CTA button |
| Hero | `#hero` | ❌ No* | Main landing area with book cover |
| Featured Quote | `#featured-quote` | ✅ Yes | Single prominent quote |
| Testimonial Carousel | `#testimonials` | ✅ Yes | 3-column testimonial cards |
| Backstory | `#backstory` | ✅ Yes | Long-form content with sticky header |
| Book CTA | `#book-section` | ✅ Yes | Purchase options grid |
| Endorsers Grid | `#endorsers` | ✅ Yes | Avatar gallery of endorsers |
| Newsletter | `#newsletter` | ✅ Yes | Email signup form |
| Quote Blocks | `#quotes` | ✅ Yes | 6-card testimonial grid |
| About Authors | `#about` | ✅ Yes | Author bio with photo |
| Manifesto | `#manifesto` | ✅ Yes | Final quote/mission statement |
| Footer CTA | `#footer` | ✅ Yes | Closing book image |

*Hero is the primary section but can be heavily modified.

---

## 🔧 How to Remove a Section

Simply delete the entire section block from the HTML. Each section is wrapped in clear comments:

```html
<!-- ============================================
     SECTION: Newsletter Signup
     ============================================ -->
<section class="newsletter" id="newsletter">
    ...
</section>
```

The corresponding CSS for each section is also clearly labeled and can be removed if the section is deleted.

---

## 🎯 Section Details

### 1. Navigation (`nav.nav`)
```
Location: Line ~185
CSS: Lines ~100-130
```
- Fixed position header
- Becomes solid on scroll (JS-powered)
- Contains single CTA button

**To customize:**
- Change button text in `.nav__cta`
- Modify scroll threshold in JavaScript (currently 100px)

---

### 2. Hero (`section.hero`)
```
Location: Line ~195
CSS: Lines ~135-220
```
- Two-column layout: content left, book right
- Animated book floating effect
- Organic SVG background shapes

**To customize:**
- Replace book image `src`
- Edit title, subtitle, author text
- Modify SVG shapes for different organic patterns

---

### 3. Featured Quote (`section.featured-quote`)
```
Location: Line ~240
CSS: Lines ~225-240
```
- Simple centered quote
- Elegant typography treatment

---

### 4. Testimonial Carousel (`section.testimonial-carousel`)
```
Location: Line ~250
CSS: Lines ~245-295
```
- Responsive 3-column grid
- Cards with hover lift effect
- Avatar + name + role format

**To add more testimonials:**
```html
<div class="testimonial-card">
    <p class="testimonial-card__quote">"Your quote here"</p>
    <div class="testimonial-card__author">
        <img src="avatar.jpg" class="testimonial-card__avatar">
        <div>
            <p class="testimonial-card__name">Name</p>
            <p class="testimonial-card__role">Title, Company</p>
        </div>
    </div>
</div>
```

---

### 5. Backstory (`section.backstory`)
```
Location: Line ~305
CSS: Lines ~300-345
```
- Two-column layout with sticky title
- Drop cap on first paragraph
- Long-form content area

---

### 6. Book CTA (`section.book-cta`)
```
Location: Line ~350
CSS: Lines ~350-410
```
- Green background section
- Book image + pricing options
- Hover effects on price cards

---

### 7. Endorsers Grid (`section.endorsers`)
```
Location: Line ~395
CSS: Lines ~415-445
```
- Circular avatar gallery
- Hover scale effect
- Flexible wrapping layout

---

### 8. Newsletter (`section.newsletter`)
```
Location: Line ~420
CSS: Lines ~450-490
```
- Email input + submit button
- Form handling in JavaScript
- Responsive stacking on mobile

**To connect to your email service:**
Replace the form submit handler in the JavaScript section.

---

### 9. Quote Blocks (`section.quote-blocks`)
```
Location: Line ~435
CSS: Lines ~495-555
```
- 3x2 grid of testimonial cards
- Colored avatar placeholders
- Hover lift animation

---

### 10. About Authors (`section.about-authors`)
```
Location: Line ~510
CSS: Lines ~560-620
```
- Green gradient background
- Photo + bio layout
- Two CTA buttons

---

### 11. Manifesto (`section.manifesto`)
```
Location: Line ~550
CSS: Lines ~625-645
```
- Large centered text block
- Mission statement style
- Single CTA button

---

### 12. Footer CTA (`section.footer-cta`)
```
Location: Line ~565
CSS: Lines ~650-680
```
- Simple book image showcase
- Green background
- Organic shape background

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 1024px)  /* Tablet */
@media (max-width: 768px)   /* Mobile */
```

Mobile adaptations include:
- Single column layouts
- Reduced padding
- Reordered hero (book above text)
- Stacked form inputs

---

## ✨ Animations

- **Hero book**: Floating animation (6s loop)
- **Cards**: Fade-in on scroll (IntersectionObserver)
- **Nav**: Background transition on scroll
- **Buttons/Cards**: Hover lift effects

---

## 🖼️ Image Assets

Current images are loaded from the original AgencyBook.com CDN. Replace with your own:

| Image | Location | Recommended Size |
|-------|----------|------------------|
| Book cover | Hero, CTA, Footer | 800x1000px PNG |
| Author photo | About section | 800x600px |
| Testimonial avatars | Cards | 200x200px |
| Endorser avatars | Grid | 200x200px |

---

## 🚀 Deployment

This is a single HTML file with no build process. Simply:

1. Replace images with your own
2. Update text content
3. Customize colors in CSS variables
4. Upload to any web host

---

## 📝 License

This template is for personal/commercial use. Original design inspired by AgencyBook.com.
