const { test } = require('@playwright/test');
                              
// Utility methods
class TestUtils {
  static async clearCookies(page) {
    await page.context().clearCookies();
    console.log('Cookies cleared');
  }

  static async takeScreenshot(page, name) {
    await page.screenshot({ path: `screenshots/${name}.png` });
    console.log(`Screenshot saved: ${name}.png`);
  }

  static generateRandomEmail() {
    return `user_${Date.now()}@test.com`;
  }
}

module.exports = { TestUtils };