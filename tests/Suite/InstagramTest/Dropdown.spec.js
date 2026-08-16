import {test, expect} from '@playwright/test';


// Dropdown test for instagram

test('Dropdown test for instagram', async ({page}) => {

await page.goto('https://www.instagram.com/');

//await page.pause();
await page.locator('//*[@aria-label="Settings"]').click();
//await page.locator("//title[@xpath='1']").click();
await page.pause();
});