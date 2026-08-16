import { test, expect } from '@playwright/test';

test('Diagnose Instagram Captcha Flow', async ({ page }) => {
  await page.goto('https://www.instagram.com/');

  // Enter credentials
  await page.getByRole('textbox', { name: /Mobile number, username or email/i }).fill('sushsingh2026');
  await page.getByLabel('Password').fill('Vish@7776');
  await page.getByText("Log in", { exact: true }).click();

  console.log('\n=== WAITING FOR RESPONSE ===\n');

  // Wait and check what happens
  await page.waitForTimeout(5000);

  // Log current URL
  console.log('Current URL:', page.url());

  // Check for different captcha types
  console.log('\n=== CHECKING FOR CAPTCHA TYPES ===\n');

  // Check for reCAPTCHA v2
  const recaptchaV2 = await page.locator('iframe[src*="recaptcha"]').count();
  console.log('reCAPTCHA v2 found:', recaptchaV2 > 0);

  // Check for reCAPTCHA v3
  const recaptchaV3 = await page.locator('script[src*="recaptcha"]').count();
  console.log('reCAPTCHA v3 script found:', recaptchaV3 > 0);

  // Check for hCaptcha
  const hcaptcha = await page.locator('iframe[src*="hcaptcha"]').count();
  console.log('hCaptcha found:', hcaptcha > 0);

  // Check for Cloudflare challenge
  const cloudflare = await page.locator('iframe[src*="challenges.cloudflare"]').count();
  console.log('Cloudflare challenge found:', cloudflare > 0);

  // Check for Instagram checkpoint
  const checkpoint = page.url().includes('checkpoint');
  console.log('On checkpoint page:', checkpoint);

  // Check for challenge page
  const challenge = page.url().includes('challenge');
  console.log('On challenge page:', challenge);

  // Log all iframes
  const allIframes = await page.locator('iframe').count();
  console.log('\n=== IFRAMES ON PAGE ===');
  console.log('Total iframes:', allIframes);

  for (let i = 0; i < allIframes; i++) {
    const src = await page.locator('iframe').nth(i).getAttribute('src');
    console.log(`Iframe ${i}:`, src);
  }

  // Check for buttons/verification methods
  console.log('\n=== PAGE ELEMENTS ===');
  const buttons = await page.locator('button').count();
  console.log('Total buttons:', buttons);

  // Take screenshot
  await page.screenshot({ path: 'captcha-screenshot.png' });
  console.log('\n📸 Screenshot saved: captcha-screenshot.png\n');

  // Pause for manual inspection
  await page.pause();
});
