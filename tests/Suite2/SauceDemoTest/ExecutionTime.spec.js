const { test, expect } = require('@playwright/test');
const { environments, currentEnv } = require('../../../utils/envConfig.js');
const { ensureLoggedIn } = require('../../../hooks/global-setup.js');

test('Measure the execution time of selecting an option from the dropdown', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });
    const startTime = Date.now();

    const filterDropdown = page.locator('[data-test="product-sort-container"]');
    await filterDropdown.selectOption('az');
    //await expect(filterDropdown).toHaveValue('za');
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time for selecting an option from the dropdown: ${executionTime} ms`);
    await page.close();
});