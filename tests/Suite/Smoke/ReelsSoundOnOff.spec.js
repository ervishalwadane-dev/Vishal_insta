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
  await page.locator('div:nth-child(8) > div > .x78zum5.xedcshv.x4a1udu > .x78zum5.xedcshv > .x78zum5.xdt5ytf.xl56j7k.x1n2onr6 > .xp9pnto > .x1lliihq.x5yr21d.x1n2onr6 > div > .x5yr21d.x1n2onr6 > .x5yr21d.x1uhb9sk > div > .x5yr21d.x10l6tqk > .x78zum5.xdt5ytf.x5yr21d > .x1ey2m1c.x9f619 > .x1ej3kyw > .x191j7n5 > .x1i10hfl').click();
  await page.locator('div:nth-child(8) > div > .x78zum5.xedcshv.x4a1udu > .x78zum5.xedcshv > .x78zum5.xdt5ytf.xl56j7k.x1n2onr6 > .xp9pnto > .x1lliihq.x5yr21d.x1n2onr6 > div > .x5yr21d.x1n2onr6 > .x5yr21d.x1uhb9sk > div > .x5yr21d.x10l6tqk > .x78zum5.xdt5ytf.x5yr21d > .x1ey2m1c.x9f619 > .x1ej3kyw > .x191j7n5 > .x1i10hfl').click();
});
