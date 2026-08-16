// write the test for suite.spec.js
const { test, expect } = require('@playwright/test');
test.describe('Smoke Test Suite', () => {
test.only('User 1- should verify the title of the page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('.title')).toHaveText('Products');
    await page.pause();    
})
test.skip('User 2- should verify the URL of the page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await page.pause();
})
test.skip('User 3- should verify the presence of the product items', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const productItems = page.locator('.inventory_item');
    await expect(productItems).toHaveCount(6);
    //await page.pause(); 
})
test.skip('User 4- should verify the presence of the shopping cart icon', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const cartIcon = page.locator('.shopping_cart_link');
    await expect(cartIcon).toBeVisible();
    //await page.pause(); 
})
test('User 5- should verify the presence of the filter dropdown', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const filterDropdown = page.locator('.product_sort_container');
    await expect(filterDropdown).toBeVisible();
    await page.pause(); 
});
});

// what is mean by suite in Playwright and how to create a suite in Playwright test cases. 
// Please tell me the possible question for this test case and how to answer that question in the interview.

/*In Playwright, a suite is a collection of related test cases that are grouped together. 
It allows you to organize your tests in a logical manner and run them as a cohesive unit. 
You can create a suite using the test.describe() function, which takes a string as 
the suite name and a callback function that contains the test cases. Inside the callback function, 
you can define multiple test cases using the test() function. Each test case can have 
its own setup and assertions, but they will all be executed together when you run the suite.
*/
