import { test, expect } from '@playwright/test';
import { PORTFOLIO_ROUTES, PortfolioShell } from '../pages/PortfolioShell';

test.describe('SEO, Accessibility & Theme Baseline @smoke', () => {
  test('each page includes valid SEO meta tags, lang attribute, and Heavy Metal dark canvas', async ({
    page,
  }) => {
    for (const route of PORTFOLIO_ROUTES) {
      const shell = new PortfolioShell(page);
      await shell.goto(route.path);

      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(shell.skipLink).toHaveAttribute('href', '#main-content');

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(description && description.length > 40, `Meta description missing on ${route.path}`).toBe(
        true
      );

      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle, `og:title missing on ${route.path}`).toBeTruthy();

      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(ogImage, `og:image missing on ${route.path}`).toContain('/assets/brand/og-banner.png');

      const bgColor = await page.evaluate(
        () => getComputedStyle(document.body).backgroundColor
      );
      expect(bgColor).toBe('rgb(11, 11, 12)');
    }
  });

  test('Open Graph banner asset resolves with HTTP 200', async ({ request }) => {
    const response = await request.get('/assets/brand/og-banner.png');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('image/png');
  });
});
