/* ============================================
   FISHWIFE TEMPLATE - JAVASCRIPT
   
   Modular component scripts for:
   - Mobile Navigation
   - Product Carousel
   - Press Quote Carousel
   - Cannery Carousel
   - Recipe Carousel
   - Accordion
   - Newsletter Form
   - Smooth Scroll
============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       Mobile Navigation
    ============================================ */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('is-open');
            mobileMenuBtn.classList.toggle('is-active');
            document.body.classList.toggle('menu-open');
        });
    }

    /* ============================================
       Press Quote Carousel (Auto-rotate)
    ============================================ */
    const pressQuotes = document.querySelectorAll('.press-quote');
    let currentQuote = 0;
    
    function rotatePressQuotes() {
        if (pressQuotes.length === 0) return;
        
        pressQuotes.forEach(quote => quote.classList.remove('active'));
        currentQuote = (currentQuote + 1) % pressQuotes.length;
        pressQuotes[currentQuote].classList.add('active');
    }
    
    if (pressQuotes.length > 1) {
        setInterval(rotatePressQuotes, 5000);
    }

    /* ============================================
       Cannery Carousel
    ============================================ */
    const canneryDots = document.querySelectorAll('.cannery-dots .dot');
    const canneryCards = document.querySelectorAll('.cannery-card');
    
    canneryDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            canneryDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // In a full implementation, this would show different cannery cards
            // For now, just update the active state
        });
    });

    /* ============================================
       Recipe Carousel
    ============================================ */
    const recipeCarousel = document.querySelector('.recipes-carousel');
    const recipePrev = recipeCarousel?.querySelector('.carousel-nav.prev');
    const recipeNext = recipeCarousel?.querySelector('.carousel-nav.next');
    
    // Placeholder for recipe carousel navigation
    // In a full implementation, this would cycle through recipe cards
    if (recipePrev && recipeNext) {
        recipePrev.addEventListener('click', function() {
            console.log('Previous recipe');
        });
        
        recipeNext.addEventListener('click', function() {
            console.log('Next recipe');
        });
    }

    /* ============================================
       Accordion (Bundle Section)
    ============================================ */
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                // Close other accordions (optional - for single-open behavior)
                accordionItems.forEach(other => {
                    if (other !== this && other.open) {
                        other.open = false;
                    }
                });
            }
        });
    });

    /* ============================================
       Newsletter Form
    ============================================ */
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate form submission
                const button = this.querySelector('button');
                const originalText = button.textContent;
                
                button.textContent = 'Subscribed!';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    this.reset();
                }, 2000);
                
                console.log('Newsletter signup:', email);
            }
        });
    }

    /* ============================================
       Smooth Scroll for Anchor Links
    ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    /* ============================================
       Intersection Observer for Animations
    ============================================ */
    const animateOnScroll = document.querySelectorAll('[data-section]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);
    
    animateOnScroll.forEach(section => {
        observer.observe(section);
    });

    /* ============================================
       Cart Button Interaction
    ============================================ */
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    
    // Sample cart interaction
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        if (btn.textContent.includes('Add to Cart') || btn.textContent.includes('Add')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Animate button
                this.textContent = 'Added!';
                this.style.backgroundColor = 'var(--color-green-dark)';
                this.style.color = 'var(--color-white)';
                
                // Update cart count
                if (cartCount) {
                    let count = parseInt(cartCount.textContent) || 0;
                    cartCount.textContent = count + 1;
                    
                    // Animate cart
                    cartBtn.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        cartBtn.style.transform = 'scale(1)';
                    }, 200);
                }
                
                // Reset button after delay
                setTimeout(() => {
                    this.textContent = this.dataset.originalText || 'Add to Cart';
                    this.style.backgroundColor = '';
                    this.style.color = '';
                }, 1500);
            });
        }
    });

    /* ============================================
       Product Card Hover Effects
    ============================================ */
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    /* ============================================
       UGC Gallery Video Placeholder Click
    ============================================ */
    const ugcVideos = document.querySelectorAll('.ugc-item.ugc-video');
    
    ugcVideos.forEach(video => {
        video.addEventListener('click', function() {
            // In a full implementation, this would open a video modal
            console.log('Play video from:', this.querySelector('.ugc-handle').textContent);
        });
    });

    /* ============================================
       Header Scroll Behavior
    ============================================ */
    const header = document.querySelector('.section-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    /* ============================================
       Dropdown Menu Keyboard Navigation
    ============================================ */
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-menu');
        
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
                dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
            }
        });
    });

    /* ============================================
       Section Toggle Utility
       Use this to easily show/hide sections
    ============================================ */
    window.toggleSection = function(sectionName) {
        const section = document.querySelector(`[data-section="${sectionName}"]`);
        if (section) {
            section.style.display = section.style.display === 'none' ? '' : 'none';
        }
    };

    /* ============================================
       Remove Section Utility
       Use this to completely remove sections from DOM
    ============================================ */
    window.removeSection = function(sectionName) {
        const section = document.querySelector(`[data-section="${sectionName}"]`);
        if (section) {
            section.remove();
            console.log(`Section "${sectionName}" removed`);
        }
    };

    /* ============================================
       Get All Sections Utility
       Returns list of all section names
    ============================================ */
    window.getAllSections = function() {
        const sections = document.querySelectorAll('[data-section]');
        return Array.from(sections).map(s => s.dataset.section);
    };

    // Log available sections for easy reference
    console.log('Available sections:', window.getAllSections());
    console.log('Use toggleSection("section-name") to show/hide');
    console.log('Use removeSection("section-name") to remove');

});
