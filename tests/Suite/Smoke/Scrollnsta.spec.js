const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage.spec');
const { PostPage } = require('../../../pages/PostPage.spec');
const { environments } = require('../../../utils/envConfig');
const { TestUtils } = require('../../../utils/testConfig');


test.describe('Scroll Into View Test', () => {
    test('should scroll to the element and interact with it', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto(environments.QA.baseURL);
        await loginPage.login(environments.QA.username, environments.QA.password);
        //const postPage = new PostPage(page);
        //await postPage.createPost();
        // Add assertions to verify the post was created successfully
        //await page.goto('https://www.instagram.com/', { waitUntil: 'networkidle' });
        //await page.waitForLoadState('networkidle'); // Wait for the page to load completely
        // 3. Scroll down multiple times
        window.scrollBy(0, window.innerHeight); // scroll one viewport height
        //await page.waitForTimeout(5000); // wait for new posts to load
        for (let i = 0; i < 5; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, window.innerHeight); // scroll one viewport height
            });
            await page.waitForTimeout(5000); // wait for new posts to load
        }

        // 4. Optional: Scroll to bottom directly
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        // 5. Close browser
        await browser.close();
    });
}); 



