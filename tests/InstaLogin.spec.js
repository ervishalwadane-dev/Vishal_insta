const { test } =require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.spec');

// test.describe('Instagram Login', () => {
//   let loginPage;

//   test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page);

//   });

    test('should log in successfully', async () => {
    await LoginPage.goto();
    await LoginPage.login('sushsingh2026', 'bug123');
    // await loginPage.assertLoginSuccess();
  });

  // test('should show error message for invalid credentials', async () => {
  //   await loginPage.goto();
  //   await loginPage.login('invalid_user', 'invalid_pass');
  //   await loginPage.assertLoginFailure();
  // });

