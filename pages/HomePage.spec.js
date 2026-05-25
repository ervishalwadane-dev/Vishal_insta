const { test } = require('@playwright/test');

class HomePage {
  
  constructor(page) {
    //super(page); // Call the parent class constructor
    this.page = page;

    // Left sidebar navigation locators
    this.homeButton = page.getByRole('link', { name: 'Home Home' });
    this.reelsButton = page.locator(':text("Reels")');
    this.messagesButton = page.locator('div.x1cy8zhl.x9f619.x78zum5.xdt5ytf.x1gvbg2u.x1qughib').getByRole('link', { name: 'Messages' });
    this.searchButton = page.locator('div.x1cy8zhl.x9f619.x78zum5.xdt5ytf.x1gvbg2u.x1qughib').getByRole('link', { name: 'Search' });
    this.notificationsButton = page.getByRole('link', { name: 'Notifications Notifications' });
    //this.profileButton = page.locator('a[aria-label="Profile"]');
    this.createButton = page.getByRole('link', { name: 'New post Create' });
  }
  // async goto() {
  //   await this.page.goto(config.baseURL);
  //   //await this.page.waitForLoadState('networkidle'); // Wait for the page to load completely
  // }
  async openHome() {
    await this.homeButton.click();
  }
  async openReels() {
    //await this.reelsButton.waitFor({ state: 'visible' });
    //await this.reelsButton.click();
    //await this.reelsButton.click({ timeout: 5000 });
    await this.reelsButton().click();
  }
  async openMessages() {
    await this.messagesButton.click();
  }
  async openSearch() {
    await this.searchButton.click();
   //await this.page.pause(); // Pause to inspect the search page after clicking the search button
  }
  async openNotifications() {
    await this.notificationsButton.click();
  }
  //   async openProfile() {
  //     await this.profileButton.click();
  //   }
  async openCreate() {
    await this.createButton.click();
  }
}

module.exports = { HomePage };