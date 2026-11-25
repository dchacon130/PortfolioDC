import { test, expect } from '@playwright/test';
import { PortfolioShell } from '../pages/PortfolioShell';

const SPANISH_ROUTES = [
  { name: 'Inicio', path: '/es', expectedHeading: /automatización de pruebas confiable/i },
  { name: 'Trabajo', path: '/es/portfolio', expectedHeading: /frameworks de automatización/i },
  { name: 'Sobre mí', path: '/es/about', expectedHeading: /ingeniería de calidad metódica/i },
  { name: 'Servicios', path: '/es/services', expectedHeading: /ingeniería de calidad pragmática/i },
  { name: 'Contacto', path: '/es/contact', expectedHeading: /hablemos sobre tu equipo/i },
];

test.describe('Bilingual i18n (EN default / ES /es/*) @critical', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, (route) =>
      route.fulfill({ status: 200, contentType: 'text/css', body: '' })
    );
  });

  test('defaults to English on / with hreflang alternates for EN and ES', async ({ page }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
  });

  for (const route of SPANISH_ROUTES) {
    test(`renders Spanish ${route.name} (${route.path}) cleanly with lang="es"`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      const shell = new PortfolioShell(page);
      await shell.goto(route.path);

      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
      await expect(page.locator('h1')).toHaveText(route.expectedHeading);
      expect(consoleErrors).toEqual([]);
    });
  }

  test('desktop EN / ES switcher preserves current route across languages', async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, 'Desktop language switcher is in the primary nav bar');

    const shell = new PortfolioShell(page);
    await shell.goto('/portfolio');

    await page
      .getByRole('group', { name: 'Language selector' })
      .getByRole('link', { name: 'ES', exact: true })
      .click();

    await expect(page).toHaveURL(/\/es\/portfolio\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.locator('h1')).toContainText(/frameworks de automatización/i);

    await page
      .getByRole('group', { name: 'Selector de idioma' })
      .getByRole('link', { name: 'EN', exact: true })
      .click();

    await expect(page).toHaveURL(/\/portfolio\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('mobile drawer EN / ES switcher switches cleanly between languages', async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, 'Mobile language switcher lives inside the mobile drawer');

    const shell = new PortfolioShell(page);
    await shell.goto('/about');

    await shell.mobileMenuButton.click();
    await shell.mobileMenu.getByRole('link', { name: 'ES', exact: true }).click();

    await expect(page).toHaveURL(/\/es\/about\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.locator('h1')).toContainText(/ingeniería de calidad metódica/i);
  });

  test('Spanish contact form submits to Formspree and displays localized confirmation', async ({
    page,
  }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/es/contact');

    await page.route('https://formspree.io/f/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.getByLabel('Nombre').fill('Reclutador QA');
    await page.getByLabel('Correo electrónico').fill('reclutador@empresa.com');
    await page.getByLabel('Mensaje').fill('Interesado en conversar sobre un rol Senior SDET.');
    await page.getByRole('button', { name: /Enviar mensaje/i }).click();

    await expect(page.locator('#form-status')).toBeVisible();
    await expect(page.locator('#form-status')).toContainText('Mensaje enviado');
  });
});
