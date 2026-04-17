const { expect } = require('@playwright/test');
const envConfig = require('../utils/envConfig');
const testConfig = require('../utils/testConfig');
const { chromium } = require('playwright');

class LoginPage 
{
  constructor(page) {
    this.page = page; // <-- Correct path: page is injected here
    this.usernameInput = page.getByRole('textbox', { name: 'Mobile number, username or' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In', exact: true });
    //this.gotoo=page.goto('https://www.instagram.com/accounts/onetap/',{ timeout: 30000 });
    this.goto1= page.getByText('Not now');
    this.goto2=page.getByText('Not now'); 
    //this.goto2=page.getByRole('button', { name: 'Not Now' });

  }

  async goto(baseURL) {
  const browser = await chromium.launch({headless:false}); 
  await this.page.goto(baseURL);
  }

  async login(username, password) 
  {
    
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.goto1.click();
    //await this.page.waitforTimeout(30000);
    await this.goto2.click();
    //await this.page.waitForLoadState('Load'); // Wait for the page to load completely after login
    //await this.page.waitForLoadState('DomContentLoaded'); // Wait for the DOM to be fully loaded
    //await this.page.waitForLoadState('networkidle'); // Wait for all network requests to finish
    //await this.page.waitForSelector('#home-banner'); // stability inside POM
  }
  //  async handlePopups() {
  //    if (await this.goto1.isVisible()) {
  //      await this.goto1.click();
  //    }
  //}

  // async assertLoginSuccess() {
  //   await expect(this.page).toHaveURL(/dashboard/);
  // }
}

module.exports = { LoginPage };