import { test, expect } from '@playwright/test';



//   test.beforeEach(async ({ page }) => {


//   await page.getByRole('button', { name: 'Not Now' }).click();
// });
  //   // Each test gets fresh context with saved login
  //   const context = await browser.newContext({
  //     storageState: 'instagramStorageState.json'
   

test('Test 1- Messages Section', async ({page}) => { 
  
await page.goto('https://www.instagram.com/');
await page.locator('svg').filter({ hasText: 'Messages' }).first().click();

await page.pause();


//await page.pause();
});

test.only('Test 2- Like and Unlike first Post', async ({page}) => {

await page.goto('https://www.instagram.com/');

const firstPost = page.locator('.v1Nh3.kIKUG._bz0w').first();
    //await firstPost.click();
    const likeButton = page.locator('svg').filter({ hasText: 'Like' }).first();
    await likeButton.click();   
    await expect(likeButton).toHaveAttribute('aria-label', 'Unlike');
    //await page.pause();

  
});

test('Test 3- File Upload', async({page}) =>{

  await page.goto('https://www.instagram.com/');

  //await page.pause();

  //await page.waitForLoadState('domcontentloaded');
    
  const CreateaNewPost = await page.getByRole('link', { name: 'New post Create' });
  createNewPost = await CreateaNewPost.waitFor({ state: 'visible' });
  await CreateaNewPost.click();

  await page.pause();


  await page.getByRole('link', { name: 'Post Post' }).click();
  await page.getByRole('button', { name: 'Select from computer' }).click();
 
  await page.getByRole('button', { name: 'Select from computer' }).setInputFiles('Sample Post.jpg');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Share' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
});
