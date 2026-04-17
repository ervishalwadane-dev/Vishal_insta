const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.spec');
const { PostPage } = require('../pages/PostPage.spec');
const {environments} = require('../utils/envConfig'); 
const {TestUtils} = require('../utils/testConfig');

test.describe('Create New Post', () => {
  test('should create a new post successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const postPage = new PostPage(page);    
    await page.goto(environments.QA.baseURL);
    await loginPage.login(environments.QA.username, environments.QA.password);
    await postPage.createPost();
    // Add assertions to verify the post was created successfully
  });
}); 
 
 
 
 
 
//  await page.getByRole('link', { name: 'New post Create' }).click();
//   await page.getByRole('button', { name: 'Select from computer' }).click();
//   await page.getByRole('button', { name: 'Select from computer' }).setInputFiles('Sample Post.jpg');
  // await page.locator('button').filter({ hasText: 'Select crop' }).click();
  // await page.getByRole('button', { name: ':1 Crop square icon' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Share' }).click();
  // await page.getByRole('button', { name: 'Done' }).click();
  // await page.goto('https://www.instagram.com/sushsingh2026/');
