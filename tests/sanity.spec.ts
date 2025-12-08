import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://control.staging.eu.autofleet.io/login');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/autofleet/);

  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
