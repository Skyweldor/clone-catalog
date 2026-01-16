/* ============================================
   MAKING SOFTWARE TEMPLATE
   JavaScript - Section Management & Interactivity
   ============================================ */

/**
 * Section Manager
 * Utility class for managing modular sections
 */
class SectionManager {
    constructor() {
        this.sections = new Map();
        this.init();
    }

    init() {
        // Register all sections
        document.querySelectorAll('.section, .site-header, .site-footer').forEach(section => {
            const id = section.id || section.className.split(' ')[0];
            this.sections.set(id, {
                element: section,
                visible: true,
                order: this.sections.size
            });
        });

        console.log(`📚 SectionManager: ${this.sections.size} sections registered`);
    }

    /**
     * Hide a section by ID
     */
    hide(sectionId) {
        const section = this.sections.get(sectionId);
        if (section) {
            section.element.classList.add('hidden');
            section.visible = false;
            console.log(`🔒 Section hidden: ${sectionId}`);
        }
        return this;
    }

    /**
     * Show a section by ID
     */
    show(sectionId) {
        const section = this.sections.get(sectionId);
        if (section) {
            section.element.classList.remove('hidden');
            section.visible = true;
            console.log(`🔓 Section shown: ${sectionId}`);
        }
        return this;
    }

    /**
     * Toggle section visibility
     */
    toggle(sectionId) {
        const section = this.sections.get(sectionId);
        if (section) {
            section.visible ? this.hide(sectionId) : this.show(sectionId);
        }
        return this;
    }

    /**
     * Remove a section from DOM
     */
    remove(sectionId) {
        const section = this.sections.get(sectionId);
        if (section) {
            section.element.remove();
            this.sections.delete(sectionId);
            console.log(`🗑️ Section removed: ${sectionId}`);
        }
        return this;
    }

    /**
     * Get list of all section IDs
     */
    list() {
        return Array.from(this.sections.keys());
    }

    /**
     * Reorder sections
     */
    reorder(sectionIds) {
        const main = document.querySelector('main');
        sectionIds.forEach(id => {
            const section = this.sections.get(id);
            if (section && section.element.parentNode === main) {
                main.appendChild(section.element);
            }
        });
        console.log(`🔄 Sections reordered`);
        return this;
    }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

/**
 * Newsletter form handler
 */
function initNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            
            if (email && email.includes('@')) {
                // Replace with your actual newsletter signup logic
                console.log(`📧 Newsletter signup: ${email}`);
                alert(`Thanks for signing up! We'll notify you at ${email}`);
                this.reset();
            } else {
                alert('Please enter a valid email address');
            }
        });
    });
}

/**
 * Add hover effects to diagrams
 */
function initDiagramInteractions() {
    document.querySelectorAll('.blueprint-diagram, .diagram-full').forEach(diagram => {
        diagram.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        diagram.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Table of Contents click handler
 */
function initTocNavigation() {
    document.querySelectorAll('.toc-list li').forEach(item => {
        item.addEventListener('click', function() {
            // Add active state
            document.querySelectorAll('.toc-list li').forEach(li => {
                li.style.color = '';
            });
            this.style.color = 'var(--blue)';
            
            // You can add navigation logic here
            console.log(`📖 Selected: ${this.textContent}`);
        });
    });
}

/**
 * Initialize all features
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize section manager (available globally)
    window.sectionManager = new SectionManager();
    
    // Initialize interactive features
    initSmoothScroll();
    initScrollAnimations();
    initNewsletterForms();
    initDiagramInteractions();
    initTocNavigation();
    
    console.log('✅ Making Software Template initialized');
    console.log('💡 Tip: Use window.sectionManager to manage sections');
    console.log('   - sectionManager.list() - List all sections');
    console.log('   - sectionManager.hide("section-id") - Hide a section');
    console.log('   - sectionManager.show("section-id") - Show a section');
    console.log('   - sectionManager.remove("section-id") - Remove a section');
});

/* ============================================
   SECTION TEMPLATES
   Copy these to add new sections
   ============================================ */

/**
 * Template: Basic Text Section
 * 
 * <section class="section" id="my-new-section">
 *     <div class="section-grid">
 *         <div class="content">
 *             <h3>Section Title</h3>
 *             <p>Your content here...</p>
 *         </div>
 *         <aside class="illustration">
 *             <!-- Add SVG or image -->
 *         </aside>
 *     </div>
 * </section>
 */

/**
 * Template: Full-width Diagram Section
 * 
 * <section class="section" id="my-diagram-section">
 *     <div class="diagram-full">
 *         <h3 class="diagram-title">DIAGRAM TITLE</h3>
 *         <svg viewBox="0 0 800 400">
 *             <!-- Your SVG content -->
 *         </svg>
 *     </div>
 * </section>
 */

/**
 * Template: CTA Section
 * 
 * <section class="section cta" id="my-cta">
 *     <div class="cta-content">
 *         <h3 class="cta-title">CALL TO ACTION</h3>
 *         <p class="cta-desc">Description text</p>
 *         <div class="cta-buttons">
 *             <a href="#" class="btn btn-outline">BUTTON 1</a>
 *             <a href="#" class="btn btn-primary">BUTTON 2</a>
 *         </div>
 *     </div>
 * </section>
 */
