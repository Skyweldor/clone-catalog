/**
 * Clone Catalog - Main Application
 * Mainframe-Inspired Design
 */

const CatalogApp = {
    sites: [],
    filteredSites: [],
    activeTags: new Set(),

    /**
     * Initialize the application
     */
    async init() {
        this.updateTimestamp();
        await this.loadCatalog();
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
                    <h3 class="site-card__title">${site.name}</h3>
                    <p class="site-card__description">${site.description || ''}</p>
                    <div class="site-card__tags">${tags}</div>
                    <div class="site-card__actions">
                        <a href="${site.path}" class="btn btn-primary" target="_blank">View Site →</a>
                        ${site.originalUrl ? `<a href="${site.originalUrl}" class="btn btn-secondary" target="_blank">Original</a>` : ''}
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

        // Surprise Me button
        const surpriseBtn = document.getElementById('surprise-btn');
        surpriseBtn.addEventListener('click', () => {
            this.surpriseMe();
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
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalTags = document.getElementById('modal-tags');
        const modalViewBtn = document.getElementById('modal-view-btn');
        const modalOriginalBtn = document.getElementById('modal-original-btn');

        modalImage.src = site.thumbnail || 'assets/images/placeholder.png';
        modalImage.alt = `${site.name} preview`;
        modalTitle.textContent = site.name;
        modalDescription.textContent = site.description || '';

        // Render tags
        modalTags.innerHTML = site.tags ? site.tags.map(tag =>
            `<span class="site-card__tag" data-tag="${tag}">${tag}</span>`
        ).join('') : '';

        modalViewBtn.href = site.path;

        if (site.originalUrl) {
            modalOriginalBtn.href = site.originalUrl;
            modalOriginalBtn.style.display = 'inline-flex';
        } else {
            modalOriginalBtn.style.display = 'none';
        }

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
    },

    /**
     * Open a random site (Surprise Me feature)
     */
    surpriseMe() {
        if (this.sites.length === 0) return;

        // Select random site
        const randomIndex = Math.floor(Math.random() * this.sites.length);
        const randomSite = this.sites[randomIndex];

        // Open modal
        this.openModal(randomSite.id);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    CatalogApp.init();
});
