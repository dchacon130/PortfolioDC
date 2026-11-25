import { test, expect } from '@playwright/test';
import { PORTFOLIO_ROUTES, PortfolioShell } from '../pages/PortfolioShell';

test.describe('Navigation & Core Pages @smoke', () => {
  test.beforeEach(async ({ page }) => {
    // Stub external Google Fonts CDN so E2E runs deterministically in offline/sandboxed CI
    await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, (route) =>
      route.fulfill({ status: 200, contentType: 'text/css', body: '' })
    );
  });

  for (const route of PORTFOLIO_ROUTES) {
    test(`renders ${route.name} (${route.path}) with zero runtime errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });
      page.on('pageerror', (err) => pageErrors.push(err.message));

      const shell = new PortfolioShell(page);
      await shell.goto(route.path);

      await expect(page).toHaveTitle(new RegExp(route.expectedTitlePart, 'i'));
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      await expect(shell.footer).toBeVisible();

      expect(consoleErrors, `Unexpected console errors on ${route.path}`).toEqual([]);
      expect(pageErrors, `Unexpected page errors on ${route.path}`).toEqual([]);
    });
  }

  test('desktop navigation routes between pages and marks active link', async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, 'Desktop navigation bar is hidden on mobile viewports');

    const shell = new PortfolioShell(page);
    await shell.goto('/');

    await expect(shell.desktopNavLink('Home')).toHaveAttribute('aria-current', 'page');

    await shell.desktopNavLink('Work').click();
    await expect(page).toHaveURL(/\/portfolio\/?$/);
    await expect(shell.desktopNavLink('Work')).toHaveAttribute('aria-current', 'page');

    await shell.desktopNavLink('About').click();
    await expect(page).toHaveURL(/\/about\/?$/);
    await expect(shell.desktopNavLink('About')).toHaveAttribute('aria-current', 'page');

    await shell.desktopNavLink('Services').click();
    await expect(page).toHaveURL(/\/services\/?$/);
    await expect(shell.desktopNavLink('Services')).toHaveAttribute('aria-current', 'page');

    await shell.desktopNavLink('Contact').click();
    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(shell.desktopNavLink('Contact')).toHaveAttribute('aria-current', 'page');
  });

  test('mobile navigation drawer toggles cleanly and closes on Escape', async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, 'Mobile drawer is only active on mobile viewports');

    const shell = new PortfolioShell(page);
    await shell.goto('/');

    await expect(shell.mobileMenu).toBeHidden();
    await shell.mobileMenuButton.click();
    await expect(shell.mobileMenuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(shell.mobileMenu).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(shell.mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(shell.mobileMenu).toBeHidden();

    await shell.mobileMenuButton.click();
    await shell.mobileNavLink('Work').click();
    await expect(page).toHaveURL(/\/portfolio\/?$/);
  });
});
