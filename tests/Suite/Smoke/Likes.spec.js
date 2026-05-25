const { test, expect } = require('@playwright/test');
const { environments } = require('../../../utils/envConfig');
const { LoginPage } = require('../../../pages/LoginPage.spec');

test.describe('Instagram Likes', () => {
  test('logs into Instagram and likes the first feed post', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(environments.QA.baseURL);
    await loginPage.login(environments.QA.username, environments.QA.password);
    await loginPage.handleOptionalPopups(); 

    const likeButton = page.getByRole('button', { name: 'Like' }).first();
    await expect(likeButton).toBeVisible({ timeout: 15000 });
    await likeButton.click();
    await expect(page.getByRole('button', { name: 'Unlike' }).first()).toBeVisible({ timeout: 15000 });
  });
}); 



// test('logs into Instagram and likes the first feed post', async ({ page }) => {
//   await page.goto(environments.QA.baseURL);
//   await page.getByRole('textbox', { name: 'Mobile number, username or' }).fill(environments.QA.username);
//   await page.getByRole('textbox', { name: 'Password' }).fill(environments.QA.password);
//   await page.getByRole('button', { name: 'Log In', exact: true }).click();

//   await page.waitForLoadState('networkidle');

//   const notNowButton = page.getByRole('button', { name: 'Not now' });
//   if (await notNowButton.isVisible({ timeout: 5000 }).catch(() => false)) {
//     await notNowButton.click();
//   }

//   const notNowAltButton = page.getByRole('button', { name: 'Not Now' });
//   if (await notNowAltButton.isVisible({ timeout: 5000 }).catch(() => false)) {
//     await notNowAltButton.click();
//   }

//   const likeButton = page.getByRole('button', { name: 'Like' }).first();
//   await expect(likeButton).toBeVisible({ timeout: 15000 });
//   await likeButton.click();

//   await expect(page.getByRole('button', { name: 'Unlike' }).first()).toBeVisible({ timeout: 15000 });
// });