const { test } = require('@playwright/test');
const { expect } = require('expect-webdriverio');


test("Searchable Dynamic Dropdown Handling", async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const dropdown = await page.getByLabel('', { exact: true });
    await dropdown.click();
    await dropdown.fill('India');
    await page.getByRole('option', { name: 'India' }).click();
    

    // await dropdown.scrollIntoViewIfNeeded(true);
    //     await dropdown.click();


    //await page.locator('#countries').selectOption({ label: 'India' });
    //await page.locator('#countries').selectOption({ label: 'India' });
    //await page.locator('#countries').press('Enter');
    //await dropdown.click();
    //await dropdown.fill('treeitem', { name: 'India' });
    //await page.getByRole('treeitem', { name: 'India' }).click();

   
    //await page.waitForTimeout(2000);     
    await page.pause();

});