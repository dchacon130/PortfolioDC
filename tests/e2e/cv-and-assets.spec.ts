import { test, expect } from '@playwright/test';
import { PORTFOLIO_ROUTES, PortfolioShell } from '../pages/PortfolioShell';

test.describe('Resume PDF, Assets & Link Integrity @critical', () => {
  test('resume PDF download link resolves to a valid PDF document', async ({ page, request }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/');

    const cvLink = page.locator('a[download][href$=".pdf"]').first();
    await expect(cvLink).toHaveAttribute('href', '/assets/cv/Diego-Chacon-SDET-CV.pdf');

    const href = await cvLink.getAttribute('href');
    const response = await request.get(href!);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
    expect((await response.body()).byteLength).toBeGreaterThan(50_000);
  });

  test('all visible images load cleanly across pages', async ({ page }) => {
    for (const route of PORTFOLIO_ROUTES) {
      const shell = new PortfolioShell(page);
      await shell.goto(route.path);

      const images = page.locator('img');
      const count = await images.count();
      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(async () => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
          .toBe(true);
      }
    }
  });

  test('contains no legacy broken links (/privacy, /terms) or # placeholders', async ({ page }) => {
    for (const route of PORTFOLIO_ROUTES) {
      const shell = new PortfolioShell(page);
      await shell.goto(route.path);

      await expect(page.locator('a[href="#"]')).toHaveCount(0);
      await expect(page.locator('a[href="/privacy"], a[href="/terms"]')).toHaveCount(0);
    }
  });

  test('portfolio showcases key SDET case studies from updated CV', async ({ page }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/portfolio');

    await expect(page.locator('#ditu-tv').getByRole('heading', { name: /Ditu TV/i })).toBeVisible();
    await expect(page.locator('#sams-club').getByRole('heading', { name: /Sam's Club/i })).toBeVisible();
    await expect(page.locator('#csc-connect').getByRole('heading', { name: /CSC Connect/i })).toBeVisible();
    await expect(page.locator('#traive-finance').getByRole('heading', { name: /Traive Finance/i })).toBeVisible();
  });
});
