// Generate the tag test case
const { test, expect } = require('@playwright/test');
const { environments, currentEnv } = require('../../../utils/envConfig.js');
const { ensureLoggedIn } = require('../../../hooks/global-setup.js');   
const { time } = require('node:console');
// Generate the tag test case
    
// How to use tags in Playwright test cases

test('should verify the presence of the filter dropdown@sanity', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const filterDropdown = page.locator('.product_sort_container');
    await expect(filterDropdown).toBeVisible();
      
})

test('should verify the title of the page@sanity', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('.title')).toHaveText('Products');
    //await page.pause();    
})

test('should verify the URL of the page@Smoke', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await page.pause();
})

test('should verify the presence of the product items@smoke@sanity', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const productItems = page.locator('.inventory_item');
    await expect(productItems).toHaveCount(6);
    //await page.pause(); 
})

test('should verify the presence of the shopping cart icon@smoke@regression', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const cartIcon = page.locator('.shopping_cart_link');
    await expect(cartIcon).toBeVisible();
    //await page.pause(); 
})

test('should verify the presence of the filter dropdown@regression', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });  
    const filterDropdown = page.locator('.product_sort_container');
    await expect(filterDropdown).toBeVisible();
    //await page.pause(); 
})
// To run tests with specific tags, you can use the command line option --grep. For example, 
// to run all tests tagged with 'smoke', you can use the following command:
// npx playwright test --grep '@smoke'

// You can also combine multiple tags using logical operators. For example, to run tests that are tagged with both 'smoke' and 'cart', you can use:
// npx playwright test --grep '@smoke and @cart'
// To exclude tests with a specific tag, you can use the --grep option with a negative lookahead. 
// For example, to run all tests except those tagged with 'dropdown', you can use:
// npx playwright test --grep '@(?!dropdown)'

// You can also use tags to organize your tests into different categories, such as 
// 'smoke', 'regression', 'sanity', etc. This allows you to easily run specific subsets of 
// tests based on their tags.
// For example, you can tag your tests as follows:
// test('should verify the presence of the shopping cart icon@smoke', async ({ page }) => {

// this approach is not working for me, please tell me how to run the tests with specific tags in Playwright test cases. For current test file how can i run with command line option --grep to run all tests tagged with 'smoke' and 'cart' and also how to exclude tests with specific tag 'dropdown' using --grep option with negative lookahead.

// To run tests with specific tags in Playwright, you can use the --grep option in the command line. Here are the commands you can use: 
// To run all tests tagged with 'smoke' and 'cart':
// npx playwright test --grep '@smoke'


// what is the possible interview question for this test file and how to answer that question

// Possible interview question: "How do you organize and run tests with specific tags in Playwright?"   
// Answer: In Playwright, you can organize your tests using tags by including them in the test name.
//  For example, you can tag a test with '@smoke' or '@regression' to indicate its category. 
// To run tests with specific tags, you can use the --grep option in the command line. 
// For instance, to run all tests tagged with 'smoke', you would use the command 
// 'npx playwright test --grep '@smoke''. You can also combine multiple tags using 
// logical operators, such as 'npx playwright test --grep '@smoke and @cart'' 
// to run tests that are tagged with both 'smoke' and 'cart'. Additionally, to 
// exclude tests with a specific tag, you can use a negative lookahead in the --grep option,
//  like 'npx playwright test --grep '@(?!dropdown)'' to run all tests except those tagged with
//  'dropdown'. This allows for flexible test execution based on the tags assigned to each 
// test case.  

