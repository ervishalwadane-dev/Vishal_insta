// @ts-check
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

// Get absolute path to storageState
const __dirname = path.resolve();
const storageStatePath = path.join(__dirname, 'storageState.json');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
  //import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  //globalSetup: './hooks/global-setup.js', // ✅ Updated path to global setup file
  //testDir: './',
  testDir: 'tests/Suite/InstagramTest',
  //testDir: 'tests/Suite2/SauceDemoTest',
  /* Run tests in files in parallel */
  /*maximum time one test can run for. */
//timeout: 10 * 1000,
//expect: {
  //timeout: 3000
//},{
  

   /* Run all tests in parallel. */
/*Run test in files in parallel*/
  fullyParallel: false, // allows parallel execution of tests in different files, but tests within the same file will run sequentially. 
  // This is useful for isolating tests and preventing interference between them. If you set it to false, all tests will run sequentially, 
  // which can be beneficial for debugging or when tests have dependencies on each other.     
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
   //retries: process.env.CI ? 2 : 0,
   retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 0 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
   // baseURL: 'https://www.instagram.com/',
    headless: false,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    trace: 'retain-on-failure',
    //storageState: 'storageState.json'
  },




  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Instagram Tests',
      testMatch: ['**/TestReelsFunctionality.spec.js','**/URLCheck.spec.js','**/Dropdown.spec.js','**/Insta*.spec.js', '**/Follow.spec.js', '**/Like*.spec.js', '**/CreateNew*.spec.js', '**/Reels.spec.js', '**/Comment*.spec.js', '**/Notification*.spec.js'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'instagramStorageState.json'
      },
    },
    // {
    //   name: 'SauceDemo Tests',
    //   testMatch: ['**/NewTag.spec.js', '**/Login.spec.js','**/ExecutionTime.spec.js','**/DataDrivenTest.spec.js', '**/AddToCart.spec.js', '**/AlertHandle.spec.js', '**/Dropdown.spec.js', '**/Dynamic.spec.js', '**/Frames.spec.js', '**/Scroll.spec.js', '**/URLCheck.spec.js', '**/Suite.spec.js' ],
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'storageState.json'
    //   },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
   //url: 'https://www.instagram.com/',
  //   reuseExistingServer: !process.env.CI,
  // },
});

