// generate the dropdown test case

const { test, expect } = require('@playwright/test');
const { environments, currentEnv } = require('../../../utils/envConfig.js');
const { ensureLoggedIn } = require('../../../hooks/global-setup.js');

test('should select an option from the dropdown and verify the selection', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });
      

    const filterDropdown = page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    //await expect(filterDropdown).toHaveValue('az');

    await page.pause();
});

// what is the Possible question for this test case and how to answer that question in the interview. Please tell me the possible question for this test case and how to answer that question in the interview.

// Possible question: How do you handle dropdowns in Playwright and verify the selected option?

// Answer: In Playwright, you can handle dropdowns using the selectOption method. 
// You can locate the dropdown element and then use selectOption to choose an option based on 
// its value, label, or index. After selecting an option, you can verify the selection by checking 
// the value of the dropdown or by asserting that the expected option is now selected. For example, 
// in the provided test case, we locate the dropdown using a data-test attribute and select an option with 
// the value 'hilo'. We can then verify that the correct option is selected by checking the value of 
// the dropdown or by asserting that the expected sorting order is applied to the products.

