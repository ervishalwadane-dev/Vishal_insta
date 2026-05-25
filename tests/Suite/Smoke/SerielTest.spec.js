import { test, chromium, expect } from '@playwright/test'; 
  test.describe.serial('test suite', () =>{     
    test.beforeAll(async () => { 
        console.log('database connectivity code'); 
    }); 
    test.afterAll(async () => { 
        console.log('close connection code'); 
    });      
    test.beforeEach(async () => {         console.log('navigate to homegame'); 
    });      
    test.afterEach(async () => {         console.log('close page'); 
    });      
 test('test1', async () => {         console.log('Test 1'); 
    });      
    test('test2', async () => {         console.log('Test 2'); 
    }); 
}) 
  
test('test3', async () => {     console.log('Test 3')   ; 
}); 

// Workers concept 
  
// Concept - Worker means a single browser, so if a number is mentioned to it means that on that many browsers the test case will run 
  
// Use - For parallel execution 
  
// Syntax - npx playwright test <filename> --workers=<number> 
// Example - npx playwright test tests/SerielTest.spec.js --workers=2 

// Note - If the test suite is marked as serial then it will run on a single browser only, even if we mention more than 1 worker.