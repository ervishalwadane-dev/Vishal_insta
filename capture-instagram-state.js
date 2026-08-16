const { chromium } = require('playwright');

async function captureInstagramState() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.instagram.com');

  console.log('⏸️ MANUALLY LOGIN TO INSTAGRAM NOW');
  console.log('📝 Type your email/username and password by hand');
  console.log('🖱️ Click the Login button yourself');
  console.log('⏳ Press ENTER in this terminal after you complete login...\n');

  await page.pause();  // Pauses - you manually login here

  // After you click login, save the state
  await context.storageState({ path: 'instagramStorageState.json' });

  console.log('\n✅ Instagram login state saved!');
  console.log('📁 File: instagramStorageState.json created\n');
  await browser.close();
}

captureInstagramState();
