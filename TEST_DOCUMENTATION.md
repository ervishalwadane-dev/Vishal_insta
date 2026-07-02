# Playwright Instagram Automation - Test Documentation

## 📋 Overview

This document provides comprehensive guidance for running and maintaining Playwright tests for Instagram automation in this project.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ervishalwadane-dev/Vishal_insta.git
cd Vishal_insta

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. (Optional) Install system dependencies
npx playwright install-deps
```

---

## 🧪 Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test File
```bash
npx playwright test tests/instagram_login.spec.js
```

### Run Tests in Headed Mode (Browser Visible)
```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run a Specific Test by Name
```bash
npx playwright test -g "should display login page"
```

### Run Tests with Verbose Output
```bash
npx playwright test --reporter=verbose
```

---

## 📊 Viewing Test Results

### HTML Report
```bash
# After tests complete, view the report
npx playwright show-report
```

### JSON Report
```bash
# Generate JSON report (if configured)
npx playwright test --reporter=json
```

### Screenshots & Videos
- Screenshots: `test-results/` directory
- Videos: Configured in `playwright.config.js`

---

## 📁 Test Structure

```
tests/
├── instagram_login.spec.js      # Instagram login test cases
└── ...                           # Additional test files
```

### Test File Naming Convention
- Suffix: `.spec.js` or `.test.js`
- Example: `instagram_login.spec.js`

### Test Organization
```javascript
test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    // Test code here
  });
});
```

---

## ⚙️ Configuration

### Playwright Configuration File
File: `playwright.config.js`

Key settings:
```javascript
{
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.instagram.com',
    trace: 'on-first-retry',
  },
}
```

---

## 🔍 Common Test Patterns

### Navigating to a Page
```javascript
await page.goto('https://www.instagram.com/');
```

### Finding Elements
```javascript
// By text
const button = page.locator('button:has-text("Log in")');

// By selector
const input = page.locator('input[name="username"]');

// By role
const heading = page.locator('role=heading');
```

### Interacting with Elements
```javascript
// Click
await element.click();

// Fill input
await input.fill('value');

// Check checkbox
await checkbox.check();
```

### Assertions
```javascript
// Visibility
await expect(element).toBeVisible();

// Value
await expect(input).toHaveValue('expected value');

// Text
await expect(heading).toContainText('Login');
```

### Waiting
```javascript
// Wait for element
await page.waitForSelector('button');

// Wait for navigation
await page.waitForURL('**/home');

// Wait for load state
await page.waitForLoadState('networkidle');

// Wait with timeout
await page.waitForTimeout(2000);
```

---

## 🐛 Debugging Failed Tests

### 1. Check Test Output
```bash
npm test 2>&1 | tee test-output.log
```

### 2. Run in Debug Mode
```bash
npx playwright test --debug
```

### 3. View Screenshots/Videos
Tests automatically capture:
- Screenshots of failures
- Videos of test execution (if enabled)
- Located in: `test-results/`

### 4. Use Inspector
```bash
npx playwright test --inspector
```

### 5. Check Network Traffic
Trace files are saved automatically for failed tests

---

## 🔄 GitHub Actions CI/CD

### Workflow File
Location: `.github/workflows/playwright-tests.yml`

### What Happens
- ✅ Runs on every push to `master`/`main`
- ✅ Runs on every pull request
- ✅ Automatically installs dependencies
- ✅ Runs all tests
- ✅ Uploads test reports
- ✅ Publishes results

### View CI Results
1. Go to **Actions** tab on GitHub
2. Click on the workflow run
3. Expand **"Run Playwright Tests"** step
4. View logs and download artifacts

---

## 📝 Best Practices

### ✅ DO
- Use descriptive test names
- Keep tests independent
- Use page.goto() for navigation
- Use explicit waits instead of arbitrary delays
- Organize tests by feature/page

### ❌ DON'T
- Use hardcoded waits (setTimeout)
- Test multiple features in one test
- Login in every test (use auth fixture if available)
- Use absolute coordinates for clicking
- Make tests dependent on each other

---

## 🛠️ Troubleshooting

### Issue: "Browser not found"
```bash
npx playwright install
```

### Issue: "Timeout waiting for element"
- Increase timeout in test: `await page.waitForSelector(selector, { timeout: 10000 })`
- Check if element selector is correct
- Verify page is fully loaded

### Issue: "Element not clickable"
```javascript
// Use force click
await element.click({ force: true });

// Scroll into view first
await element.scrollIntoViewIfNeeded();
await element.click();
```

### Issue: Tests work locally but fail in CI
- Check for environment-specific issues
- Ensure all selectors work in CI environment
- Add debugging with `page.screenshot()`
- Check network conditions

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)

---

## 👥 Contributing

When adding new tests:
1. Follow naming conventions
2. Add descriptive comments
3. Group related tests
4. Test both happy path and error cases
5. Update this documentation if needed

---

## 📞 Support

For issues or questions:
1. Check this documentation
2. Review test examples
3. Check GitHub Issues
4. Consult Playwright docs

---

**Last Updated:** 2026-05-25
