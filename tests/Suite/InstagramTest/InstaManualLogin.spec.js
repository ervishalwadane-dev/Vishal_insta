const { test, expect } = require('@playwright/test');
const path = require('path');

test('Manual Instagram Login - Preserve Session', async ({ page, context }) => {
  // Set test timeout to 10 minutes
  test.setTimeout(600000);

  // Navigate to Instagram login
  await page.goto('https://www.instagram.com/accounts/login/');

  console.log('📱 Browser opened. Please log in manually to Instagram.');
  console.log('⏳ Waiting for you to complete the login and handle any popups/CAPTCHA...');

  // Wait for user to manually log in and navigate to home (10 minutes for CAPTCHA/2FA)
  await page.waitForURL('https://www.instagram.com/', { timeout: 600000 });

  console.log('✅ Login detected! Saving session...');

  // Wait a bit for the page to fully load
  await page.waitForLoadState('networkidle');

  // Save the session storage state
  await context.storageState({ path: path.join(__dirname, '../../../instagramStorageState.json') });

  console.log('✅ Fresh Instagram session saved to instagramStorageState.json');
  console.log('🎉 You can now run other Instagram tests!');
});
