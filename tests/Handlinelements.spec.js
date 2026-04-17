const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
test("Handling Multiple elements",async()=>{ 
const browser = await chromium.launch({headless:false});     
const page = await browser.newPage();     
await page.goto('https://www.w3schools.com/');     
const h1tagelements = page.locator('h1');     
const size = await h1tagelements.count();     
for(let i=0;i<size;i++){ 
const element = await h1tagelements.nth(i).innerText();         console.log(element); 
} 
})   
// •	.count() - Counts the no. of elements having the same <elementname> 
// •	.nth(i) - Selects the i-th element from that list (zero-based index). 


//Handling multiple similar elements