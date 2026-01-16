/* ============================================
   REVITIN CLONE - JAVASCRIPT
   
   Table of Contents:
   1. DOM Elements
   2. Header Scroll Effect
   3. Product Options Selector
   4. Smooth Scroll
   5. Intersection Observer Animations
   6. Newsletter Form
   7. Initialize
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       1. DOM ELEMENTS
       ============================================ */
    const header = document.getElementById('header');
    const flavorBtns = document.querySelectorAll('.flavor-btn');
    const sizeBtns = document.querySelectorAll('.size-btn');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    /* ============================================
       2. HEADER SCROLL EFFECT
       - Adds shadow on scroll
       ============================================ */
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(250, 246, 240, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'var(--color-bg-cream)';
        }
        
        lastScroll = currentScroll;
    });
    
    /* ============================================
       3. PRODUCT OPTIONS SELECTOR
       - Flavor and size toggle
       ============================================ */
    flavorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            flavorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // You can add logic here to update product image/price
            const flavor = btn.dataset.flavor;
            console.log(`Selected flavor: ${flavor}`);
        });
    });
    
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // You can add logic here to update product image/price
            console.log(`Selected size: ${btn.textContent}`);
        });
    });
    
    /* ============================================
       4. SMOOTH SCROLL
       - For anchor links
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /* ============================================
       5. INTERSECTION OBSERVER ANIMATIONS
       - Fade in elements on scroll
       ============================================ */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger children animations if they have the class
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('visible');
                });
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Auto-add animation class to section content
    const sections = [
        '.product-intro',
        '.prebiotics-content',
        '.ingredients-section .container',
        '.microbiome-content',
        '.why-section .container',
        '.testimonials-section .container',
        '.cta-section .container'
    ];
    
    sections.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        }
    });
    
    /* ============================================
       6. NEWSLETTER FORM
       - Basic form submission handling
       ============================================ */
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Simulate form submission
                const button = this.querySelector('button');
                const originalText = button.textContent;
                
                button.textContent = 'Subscribing...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Subscribed!';
                    button.style.backgroundColor = 'var(--color-success)';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '';
                        button.disabled = false;
                    }, 2000);
                }, 1000);
            }
        });
    }
    
    /* ============================================
       7. ADD TO CART BUTTONS
       - Basic add to cart feedback
       ============================================ */
    const addToCartBtns = document.querySelectorAll('.btn-primary');
    
    addToCartBtns.forEach(btn => {
        if (btn.textContent.includes('Add to Cart')) {
            btn.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'Added!';
                this.style.backgroundColor = 'var(--color-accent)';
                
                // Update cart count
                const cartCount = document.querySelector('.cart-count');
                if (cartCount) {
                    const currentCount = parseInt(cartCount.textContent);
                    cartCount.textContent = currentCount + 1;
                    cartCount.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        cartCount.style.transform = 'scale(1)';
                    }, 200);
                }
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '';
                }, 1500);
            });
        }
    });
    
    /* ============================================
       8. MOBILE MENU (if needed)
       - Basic mobile menu toggle
       ============================================ */
    // Add mobile menu functionality if hamburger menu is implemented
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    /* ============================================
       9. COMPARISON TABLE HIGHLIGHT
       - Highlight row on hover
       ============================================ */
    const comparisonRows = document.querySelectorAll('.comparison-row');
    
    comparisonRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'rgba(45, 80, 22, 0.05)';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
        });
    });
    
    console.log('Revitin Clone Template Initialized');
});

/* ============================================
   SECTION REMOVAL HELPER
   
   To remove a section:
   1. Delete the HTML section (between <!-- SECTION: --> comments)
   2. Delete corresponding CSS (between /* SECTION */ comments)
   3. Remove any section-specific JS if needed
   
   Sections are designed to be independent and removable.
   ============================================ */
