const { test, expect } = require('@playwright/test');
const { environments, currentEnv } = require('../../../utils/envConfig.js');  
const { ReelsPage } = require('../../../pages/ReelsPage.js');


test('Verify the Reels page Overview', async ({ page }) => {
    const reelsPage1 = new ReelsPage(page);

    //await ensureLoggedIn(page);  // ← Load saved session
    await page.goto('https://www.instagram.com/', { waitUntil: 'networkidle' });
    await reelsPage1.ReelsTabButton();
    await reelsPage1.Likes();
    
    await page.pause();
});