// Generate the test suite for the login page with valid credentials

import { test, expect } from '@playwright/test';
test.describe('Login Page', () => {
  test('should allow user to login successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  } );
}); 

// Generate the test suite for the login page with invalid credentials

test.describe('Login Page - Invalid Credentials', () => {
  test('should show error message for invalid credentials', async ({ page }) => {   
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'invalid_password');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
