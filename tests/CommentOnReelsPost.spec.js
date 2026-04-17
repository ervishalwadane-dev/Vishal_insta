import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByRole('textbox', { name: 'Mobile number, username or' }).fill('sushsingh2026');
  //await page.getByRole('textbox', { name: 'Mobile number, username or' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('bug123');
  await page.getByRole('button', { name: 'Log In', exact: true }).click();
  await page.getByRole('button', { name: 'Not now' }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Reels Reels' }).click();
  await page.goto('https://www.instagram.com/reels/DWwBRJvgQil/');
  await page.getByRole('button', { name: 'Comment 302' }).click();
  await page.getByRole('textbox', { name: 'Add a comment…' }).click();
  await page.getByRole('textbox', { name: 'Add a comment…' }).fill('nice');
  await page.getByText('CloseCommentssushsingh2026').click();
});
