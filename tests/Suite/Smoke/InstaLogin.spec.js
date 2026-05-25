const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage.spec');
const { environments } = require('../../../utils/envConfig');

test.describe('Instagram Login', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto( environments.QA.baseURL);
    await loginPage.login(environments.QA.username, environments.QA.password);
    await loginPage.handleOptionalPopups();

    await expect(page).not.toHaveURL(/accounts\/login/);
    await expect(page.getByRole('link', { name: /Home/i })).toBeVisible({ timeout: 15000 });
  });
});
