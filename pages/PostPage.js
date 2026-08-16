const { expect } = require('@playwright/test');
const { time } = require('node:console');
const { title } = require('node:process');

class PostPage {
  constructor(page) {
    this.page = page;
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.SelectFromComputorButton = page.getByRole('button', { name: 'Select from computer' });
    this.fileInput = page.locator('input[type="file"]');
    this.NextButton = page.getByRole('button', { name: 'Next' });
    this.ShareButton = page.getByRole('button', { name: 'Share' });
    this.DoneButton = page.getByRole('button', { name: 'Done' }); // ✅ Added locator


  }

  async createPost() {
  await this.page.goto('https://www.instagram.com/reels/DXUULcQjOyy/');
  await this.page.waitForLoadState('networkidle');
  console.log('Navigated to Instagram homepage');

  // Click Create (+) button
  await this.createButton.click();

  // Handle file chooser
  const fileChooserPromise = this.page.waitForEvent('filechooser');
  await this.SelectFromComputorButton.click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(['C:\\Users\\DELL\\Desktop\\Sample Post.jpg']);
  console.log('File selected successfully');

  // Next → Share
  await this.NextButton.click();
  await this.ShareButton.click();
  console.log('Post shared successfully');

  // Wait for loader to disappear
  await this.page.waitForSelector('.loader', { state: 'detached', timeout: 30000 })
    .catch(() => console.log('Loader not detected, continuing...'));

  // Wait for Done button
  await this.DoneButton.waitFor({ state: 'visible', timeout: 15000 });
  await expect(this.DoneButton).toBeEnabled();
  await this.DoneButton.click();

  console.log('✅ Post creation flow completed');
}
}

module.exports = { PostPage };



// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {

//   await page.getByRole('button', { name: 'Select from computer' }).click();
//   await page.getByRole('button', { name: 'Select from computer' }).setInputFiles('Sample Post.jpg');
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Share' }).click();
//   await page.locator('div').filter({ hasText: 'Sharing' }).nth(4).click();
// });