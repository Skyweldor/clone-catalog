# Clone Catalog

A centralized showcase and navigation hub for a collection of cloned website projects.

## Overview

Clone Catalog serves as a unified landing page that provides easy browsing and access to a collection of cloned websites. Each site is presented with a thumbnail preview, description, and direct link.

## Features

- Responsive card-based grid layout
- Real-time search and filter functionality
- Thumbnail previews for each site
- Tag-based categorization
- Mobile-friendly design

## Project Structure

```
clone-catalog/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # Global styles
├── js/
│   └── app.js          # Catalog functionality
├── assets/
│   ├── images/         # Thumbnails and graphics
│   └── icons/
├── sites/              # Extracted sub-sites
├── data/
│   └── catalog.json    # Site metadata
├── scripts/
│   └── extract-sites.sh # Build automation
└── Sites/              # Original archives (gitignored)
```

## Getting Started

### Prerequisites

- Git
- A web browser
- Bash (for running extraction scripts)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Skyweldor/clone-catalog.git
   cd clone-catalog
   ```

2. Extract the archived sites:
   ```bash
   chmod +x scripts/extract-sites.sh
   ./scripts/extract-sites.sh
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000`

## Adding New Sites

1. Place the ZIP file or HTML file in the `Sites/` directory
2. Run the extraction script: `./scripts/extract-sites.sh`
3. Capture a screenshot thumbnail (recommended: 400x300px)
4. Add an entry to `data/catalog.json` with site metadata
5. Commit and push changes

## Deployment

This site is deployed via GitHub Pages at:
https://skyweldor.github.io/clone-catalog/

## License

This project is for educational and portfolio purposes.
