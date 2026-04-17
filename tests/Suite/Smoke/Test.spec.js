// tests/smoke/Test.spec.js
const { expect, test } = require('@playwright/test');
const { HomePage } = require('../../../pages/HomePage.spec');// fixed path
//const { envConfig } = require('../../../utils/envConfig');
const { LoginPage } = require('../../../pages/LoginPage.spec');
const {environments} = require('../../../utils/envConfig');
const { chromium } = require('playwright');

test.describe('Home Page Tests', () => {
    test('should display the home page correctly', async ({ page }) => {
        const homePage = new HomePage(page);
        // Navigate and login
          const loginPage = new LoginPage(page);
         const browser = await chromium.launch({headless:false}); 
          await page.goto(environments.QA.baseURL);
          await loginPage.login(environments.QA.username, environments.QA.password);
          //await loginPage.handlePopups();
        
          console.log('Global setup complete: logged in successfully');
        await homePage.openSearch();
        //await expect(page).toHaveTitle(/Instagram/);
    });


});

