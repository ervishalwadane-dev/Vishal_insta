import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://www.instagram.com/');
  //await page.getByRole('textbox', { name: 'Mobile number, username or' }).click();
  await page.getByRole('textbox', { name: 'Mobile number, username or' }).fill('sushsingh2026');
  await page.getByRole('textbox', { name: 'Mobile number, username or' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('bug123');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('button', { name: 'Log In', exact: true }).click();
  await page.getByRole('button', { name: 'Not now' }).click();
  await page.goto('https://www.instagram.com/');
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Messages' }).click();
  await page.getByRole('button', { name: 'user-profile-picture' }).click();
  await page.getByRole('textbox').nth(1).fill('How are you vishal');
  await page.getByRole('button', { name: 'Send' }).click();   
  await page.getByRole('button', { name: 'Add Photo or Video' }).click(); 
  await page.getByRole('button', { name: 'Add Photo or Video' }).setInputFiles('Sample Post.jpg');
  await page.getByRole('button', { name: 'Send' }).click();


});

