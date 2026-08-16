const { test, expect } = require('@playwright/test');
const { environments, currentEnv } = require('../../../utils/envConfig.js');
const { time } = require('node:console');

    test('should scroll to the element and interact with it', async ({ page }) => {
        
        // Srolling page using method

        await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });
        // await page.evaluate(() => {
        //      window.scrollBy(0, 1500);
        //      window.scrollBy(0, 0); // Scroll back to the top
        // });

        // Horizontal Scrolling
        // await page.evaluate(() => {
        //     window.scrollBy(1500, 0);
        //     window.scrollBy(0, 0); // Scroll back to the left
        // });
        
         // scrollTo(0, 1500);

        // await page.evaluate(() => {
        //     window.scrollTo(0, 1500);
        //     window.scrollTo(0, 0); // Scroll back to the top
        // });

         // scrollIntoViewIfNeeded();

         const element = await page.locator('text=Test.allTheThings() T-Shirt (Red)');
         await element.scrollIntoViewIfNeeded();
         await expect(element).toBeVisible(); // Verify the element is visible after scrolling
         await element.click(); // Interact with the element after scrolling
         
        await page.pause();
    });        

    


