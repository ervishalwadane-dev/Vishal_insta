
import { test } from '@playwright/test';


test.describe('Parallel Test Suite', () => {
  test('Test 1', async ({ page }) => {
    console.log('Running Test 1');
    await page.goto('https://example.com');
    // Add assertions or interactions here
  });   

    test('Test 2', async ({ page }) => {    
    console.log('Running Test 2');
    await page.goto('https://example.com');
    // Add assertions or interactions here
  }     

    );  
    test('Test 3', async ({ page }) => {    
    console.log('Running Test 3');
    await page.goto('https://example.com');
    // Add assertions or interactions here
  }
    );  
}); 




