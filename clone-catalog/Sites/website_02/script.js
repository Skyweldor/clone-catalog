/* ============================================
   SWEHL-INSPIRED TEMPLATE SCRIPTS
   ============================================
   
   Modular JavaScript for template interactivity.
   Each section is clearly labeled for easy modification.
   
   ============================================ */


// ============================================
// HEADER SCROLL BEHAVIOR
// Adds 'scrolled' class when page is scrolled
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check initial state
}


// ============================================
// MOBILE MENU TOGGLE
// Handles hamburger menu for mobile navigation
// ============================================
function initMobileMenu() {
  const menuBtn = document.querySelector('.header__menu-btn');
  const nav = document.querySelector('.header__nav');
  if (!menuBtn || !nav) return;

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    menuBtn.classList.toggle('active', isOpen);
    nav.classList.toggle('mobile-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      menuBtn.classList.remove('active');
      nav.classList.remove('mobile-open');
      document.body.classList.remove('menu-open');
    });
  });
}


// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// Enables smooth scrolling to sections
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}


// ============================================
// SCROLL ANIMATIONS
// Animate elements when they enter viewport
// ============================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}


// ============================================
// MARQUEE PAUSE ON HOVER
// Pauses the marquee animation on hover
// ============================================
function initMarquee() {
  const marqueeTrack = document.querySelector('.marquee__track');
  if (!marqueeTrack) return;

  // Pause on hover is handled by CSS
  // This function can be extended for additional functionality

  // Optional: Adjust speed based on screen width
  function adjustMarqueeSpeed() {
    const speed = window.innerWidth < 768 ? '20s' : '30s';
    marqueeTrack.style.animationDuration = speed;
  }

  window.addEventListener('resize', adjustMarqueeSpeed);
  adjustMarqueeSpeed();
}


// ============================================
// CAROUSEL FUNCTIONALITY
// Simple carousel for resources section
// ============================================
function initCarousel() {
  const carousel = document.querySelector('.resources__carousel');
  const prevBtn = document.querySelector('.carousel-btn--prev');
  const nextBtn = document.querySelector('.carousel-btn--next');

  if (!carousel || !prevBtn || !nextBtn) return;

  const cardWidth = 300; // Approximate card width + gap
  let scrollPosition = 0;

  nextBtn.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });
}


// ============================================
// ADD TO CART BUTTONS
// Handles add to cart interactions
// ============================================
function initAddToCart() {
  const addToCartButtons = document.querySelectorAll('.product-card .btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const originalText = this.textContent;
      this.textContent = 'Added!';
      this.style.backgroundColor = '#28a745';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.backgroundColor = '';
      }, 1500);
    });
  });
}


// ============================================
// NEWSLETTER FORM SUBMISSION
// Handles form submission with validation
// ============================================
function initNewsletterForm() {
  const form = document.querySelector('.newsletter__form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    const submitBtn = this.querySelector('button[type="submit"]');
    
    if (!emailInput.value) {
      emailInput.focus();
      return;
    }

    // Simulate form submission
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing up...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Thanks!';
      emailInput.value = '';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }, 1000);
  });
}


// ============================================
// TESTIMONIALS SLIDER (OPTIONAL)
// Auto-rotate testimonials
// ============================================
function initTestimonialsSlider() {
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length <= 1) return;

  // Optional: Add auto-rotation or manual navigation
  // Currently testimonials are displayed in a grid
  // This function can be extended for carousel behavior
}


// ============================================
// LAZY LOADING IMAGES
// Lazy load images for better performance
// ============================================
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for older browsers
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
}


// ============================================
// UTILITY: Debounce Function
// Limits function calls for performance
// ============================================
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


// ============================================
// UTILITY: Throttle Function
// Limits function calls to once per interval
// ============================================
function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}


// ============================================
// INITIALIZE ALL MODULES
// ============================================
function init() {
  // Core functionality
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  
  // Section-specific
  initMarquee();
  initCarousel();
  initAddToCart();
  initNewsletterForm();
  initTestimonialsSlider();
  
  // Performance
  initLazyLoading();
  initScrollAnimations();

  console.log('🚀 Template initialized successfully');
}


// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


// ============================================
// EXPORT FOR MODULE USE (Optional)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initHeaderScroll,
    initMobileMenu,
    initSmoothScroll,
    initScrollAnimations,
    initMarquee,
    initCarousel,
    initAddToCart,
    initNewsletterForm,
    debounce,
    throttle
  };
}
