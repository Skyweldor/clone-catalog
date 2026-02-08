/**
 * Generate full-page screenshots for all sites in the catalog
 * Run: node scripts/generate-screenshots.mjs
 */

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function generateScreenshots() {
    // Load catalog
    const catalogPath = path.join(rootDir, 'data', 'catalog.json');
    const catalog = JSON.parse(readFileSync(catalogPath, 'utf-8'));

    // Ensure screenshots directory exists
    const screenshotsDir = path.join(rootDir, 'assets', 'images', 'screenshots');
    if (!existsSync(screenshotsDir)) {
        mkdirSync(screenshotsDir, { recursive: true });
    }

    const browser = await puppeteer.launch({ headless: true });

    for (const site of catalog.sites) {
        const siteId = site.id;
        const sitePath = path.join(rootDir, site.path, 'index.html');

        // Check if the site exists
        if (!existsSync(sitePath)) {
            console.log(`Skipping ${siteId}: index.html not found`);
            continue;
        }

        console.log(`Generating screenshot for ${siteId}...`);

        try {
            const page = await browser.newPage();
            await page.setViewport({ width: 1440, height: 900 });

            // Navigate to local file
            await page.goto(`file://${sitePath}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Wait a bit for any animations
            await new Promise(resolve => setTimeout(resolve, 500));

            // Take full-page screenshot
            const screenshotPath = path.join(screenshotsDir, `${siteId}.png`);
            await page.screenshot({
                path: screenshotPath,
                fullPage: true
            });

            // Update catalog entry with screenshot path
            site.fullPageScreenshot = `assets/images/screenshots/${siteId}.png`;

            console.log(`  Saved: ${screenshotPath}`);
            await page.close();
        } catch (error) {
            console.error(`  Error with ${siteId}:`, error.message);
        }
    }

    await browser.close();

    // Save updated catalog
    writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
    console.log('\nCatalog updated with fullPageScreenshot paths!');
}

generateScreenshots().catch(console.error);
