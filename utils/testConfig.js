const { test } = require('@playwright/test');

// Instagram Test Utilities
class InstagramTestUtils {
  // Wait for element
  static async waitForElement(page, selector, timeout = 10000) {
    await page.waitForSelector(selector, { timeout });
  }

  // Take screenshot
  static async takeScreenshot(page, fileName) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const path = `screenshots/${fileName}-${timestamp}.png`;
    await page.screenshot({ path });
    console.log(`Screenshot saved: ${path}`);
    return path;
  }

  // Clear cookies
  static async clearCookies(page) {
    await page.context().clearCookies();
    console.log('Cookies cleared');
  }

  // Clear local storage
  static async clearLocalStorage(page) {
    await page.evaluate(() => localStorage.clear());
    console.log('Local storage cleared');
  }

  // Clear session storage
  static async clearSessionStorage(page) {
    await page.evaluate(() => sessionStorage.clear());
    console.log('Session storage cleared');
  }

  // Generate random string
  static generateRandomString(length = 8) {
    return Math.random().toString(36).substring(2, length + 2);
  }

  // Generate random email
  static generateRandomEmail() {
    return `test_${this.generateRandomString()}@testmail.com`;
  }

  // Generate random username
  static generateRandomUsername() {
    return `testuser_${this.generateRandomString()}`;
  }

  // Scroll to element
  static async scrollToElement(page, selector) {
    await page.locator(selector).scrollIntoViewIfNeeded();
  }

  // Wait for network idle
  static async waitForNetworkIdle(page) {
    await page.waitForLoadState('networkidle');
  }

  // Get text content
  static async getTextContent(page, selector) {
    return await page.locator(selector).textContent();
  }

  // Get all text contents
  static async getAllTextContents(page, selector) {
    return await page.locator(selector).allTextContents();
  }

  // Check if element is visible
  static async isElementVisible(page, selector, timeout = 5000) {
    return await page.locator(selector).isVisible({ timeout }).catch(() => false);
  }

  // Check if element is enabled
  static async isElementEnabled(page, selector) {
    return await page.locator(selector).isEnabled().catch(() => false);
  }

  // Click element if exists
  static async clickIfVisible(page, selector) {
    const isVisible = await this.isElementVisible(page, selector);
    if (isVisible) {
      await page.locator(selector).click();
      return true;
    }
    return false;
  }

  // Fill input field
  static async fillInput(page, selector, value) {
    await page.locator(selector).fill(value);
  }

  // Get URL
  static async getCurrentURL(page) {
    return page.url();
  }

  // Wait for URL
  static async waitForURL(page, urlPattern, timeout = 10000) {
    await page.waitForURL(urlPattern, { timeout });
  }

  // Hover over element
  static async hoverElement(page, selector) {
    await page.locator(selector).hover();
  }

  // Double click element
  static async doubleClick(page, selector) {
    await page.locator(selector).dblclick();
  }

  // Right click element
  static async rightClick(page, selector) {
    await page.locator(selector).click({ button: 'right' });
  }

  // Keyboard press
  static async keyboardPress(page, key) {
    await page.keyboard.press(key);
  }

  // Type text
  static async typeText(page, selector, text, delay = 50) {
    await page.locator(selector).type(text, { delay });
  }
}

module.exports = { InstagramTestUtils };
