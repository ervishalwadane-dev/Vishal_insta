 // Generate the test for Handling the Dynamic Elements

 const { test, expect } = require('@playwright/test');
 const { environments, currentEnv } = require('../../../utils/envConfig.js');
 const { time } = require('node:console');

 test('should handle dynamic elements on the page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });
    const dynamicElement = page.locator('.inventory_item').nth(0);
    await expect(dynamicElement).toBeVisible(); // Verify the dynamic element is visible
    await dynamicElement.click(); // Interact with the dynamic element
    await page.pause();
});

// Generate the another test for handling dynamic elements on the page

// test2('should handle dynamic elements on the page', async ({ page }) => {    
//     await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });
//     const dynamicElement = page.locator('.inventory_item').nth(0);
//     await expect(dynamicElement).toBeVisible(); 
//     await dynamicElement.click();
//     await page.pause(); 
//     const addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
//     await expect(addToCartButton).toBeVisible();    
//     await addToCartButton.click();
//     await page.pause();

// });

