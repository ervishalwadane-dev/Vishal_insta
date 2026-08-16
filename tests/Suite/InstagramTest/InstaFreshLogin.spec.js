const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.spec');
const { environments } = require('../../../utils/envConfig');
const path = require('path');

test('Fresh Instagram Login - Generate New Session', async ({ page, context }) => {
  const loginPage = new LoginPage(page);

  // Navigate to Instagram
  await loginPage.goto(environments.QA.baseURL);

  // Perform login with new credentials
  await loginPage.login(environments.QA.username, environments.QA.password);

  // Handle all popups
  await loginPage.handleOptionalPopups();
  await loginPage.handleSaveInfo();
  await loginPage.handleNotifications();

  // Verify successful login
  await loginPage.assertLoggedIn();

  // Save the session storage state
  await context.storageState({ path: path.join(__dirname, '../../../instagramStorageState.json') });

  console.log('✅ Fresh Instagram session created successfully!');
  console.log(`📁 Saved to: instagramStorageState.json`);
});
