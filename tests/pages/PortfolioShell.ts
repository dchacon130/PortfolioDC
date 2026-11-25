import { expect, type Locator, type Page } from '@playwright/test';

export interface RouteSpec {
  name: string;
  path: string;
  expectedTitlePart: string;
}

export const PORTFOLIO_ROUTES: RouteSpec[] = [
  { name: 'Home', path: '/', expectedTitlePart: 'Diego Chacón' },
  { name: 'Work', path: '/portfolio', expectedTitlePart: 'Work & Experience' },
  { name: 'About', path: '/about', expectedTitlePart: 'About' },
  { name: 'Services', path: '/services', expectedTitlePart: 'Services' },
  { name: 'Contact', path: '/contact', expectedTitlePart: 'Contact' },
];

/**
 * Page Object Model for Portfolio DC navigation shell and common checks.
 */
export class PortfolioShell {
  readonly page: Page;
  readonly header: Locator;
  readonly footer: Locator;
  readonly mobileMenuButton: Locator;
  readonly mobileMenu: Locator;
  readonly skipLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header');
    this.footer = page.locator('footer');
    this.mobileMenuButton = page.getByRole('button', { name: 'Toggle navigation menu' });
    this.mobileMenu = page.locator('#mobile-menu');
    this.skipLink = page.getByRole('link', { name: 'Skip to content' });
  }

  async goto(path: string) {
    const response = await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(response?.status(), `Expected 200 OK for ${path}`).toBe(200);
  }

  desktopNavLink(label: string): Locator {
    return this.header
      .getByRole('navigation', { name: 'Primary navigation' })
      .getByRole('link', { name: label, exact: true });
  }

  mobileNavLink(label: string): Locator {
    return this.mobileMenu.getByRole('link', { name: label, exact: true });
  }
}
