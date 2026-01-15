#!/bin/bash
# Clone Catalog - Site Extraction Script
# Extracts ZIP archives and handles standalone HTML files from the Sites folder

set -e

SITES_DIR="./Sites"
OUTPUT_DIR="./sites"

echo "Clone Catalog - Site Extraction"
echo "================================"

# Check if Sites directory exists
if [ ! -d "$SITES_DIR" ]; then
    echo "Error: Sites directory not found at $SITES_DIR"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Counter for processed sites
zip_count=0
html_count=0

# Extract ZIP files
echo ""
echo "Extracting ZIP archives..."
for zip in "$SITES_DIR"/*.zip; do
    if [ -f "$zip" ]; then
        # Get filename without extension, convert to lowercase, replace spaces with dashes
        name=$(basename "$zip" .zip | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

        # Create directory and extract
        mkdir -p "$OUTPUT_DIR/$name"
        unzip -q -o "$zip" -d "$OUTPUT_DIR/$name"

        echo "  Extracted: $name"
        ((zip_count++))
    fi
done

# Handle standalone HTML files
echo ""
echo "Processing standalone HTML files..."
for html in "$SITES_DIR"/*.html; do
    if [ -f "$html" ]; then
        # Get filename without extension, convert to lowercase, replace spaces with dashes
        name=$(basename "$html" .html | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

        # Create directory and copy as index.html
        mkdir -p "$OUTPUT_DIR/$name"
        cp "$html" "$OUTPUT_DIR/$name/index.html"

        echo "  Copied: $name"
        ((html_count++))
    fi
done

echo ""
echo "================================"
echo "Extraction complete!"
echo "  ZIP files extracted: $zip_count"
echo "  HTML files copied: $html_count"
echo "  Total sites: $((zip_count + html_count))"
echo ""
echo "Sites are available in: $OUTPUT_DIR"
