// global setup for login and saving storage state for reuse in tests

//import dotenv from 'dotenv';
import { chromium } from '@playwright/test';
//import Solver from '2captcha-nodejs';

//dotenv.config();

const environments = {
  QA: {
    baseURL: 'https://www.saucedemo.com/',
    username: 'standard_user',
    password: 'secret_sauce'
  },
  UAT: {
    baseURL: 'https://www.saucedemo.com/',
    username: 'problem_user',
    password: 'secret_sauce'
  }
};

const currentEnv = ['QA'].includes(process.env.ENV?.toUpperCase())
  ? process.env.ENV.toUpperCase()
  : 'QA';

async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const { baseURL, username, password } = environments[currentEnv];

  
   await page.goto(baseURL);
   await page.getByPlaceholder('Username').fill(username);
   await page.getByRole('textbox', { name: 'Password' }).fill(password);
   await page.locator('[data-test="login-button"]').click(); 
   await page.waitForLoadState('networkidle');
   await context.storageState({ path: 'storageState.json' });
   console.log(`✅ Login successful for ${currentEnv}, storage state saved`);
   await browser.close();
}

export default globalSetup;
