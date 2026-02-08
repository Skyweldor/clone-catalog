/**
 * Clone Catalog - Main Application
 * Mainframe-Inspired Design
 */

const CatalogApp = {
    sites: [],
    filteredSites: [],
    activeTags: new Set(),
    currentHighlightIndex: 0,
    featuredSites: [],

    /**
     * Initialize the application
     */
    async init() {
        this.updateTimestamp();
        await this.loadCatalog();
        this.renderHighlights();
        this.renderSites();
        this.renderFilterTags();
        this.bindEvents();
        this.updateSiteCount();
        this.updateResultsCount();
    },

    /**
     * Update timestamp in header
     */
    updateTimestamp() {
        const timestamp = document.getElementById('timestamp');
        const now = new Date();
        const formatted = now.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        timestamp.textContent = `Last updated: ${formatted}`;
    },

    /**
     * Load catalog data from JSON file
     */
    async loadCatalog() {
        try {
            const response = await fetch('data/catalog.json');
            const data = await response.json();
            this.sites = data.sites || [];
            this.filteredSites = [...this.sites];
        } catch (error) {
            console.error('Failed to load catalog:', error);
            this.sites = [];
            this.filteredSites = [];
        }
    },

    /**
     * Render site cards to the grid
     */
    renderSites() {
        const grid = document.getElementById('catalog-grid');

        if (this.filteredSites.length === 0) {
            grid.innerHTML = '<div class="empty-state">No sites found matching your criteria</div>';
            return;
        }

        grid.innerHTML = this.filteredSites.map((site, index) =>
            this.createSiteCard(site, index)
        ).join('');
    },

    /**
     * Initialize the highlights carousel with featured sites
     */
    renderHighlights() {
        const container = document.getElementById('highlights-card');
        if (!container) return;

        this.featuredSites = this.sites.filter(site => site.featured);

        if (this.featuredSites.length === 0) {
            const section = document.getElementById('highlights');
            if (section) section.style.display = 'none';
            return;
        }

        this.currentHighlightIndex = 0;
        this.renderHighlightCard();
    },

    /**
     * Render the current featured site into the highlights carousel
     */
    renderHighlightCard() {
        const container = document.getElementById('highlights-card');
        if (!container || this.featuredSites.length === 0) return;

        const site = this.featuredSites[this.currentHighlightIndex];
        const thumbnail = site.thumbnail || 'assets/images/placeholder.png';
        const tags = site.tags ? site.tags.map(tag =>
            `<span class="site-card__tag" data-tag="${tag}">${tag}</span>`
        ).join('') : '';

        container.innerHTML = `
            <div class="highlights-card__thumbnail-wrapper" data-site-id="${site.id}">
                <img class="highlights-card__thumbnail" src="${thumbnail}" alt="${site.name}" loading="lazy">
                <div class="site-card__overlay">
                    <span class="site-card__overlay-text">Preview</span>
                </div>
            </div>
            <div class="highlights-card__content">
                <span class="site-card__item-no">Highlight ${this.currentHighlightIndex + 1} of ${this.featuredSites.length}</span>
                <h3 class="highlights-card__title">${site.name}</h3>
                <p class="highlights-card__description">${site.description || ''}</p>
                <div class="site-card__tags">${tags}</div>
                <div class="site-card__actions">
                    <a href="${site.path}" class="btn btn-primary" target="_blank">View Site →</a>
                    <span class="tooltip-wrapper" title="Coming Soon">
                        <button class="btn btn-secondary btn-disabled" disabled>Try It Out!</button>
                    </span>
                </div>
            </div>
        `;
    },

    /**
     * Create HTML for a site card with staggered animation delay
     */
    createSiteCard(site, index) {
        const tags = site.tags ? site.tags.map(tag =>
            `<span class="site-card__tag" data-tag="${tag}">${tag}</span>`
        ).join('') : '';

        const thumbnail = site.thumbnail || 'assets/images/placeholder.png';
        const animationDelay = Math.min(index * 0.05, 0.5);

        return `
            <article class="site-card" data-id="${site.id}" style="animation-delay: ${animationDelay}s">
                <div class="site-card__thumbnail-wrapper" data-site-id="${site.id}">
                    <img class="site-card__thumbnail" src="${thumbnail}" alt="${site.name}" loading="lazy">
                    <div class="site-card__overlay">
                        <span class="site-card__overlay-text">Preview</span>
                    </div>
                </div>
                <div class="site-card__content">
                    <span class="site-card__item-no">Item No. ${String(index + 1).padStart(3, '0')}</span>
                    <h3 class="site-card__title">${site.name}</h3>
                    <p class="site-card__description">${site.description || ''}</p>
                    <div class="site-card__tags">${tags}</div>
                    <div class="site-card__actions">
                        <a href="${site.path}" class="btn btn-primary" target="_blank">View Site →</a>
                        <span class="tooltip-wrapper" title="Coming Soon">
                            <button class="btn btn-secondary btn-disabled" disabled>Try It Out!</button>
                        </span>
                    </div>
                </div>
            </article>
        `;
    },

    /**
     * Get all unique tags from sites
     */
    getAllTags() {
        const tags = new Set();
        this.sites.forEach(site => {
            if (site.tags) {
                site.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    },

    /**
     * Render filter tag buttons
     */
    renderFilterTags() {
        const container = document.getElementById('filter-tags');
        const tags = this.getAllTags();

        container.innerHTML = tags.map(tag =>
            `<button class="filter-tag" data-tag="${tag}">${tag}</button>`
        ).join('');
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Filter tags (single-select)
        const filterContainer = document.getElementById('filter-tags');
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-tag')) {
                const clickedTag = e.target.dataset.tag;
                const wasActive = e.target.classList.contains('active');

                // Remove active class from all tags
                filterContainer.querySelectorAll('.filter-tag').forEach(btn => {
                    btn.classList.remove('active');
                });

                // If clicking the same tag, deselect it; otherwise select the new one
                if (wasActive) {
                    this.activeTags.clear();
                } else {
                    this.activeTags.clear();
                    this.activeTags.add(clickedTag);
                    e.target.classList.add('active');
                }

                this.filterSites();
            }
        });

        // Thumbnail click for modal
        document.getElementById('catalog-grid').addEventListener('click', (e) => {
            const thumbnailWrapper = e.target.closest('.site-card__thumbnail-wrapper');
            if (thumbnailWrapper) {
                const siteId = thumbnailWrapper.dataset.siteId;
                this.openModal(siteId);
            }
        });

        // Highlights carousel arrows
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.featuredSites.length === 0) return;
                this.currentHighlightIndex = (this.currentHighlightIndex - 1 + this.featuredSites.length) % this.featuredSites.length;
                this.renderHighlightCard();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.featuredSites.length === 0) return;
                this.currentHighlightIndex = (this.currentHighlightIndex + 1) % this.featuredSites.length;
                this.renderHighlightCard();
            });
        }

        // Thumbnail click for modal in highlights section
        const highlightsCarousel = document.getElementById('highlights-carousel');
        if (highlightsCarousel) {
            highlightsCarousel.addEventListener('click', (e) => {
                const thumbnailWrapper = e.target.closest('.highlights-card__thumbnail-wrapper');
                if (thumbnailWrapper) {
                    const siteId = thumbnailWrapper.dataset.siteId;
                    this.openModal(siteId);
                }
            });
        }

        // Modal events
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');

        modalClose.addEventListener('click', () => this.closeModal());
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                this.closeModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

    },

    /**
     * Filter sites by active tags
     */
    filterSites() {
        this.filteredSites = this.sites.filter(site => {
            // Check active tags
            const matchesTags = this.activeTags.size === 0 ||
                (site.tags && Array.from(this.activeTags).every(tag => site.tags.includes(tag)));

            return matchesTags;
        });

        this.renderSites();
        this.updateSiteCount();
        this.updateResultsCount();
    },

    /**
     * Update the site count display
     */
    updateSiteCount() {
        const countElement = document.getElementById('site-count');
        countElement.textContent = this.sites.length;
    },

    /**
     * Update the results count display
     */
    updateResultsCount() {
        const shownCount = document.getElementById('shown-count');
        const totalCount = document.getElementById('total-count');

        shownCount.textContent = this.filteredSites.length;
        totalCount.textContent = this.sites.length;
    },

    /**
     * Open the preview modal for a site
     */
    openModal(siteId) {
        const site = this.sites.find(s => s.id === siteId);
        if (!site) return;

        const modal = document.getElementById('modal-overlay');
        const modalImage = document.getElementById('modal-image');
        const modalImageContainer = document.getElementById('modal-image-container');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalTags = document.getElementById('modal-tags');
        const modalViewBtn = document.getElementById('modal-view-btn');

        // Use full-page screenshot if available, otherwise fall back to thumbnail
        const screenshotSrc = site.fullPageScreenshot || site.thumbnail || 'assets/images/placeholder.png';
        modalImage.src = screenshotSrc;
        modalImage.alt = `${site.name} full page preview`;

        // Reset scroll position to top when opening modal
        if (modalImageContainer) {
            modalImageContainer.scrollTop = 0;
        }
        modalTitle.textContent = site.name;
        modalDescription.textContent = site.description || '';

        // Render tags
        modalTags.innerHTML = site.tags ? site.tags.map(tag =>
            `<span class="site-card__tag" data-tag="${tag}">${tag}</span>`
        ).join('') : '';

        modalViewBtn.href = site.path;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * Close the preview modal
     */
    closeModal() {
        const modal = document.getElementById('modal-overlay');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    CatalogApp.init();
});
