// Generate the test case to verify the URL of the page

const { test, expect } = require('@playwright/test');
const { environments, currentEnv } = require('../../../utils/envConfig.js');    

test('should verify the URL of the page', async ({ page }) => {
    //await ensureLoggedIn(page);  // ← Load saved session
    await page.goto('https://www.instagram.com/', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL('https://www.instagram.com/');
});
    //await page.pause();

test ('should verify the like on the first post', async({page}) =>{
   await page.goto('https://www.instagram.com/');
    const firstPost = page.locator('.v1Nh3.kIKUG._bz0w').first();
    //await firstPost.click();
    const likeButton = page.locator('svg').filter({ hasText: 'Like' }).first();
    //await likeButton.click();   
    //await expect(likeButton).toHaveAttribute('aria-label', 'Unlike');
    await page.pause();

});

    