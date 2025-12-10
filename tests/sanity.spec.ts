import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('has title', async ({ page }) => {
  await page.goto('https://control.staging.eu.autofleet.io/login');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/autofleet/);

  const loginPage = new LoginPage(page)
  await loginPage.loginToApplication();

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
