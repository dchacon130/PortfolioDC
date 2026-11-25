import { test, expect } from '@playwright/test';
import { PortfolioShell } from '../pages/PortfolioShell';

test.describe('Contact Page & Form UX @critical', () => {
  test('displays direct channels including GitHub, LinkedIn, and Email', async ({ page }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/contact');

    await expect(
      page.locator('main a[href="mailto:dchacon130@gmail.com"]').first()
    ).toBeVisible();
    await expect(
      page.locator('main a[href="https://github.com/dchacon130"]')
    ).toBeVisible();
    await expect(
      page.locator('main a[href="https://www.linkedin.com/in/dchacon130/"]')
    ).toBeVisible();
  });

  test('enforces required fields on empty submission', async ({ page }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/contact');

    const nameInput = page.getByLabel('Name');
    const submitBtn = page.getByRole('button', { name: /Send message/i });

    await submitBtn.click();

    const isValid = await nameInput.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(isValid).toBe(false);
    await expect(page.locator('#form-status')).toBeHidden();
  });

  test('submits inline via AJAX JSON without leaving the page and resets on success', async ({
    page,
  }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/contact');

    let capturedBody: Record<string, string> | null = null;
    await page.route('https://formspree.io/f/**', async (route) => {
      if (route.request().method() === 'POST') {
        capturedBody = route.request().postDataJSON();
      }
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.getByLabel('Name').fill('QA Recruiter');
    await page.getByLabel('Email').fill('recruiter@example.com');
    await page.getByLabel('Message').fill('Interested in discussing a Senior SDET role.');
    await page.getByRole('button', { name: /Send message/i }).click();

    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.locator('#form-status')).toBeVisible();
    await expect(page.locator('#form-status')).toContainText('Message sent');
    expect(capturedBody).toMatchObject({
      name: 'QA Recruiter',
      email: 'recruiter@example.com',
      message: 'Interested in discussing a Senior SDET role.',
    });
    await expect(page.getByLabel('Name')).toHaveValue('');
  });

  test('shows inline fallback email guidance when Formspree returns an error', async ({ page }) => {
    const shell = new PortfolioShell(page);
    await shell.goto('/contact');

    await page.route('https://formspree.io/f/**', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Server error' }),
      });
    });

    await page.getByLabel('Name').fill('QA Recruiter');
    await page.getByLabel('Email').fill('recruiter@example.com');
    await page.getByLabel('Message').fill('Testing error state handling.');
    await page.getByRole('button', { name: /Send message/i }).click();

    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.locator('#form-status')).toBeVisible();
    await expect(page.locator('#form-status')).toContainText('dchacon130@gmail.com');
    await expect(page.locator('#form-status')).toContainText('Server error');
  });
});
