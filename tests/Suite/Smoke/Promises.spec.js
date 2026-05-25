const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage.spec');
const {environments} = require('../../../utils/envConfig'); 
const {TestUtils} = require('../../../utils/testConfig'); 


function getTestData() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve({ username: environments.QA.username, password: environments.QA.password  });
    } else {
      reject('Failed to load test data');
    }
  });
}

test(  'should load test data and perform login', async ({ page }) => {
  try {
    const testData = await getTestData();   
    console.log('Test data loaded:', testData);
    // Perform login using testData.username and testData.password
    const loginPage = new LoginPage(page);
    await page.goto(environments.QA.baseURL);
    await loginPage.login(testData.username, testData.password);    

    // Add assertions to verify successful login
  } catch (error) {
    console.error('Error loading test data:', error);
    throw error; // Fail the test if data loading fails
  }     
});

