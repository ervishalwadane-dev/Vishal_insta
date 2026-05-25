import { test, chromium } from '@playwright/test';
const loginData1 = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'locked_out_user', password: 'secret_sauce' },
    { username: 'problem_user', password: 'secret_sauce' },
    { username: 'performance_glitch_user', password: 'secret_sauce' }
]
for (const data of loginData1) {
    test(`login test for ${data.username}`, async () => {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.saucedemo.com/v1/');
        await page.fill('#user-name', data.username);
        await page.fill('#password', data.password); 
    
        await page.click('#login-button');
    })
} 

//• 	The above code will run 4 times as there are 4 test data. 