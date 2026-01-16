/* ============================================
   MONAVERSE CLONE - MODULAR JAVASCRIPT
   ============================================
   
   TABLE OF CONTENTS:
   1. DOM Ready
   2. Header / Navigation
   3. Smooth Scroll
   4. Gallery Filters
   5. Intersection Observer (Animations)
   6. Lazy Loading Images
   7. Mobile Menu
   
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initSmoothScroll();
    initGalleryFilters();
    initScrollAnimations();
    initMobileMenu();
});

/* ============================================
   2. HEADER / NAVIGATION
   - Sticky header with scroll detection
   - Background opacity on scroll
   ============================================ */
function initHeader() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        // Hide/show header on scroll direction (optional)
        // Uncomment if you want this behavior
        /*
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        */
        
        lastScroll = currentScroll;
    });
}

/* ============================================
   3. SMOOTH SCROLL
   - Smooth scrolling for anchor links
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   4. GALLERY FILTERS
   - Category filter functionality
   - Toggle active states
   ============================================ */
function initGalleryFilters() {
    const filterLinks = document.querySelectorAll('.category-filters a');
    const galleryCards = document.querySelectorAll('.space-card');
    
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Get filter category
            const category = link.textContent.toLowerCase();
            
            // Filter cards (for demo - you can enhance this)
            galleryCards.forEach(card => {
                const tags = card.querySelectorAll('.tag');
                let hasCategory = false;
                
                if (category === 'popular') {
                    hasCategory = true; // Show all for "Popular"
                } else {
                    tags.forEach(tag => {
                        if (tag.textContent.toLowerCase() === category) {
                            hasCategory = true;
                        }
                    });
                }
                
                if (hasCategory) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ============================================
   5. INTERSECTION OBSERVER (Animations)
   - Animate elements on scroll into view
   ============================================ */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.mission-section, .gallery-featured, .space-card, .news-article, .cta-section'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ============================================
   7. MOBILE MENU
   - Toggle mobile navigation
   ============================================ */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!menuToggle || !mainNav) return;
    
    // Create mobile menu overlay
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = mainNav.innerHTML;
    document.body.appendChild(mobileMenu);
    
    // Add mobile menu styles
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu {
            position: fixed;
            top: var(--header-height, 80px);
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            padding: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 999;
            display: none;
        }
        
        .mobile-menu.active {
            transform: translateX(0);
        }
        
        .mobile-menu .nav-list {
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .mobile-menu .nav-list a {
            font-size: 1.25rem;
        }
        
        @media (max-width: 768px) {
            .mobile-menu {
                display: block;
            }
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `;
    document.head.appendChild(style);
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
