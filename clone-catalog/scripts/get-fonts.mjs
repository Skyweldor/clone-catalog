/**
 * Extract computed font info from a live website for clone accuracy.
 * Usage: node scripts/get-fonts.mjs <url>
 * Example: node scripts/get-fonts.mjs https://planetscale.com
 */

import puppeteer from 'puppeteer';

const targetUrl = process.argv[2] || 'https://planetscale.com';

async function getFonts() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 60000 });

  const fontInfo = await page.evaluate(() => {
    const results = {};

    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');
    const body = document.body;

    if (h1) {
      const style = window.getComputedStyle(h1);
      results.h1 = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing
      };
    }

    if (h2) {
      const style = window.getComputedStyle(h2);
      results.h2 = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight
      };
    }

    if (p) {
      const style = window.getComputedStyle(p);
      results.p = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight
      };
    }

    if (body) {
      const style = window.getComputedStyle(body);
      results.body = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
        color: style.color,
        backgroundColor: style.backgroundColor
      };
    }

    results.loadedFonts = [...document.fonts].map(f => ({
      family: f.family,
      weight: f.weight,
      style: f.style
    }));

    return results;
  });

  console.log(JSON.stringify(fontInfo, null, 2));
  await browser.close();
}

getFonts().catch(console.error);
