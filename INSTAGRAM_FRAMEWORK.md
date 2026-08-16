# Instagram Test Framework

## Overview
This is a comprehensive Playwright-based test framework for Instagram automation testing using Page Object Model (POM) design pattern.

## Project Structure

```
TechMAuto/
├── pages/
│   ├── LoginPage.spec.js                 # Instagram login page object
│   ├── InstagramHomePage.spec.js         # Feed and home navigation
│   ├── InstagramProfilePage.spec.js      # User profile page object
│   ├── InstagramSearchPage.spec.js       # Search functionality
│   ├── InstagramCreatePostPage.spec.js   # Post creation
│   └── InstagramMessagesPage.spec.js     # Direct messages
├── tests/
│   └── Suite/
│       └── Smoke/
│           └── InstaLogin.spec.js        # Login test suite
├── utils/
│   ├── envConfig.js                      # Environment and credential configuration
│   └── testConfig.js                     # Test utilities and helpers
└── playwright.config.js
```

## Instagram URLs & Selectors

### Base URLs
- **Production**: `https://www.instagram.com/`

### Key Selectors

#### Login Page
- **Username Input**: `getByRole('textbox', { name: /Mobile number, username or email/i })`
- **Password Input**: `getByLabel('Password')`
- **Login Button**: `getByRole('button', { name: /Log In/i })`
- **Save Info Popup**: `getByRole('button', { name: /Save Info/i })`
- **Not Now Button**: `getByRole('button', { name: /Not Now/i })`
- **Home Link (Verification)**: `getByRole('link', { name: /Home/i })`

#### Home Page Navigation
- **Home Icon**: `getByRole('link').filter({ has: page.getByLabel('Home') })`
- **Search Icon**: `getByLabel('Search')`
- **Explore Icon**: `getByLabel('Explore')`
- **Reels Icon**: `getByLabel('Reels')`
- **Messages Icon**: `getByLabel('Direct')`
- **Notifications Icon**: `getByLabel('Notifications')`
- **Create Icon**: `getByLabel('Create')`
- **Profile Icon**: `getByLabel('Profile')`

#### Feed & Posts
- **Feed Posts**: `locator('[role="article"]')`
- **Like Button**: `getByLabel(/Like/i)`
- **Comment Button**: `getByLabel(/Comment/i)`
- **Share Button**: `getByLabel(/Share/i)`
- **Save Button**: `getByLabel(/Save/i)`

#### Profile Page
- **Profile Name**: `locator('header h2')`
- **Follow Button**: `getByRole('button', { name: /Follow/i })`
- **Follower Count**: `locator('text=/\\d+\\s+(followers|Followers)/i')`
- **Posts Grid**: `locator('[role="grid"]')`

#### Search
- **Search Input**: `getByPlaceholder('Search')`
- **Results**: `locator('[role="button"] span[dir="auto"]')`
- **Accounts Tab**: `getByRole('button', { name: /Accounts/i })`
- **Hashtags Tab**: `getByRole('button', { name: /Hashtags/i })`

#### Create Post
- **Create Button**: `getByLabel('Create')`
- **Caption Input**: `locator('textarea[aria-label="Write a caption…"]')`
- **Alt Text**: `locator('input[placeholder="Alt text"]')`
- **Share Button**: `getByRole('button', { name: /Share/i })`

#### Messages/Direct
- **Messages Icon**: `getByLabel('Direct')`
- **Message Input**: `getByPlaceholder('Aa')`
- **Search DMs**: `getByPlaceholder('Search Direct')`

## Page Objects

### 1. LoginPage (`pages/LoginPage.spec.js`)
Handles Instagram authentication.

**Methods:**
```javascript
await loginPage.goto(url)                  // Navigate to login page
await loginPage.login(username, password)  // Perform login
await loginPage.handleOptionalPopups()     // Handle post-login popups
await loginPage.handleSaveInfo()           // Handle save login info
await loginPage.handleNotifications()      // Handle notifications popup
await loginPage.assertLoggedIn()           // Assert successful login
await loginPage.isLoggedIn()               // Check if logged in
await loginPage.logout()                   // Logout
```

### 2. InstagramHomePage (`pages/InstagramHomePage.spec.js`)
Manages feed, navigation, and post interactions.

**Methods:**
```javascript
await homePage.navigateToHome()        // Go to home feed
await homePage.navigateToExplore()     // Go to explore
await homePage.navigateToReels()       // Go to reels
await homePage.navigateToMessages()    // Open DM
await homePage.navigateToNotifications() // Check notifications
await homePage.navigateToProfile()     // Go to profile
await homePage.likePost()              // Like a post
await homePage.commentOnPost(text)     // Comment on post
await homePage.followUser()            // Follow user
await homePage.unfollowUser()          // Unfollow user
await homePage.getFeedPostsCount()     // Get number of posts
await homePage.scrollFeed(count)       // Scroll feed
await homePage.waitForFeedToLoad()     // Wait for feed
```

### 3. InstagramProfilePage (`pages/InstagramProfilePage.spec.js`)
User profile operations.

**Methods:**
```javascript
await profilePage.gotoProfile(username)  // Navigate to profile
await profilePage.getProfileName()       // Get profile name
await profilePage.getFollowerCount()     // Get followers
await profilePage.getFollowingCount()    // Get following
await profilePage.follow()               // Follow user
await profilePage.unfollow()             // Unfollow user
await profilePage.switchToPostsTab()     // View posts
await profilePage.switchToReelsTab()     // View reels
await profilePage.switchToSavedTab()     // View saved
await profilePage.clickOnPost(index)     // Click post
```

### 4. InstagramSearchPage (`pages/InstagramSearchPage.spec.js`)
Search and discovery.

**Methods:**
```javascript
await searchPage.navigateToSearch()    // Open search
await searchPage.searchForUser(name)   // Search user
await searchPage.searchForHashtag(tag) // Search hashtag
await searchPage.clickOnFirstResult()  // Open first result
await searchPage.clickAccountsTab()    // Filter by accounts
await searchPage.clickHashtagsTab()    // Filter by hashtags
await searchPage.getResultsCount()     // Count results
```

### 5. InstagramCreatePostPage (`pages/InstagramCreatePostPage.spec.js`)
Post creation and publishing.

**Methods:**
```javascript
await createPage.openCreate()          // Open create menu
await createPage.selectPostOption()    // Select post type
await createPage.uploadImage(path)     // Upload image
await createPage.addCaption(text)      // Add caption
await createPage.addAltText(text)      // Add alt text
await createPage.addLocation(loc)      // Add location
await createPage.tagPeople(username)   // Tag people
await createPage.sharePost()           // Publish post
```

### 6. InstagramMessagesPage (`pages/InstagramMessagesPage.spec.js`)
Direct messaging.

**Methods:**
```javascript
await messagesPage.openConversation(user)   // Open chat
await messagesPage.sendMessage(text)        // Send message
await messagesPage.createNewMessage(u, msg) // Start new chat
await messagesPage.getConversationCount()   // Count chats
```

## Environment Configuration

**File:** `utils/envConfig.js`

```javascript
const environments = {
  QA: {
    baseURL: 'https://www.instagram.com/',
    username: process.env.INSTA_USERNAME || 'your_username',
    password: process.env.INSTA_PASSWORD || 'your_password'
  }
};
```

Set environment variables:
```bash
export INSTA_USERNAME=your_username
export INSTA_PASSWORD=your_password
```

## Test Utilities

**File:** `utils/testConfig.js`

Provides helper methods for common test operations:

```javascript
// Generate random strings
InstagramTestUtils.generateRandomUsername()
InstagramTestUtils.generateRandomEmail()

// Element interactions
await InstagramTestUtils.scrollToElement(page, selector)
await InstagramTestUtils.clickIfVisible(page, selector)
await InstagramTestUtils.isElementVisible(page, selector)
await InstagramTestUtils.typeText(page, selector, text)

// Screenshots and storage
await InstagramTestUtils.takeScreenshot(page, name)
await InstagramTestUtils.clearCookies(page)
await InstagramTestUtils.clearLocalStorage(page)

// Navigation
await InstagramTestUtils.getCurrentURL(page)
await InstagramTestUtils.waitForURL(page, pattern)
```

## Running Tests

### Run all Instagram tests
```bash
npx playwright test tests/Suite/Smoke/InstaLogin.spec.js
```

### Run specific test
```bash
npx playwright test tests/Suite/Smoke/InstaLogin.spec.js -g "should log in successfully"
```

### Run in headed mode
```bash
npx playwright test --headed
```

### Run with specific browser
```bash
npx playwright test --project=chromium
```

## Example Test

```javascript
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage.spec');
const { InstagramHomePage } = require('../../../pages/InstagramHomePage.spec');
const { environments } = require('../../../utils/envConfig');

test('Complete Instagram workflow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new InstagramHomePage(page);

  // Login
  await loginPage.goto(environments.QA.baseURL);
  await loginPage.login(environments.QA.username, environments.QA.password);
  await loginPage.handleOptionalPopups();

  // Verify feed
  await homePage.waitForFeedToLoad();
  const posts = await homePage.getFeedPostsCount();
  expect(posts).toBeGreaterThan(0);

  // Interact with post
  await homePage.likePost();
  await homePage.commentOnPost('Great post!');

  // Navigate sections
  await homePage.navigateToExplore();
  expect(page.url()).toContain('/explore/');
});
```

## Best Practices

1. **Always wait for network idle** after major actions
2. **Use descriptive selectors** with getByRole and getByLabel
3. **Handle popups explicitly** in login flow
4. **Use page objects** for all element interactions
5. **Keep credentials in environment variables**
6. **Take screenshots on failures** for debugging
7. **Wait for elements** before interacting

## Troubleshooting

### Login fails
- Check credentials in environment variables
- Verify Instagram is accessible from your location
- Check for 2FA requirements
- Handle additional popups in `handleOptionalPopups()`

### Elements not found
- Verify selectors with Playwright Inspector
- Check if element is within viewport
- Use explicit waits before interaction
- Check for dynamic content loading

### Timeout issues
- Increase timeout values for slow networks
- Use `waitForLoadState('networkidle')`
- Check for JavaScript-heavy interactions
- Add explicit waits between actions
