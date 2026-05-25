// // hooks/globalHooks.js
// const { test: base } = require('@playwright/test');
// const { LoginPage } = require('../pages/LoginPage.spec');
// const {environments} = require('../utils/envConfig');

// // Extend Playwright's test with global setup
// const test = base.extend({});

// test.beforeAll(async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Clear cookies/storage
//   await context.clearCookies();
//   await page.evaluate(() => localStorage.clear());

  
// });

// test.afterAll(async ({ browser }) => {
//   await browser.page().pause();
//   console.log('Global cleanup complete: browser closed');
// });

// module.exports = { test };