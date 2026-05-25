const { expect } = require('@playwright/test');
const { time } = require('node:console');
const { title } = require('node:process');

class PostPage {
  constructor(page) {
    this.page = page;
    this.createButton = page.locator("//*[name()='path' and contains(@d,'M21 11h-8V')]");
    this.SelectFromComputorButton = page.getByText('Select from computer', { exact: true });
    this.fileInput = page.locator('input[type="file"]');
    this.NextButton = page.getByText('Next');
    this.NextButton = page.getByText('Next');
    this.ShareButton = page.locator(':text-is("Share")');
    this.DoneButton = page.getByText('Done', { exact: true }); // ✅ Added locator


  }

  async createPost() {
    //await this.createButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.createButton.click();
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    //await this.SelectFromComputorButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.SelectFromComputorButton.click('Text=Select from computer');
    //await this.fileInput.setInputFiles('C:\\Users\\DELL\\Desktop\\Sample Post.jpg');
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(['C:\\Users\\DELL\\Desktop\\Sample Post.jpg']);
    console.log('File selected successfully');
    //await this.fileInput.setInputFiles('C:\\Users\\DELL\\Desktop\\Sample Post.jpg');
    //await this.fileInput.setInputFiles('C:\\Users\\DELL\\Desktop\\Sample Post.jpg');
    await this.NextButton.click();
    await this.NextButton.click();
    //await this.NextButton.click();
    await this.ShareButton.click();
    console.log('Post created successfully');
    await this.page.waitForSelector('.loader', { state: 'attached', timeout: 5000 }).catch(() => {
  console.log('Loader not detected, continuing...');
});

await this.page.waitForSelector('.loader', { state: 'detached', timeout: 30000 });

// 3️⃣ Wait for Done button to become visible and enabled
await this.DoneButton.waitFor({ state: 'visible', timeout: 15000 });
await expect(this.DoneButton).toBeEnabled();
    // await this.page.waitForSelector('.loader', { state: 'detached', timeout: 20000 });
    // await this.DoneButton.waitFor({ state: 'visible', timeout: 10000 });
    //await this.page.expect(this.page.locator('text=Your post has been shared')).toBeVisible();
    await this.DoneButton.click();
    // this.page.url().includes('https://www.instagram.com/sushsingh2026/');
    // title = await this.page.title();
    // console.log('Current page title:', title);
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