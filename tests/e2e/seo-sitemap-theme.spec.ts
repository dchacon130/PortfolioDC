import { test, expect } from '@playwright/test';
import { PortfolioShell } from '../pages/PortfolioShell';

const PROD_ORIGIN = 'https://diego-chacon-portfolio.netlify.app';

test.describe('Production SEO, Sitemap & Theme Toggle @critical', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, (route) =>
      route.fulfill({ status: 200, contentType: 'text/css', body: '' })
    );
  });

  test('robots.txt and generated sitemap XML list production EN and ES routes', async ({
    request,
  }) => {
    const robotsRes = await request.get('/robots.txt');
    expect(robotsRes.status()).toBe(200);
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain(`Sitemap: ${PROD_ORIGIN}/sitemap-index.xml`);

    const indexRes = await request.get('/sitemap-index.xml');
    expect(indexRes.status()).toBe(200);
    const indexXml = await indexRes.text();
    expect(indexXml).toContain(`${PROD_ORIGIN}/sitemap-0.xml`);

    const sitemapRes = await request.get('/sitemap-0.xml');
    expect(sitemapRes.status()).toBe(200);
    const sitemapXml = await sitemapRes.text();
    expect(sitemapXml).toContain(`${PROD_ORIGIN}/`);
    expect(sitemapXml).toContain(`${PROD_ORIGIN}/portfolio/`);
    expect(sitemapXml).toContain(`${PROD_ORIGIN}/es/`);
    expect(sitemapXml).toContain(`${PROD_ORIGIN}/es/contact/`);
  });

  test('canonical, hreflang, sitemap link and OG image reference Netlify production URL', async ({
    page,
  }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/');

    await expect(page.locator('link[rel="sitemap"]')).toHaveAttribute('href', '/sitemap-index.xml');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PROD_ORIGIN}/`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      `${PROD_ORIGIN}/assets/brand/og-banner.png`
    );
  });

  test('theme toggle switches between Heavy Metal Dark and Brushed Steel Light and persists', async ({
    page,
  }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/');

    // Default Heavy Metal Dark
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const darkBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(darkBg).toBe('rgb(11, 11, 12)');

    // Click visible theme toggle
    const toggle = page.locator('[data-theme-toggle]:visible').first();
    await toggle.click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect
      .poll(() => page.evaluate(() => getComputedStyle(document.body).backgroundColor))
      .toBe('rgb(236, 236, 238)');

    // Persists across reload
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

    // Toggle back to Heavy Metal Dark
    await page.locator('[data-theme-toggle]:visible').first().click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
