import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByRole('textbox', { name: 'Mobile number, username or' }).fill('sushsingh2026');
  //await page.getByRole('textbox', { name: 'Mobile number, username or' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('bug123');
  await page.getByRole('button', { name: 'Log In', exact: true }).click();
  await page.getByRole('button', { name: 'Not now' }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Settings More' }).click();
  await page.getByRole('link', { name: 'Settings Settings' }).click();
});
