/**
 * Compare clone vs. original site screenshots side by side.
 * Usage: node scripts/compare-screenshot.mjs <site_folder> <original_url>
 * Example: node scripts/compare-screenshot.mjs website_12 https://www.makingsoftware.com/
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const siteFolder = process.argv[2] || 'website_12';
const originalUrl = process.argv[3] || 'https://www.makingsoftware.com/';

async function takeScreenshots() {
  const browser = await puppeteer.launch({ headless: true });

  // Screenshot 1: Local clone
  const page1 = await browser.newPage();
  await page1.setViewport({ width: 1440, height: 900 });
  const localPath = path.join(rootDir, 'Sites', siteFolder, 'index.html');
  await page1.goto(`file://${localPath}`, { waitUntil: 'networkidle0' });
  const clonePath = path.join(rootDir, 'assets', 'images', 'screenshots', `${siteFolder}-clone.png`);
  await page1.screenshot({ path: clonePath, fullPage: true });
  console.log('Clone screenshot saved:', clonePath);

  // Screenshot 2: Original site
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 1440, height: 900 });
  await page2.goto(originalUrl, { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  const originalPath = path.join(rootDir, 'assets', 'images', 'screenshots', `${siteFolder}-original.png`);
  await page2.screenshot({ path: originalPath, fullPage: true });
  console.log('Original screenshot saved:', originalPath);

  await browser.close();
  console.log('Done! Compare the two images in assets/images/screenshots/');
}

takeScreenshots().catch(console.error);
