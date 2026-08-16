// Instagram Constants - Centralized URLs and Selectors
const INSTAGRAM_URLS = {
  BASE: 'https://www.instagram.com/',
  LOGIN: 'https://www.instagram.com/accounts/login/',
  HOME: 'https://www.instagram.com/',
  EXPLORE: 'https://www.instagram.com/explore/',
  REELS: 'https://www.instagram.com/reels/',
  MESSAGES: 'https://www.instagram.com/direct/inbox/',
  NOTIFICATIONS: 'https://www.instagram.com/notifications/',
  PROFILE: 'https://www.instagram.com/accounts/edit/',
  CREATE: 'https://www.instagram.com/create/details/'
};

const INSTAGRAM_SELECTORS = {
  // Login Page
  LOGIN: {
    USERNAME_INPUT: 'getByRole("textbox", { name: /Mobile number, username or email/i })',
    PASSWORD_INPUT: 'getByLabel("Password")',
    LOGIN_BUTTON: 'getByText("Log in", { exact: true })',
    ERROR_MESSAGE: 'text=/Invalid username, email or phone number/i',
    FORGOT_PASSWORD: 'getByRole("button", { name: /Forgot password/i })'
  },

  // Popups & Modals
  POPUPS: {
    NOT_NOW: 'getByRole("button", { name: /Not Now/i })',
    SAVE_INFO: 'getByRole("button", { name: /Save Info/i })',
    TURN_ON_NOTIFICATIONS: 'getByRole("button", { name: /Turn On/i })',
    CLOSE_MODAL: 'getByLabel("Close")'
  },

  // Navigation
  NAV: {
    HOME: 'getByRole("link", { name: /Home/i })',
    SEARCH: 'getByLabel("Search")',
    EXPLORE: 'getByLabel("Explore")',
    REELS: 'getByLabel("Reels")',
    MESSAGES: 'getByLabel("Direct")',
    NOTIFICATIONS: 'getByLabel("Notifications")',
    CREATE: 'getByLabel("Create")',
    PROFILE: 'getByLabel("Profile")',
    MORE: 'getByLabel("More")'
  },

  // Feed & Posts
  FEED: {
    POSTS: 'locator("[role=\'article\']")',
    POST_LIKE: 'getByLabel(/Like/i)',
    POST_COMMENT: 'getByLabel(/Comment/i)',
    POST_SHARE: 'getByLabel(/Share/i)',
    POST_SAVE: 'getByLabel(/Save/i)',
    POST_OPTIONS: 'getByLabel(/More/i)',
    COMMENT_INPUT: 'locator("textarea[aria-label=\'Add a comment…\']")',
    FEED_CONTAINER: 'locator("[role=\'main\']")'
  },

  // Profile
  PROFILE: {
    PROFILE_NAME: 'locator("header h2")',
    PROFILE_BIO: 'locator("header [role=\'heading\'] ~ span")',
    PROFILE_PIC: 'locator("img[alt*=\'profile picture\']").first()',
    EDIT_PROFILE: 'getByRole("button", { name: /Edit profile/i })',
    FOLLOW: 'getByRole("button", { name: /Follow/i })',
    UNFOLLOW: 'getByRole("button", { name: /Following/i })',
    FOLLOWER_COUNT: 'locator("text=/\\d+\\s+(followers|Followers)/i")',
    FOLLOWING_COUNT: 'locator("text=/\\d+\\s+(following|Following)/i")',
    POST_COUNT: 'locator("text=/\\d+\\s+(posts|Post)/i")',
    POSTS_GRID: 'locator("[role=\'grid\']")',
    USER_POSTS: 'locator("[role=\'grid\'] [role=\'link\']")'
  },

  // Profile Tabs
  PROFILE_TABS: {
    POSTS: 'getByRole("tab", { name: /Posts/i })',
    REELS: 'getByRole("tab", { name: /Reels/i })',
    SAVED: 'getByRole("tab", { name: /Saved/i })',
    TAGGED: 'getByRole("tab", { name: /Tagged/i })'
  },

  // Search
  SEARCH: {
    SEARCH_INPUT: 'getByPlaceholder("Search")',
    SEARCH_RESULTS: 'locator("[role=\'button\'] span[dir=\'auto\']")',
    ACCOUNTS_TAB: 'getByRole("button", { name: /Accounts/i })',
    HASHTAGS_TAB: 'getByRole("button", { name: /Hashtags/i })',
    PLACES_TAB: 'getByRole("button", { name: /Places/i })',
    RESULT_ITEMS: 'locator("[role=\'button\']").filter({ hasText: /^@/ })'
  },

  // Create Post
  CREATE: {
    CREATE_BUTTON: 'getByLabel("Create")',
    POST_OPTION: 'getByText(/Post/i).first()',
    REEL_OPTION: 'getByText(/Reel/i).first()',
    STORY_OPTION: 'getByText(/Story/i).first()',
    UPLOAD_INPUT: 'locator("input[type=\'file\']")',
    DRAG_DROP: 'locator("text=/Select from computer/i")',
    CAPTION_INPUT: 'locator("textarea[aria-label=\'Write a caption…\']")',
    ALT_TEXT: 'locator("input[placeholder=\'Alt text\']")',
    LOCATION_INPUT: 'getByPlaceholder("Add location")',
    TAG_PEOPLE: 'getByRole("button", { name: /Tag people/i })',
    ADD_LOCATION: 'getByRole("button", { name: /Add location/i })',
    NEXT_BUTTON: 'getByRole("button", { name: /Next/i })',
    SHARE_BUTTON: 'getByRole("button", { name: /Share/i })',
    DISCARD_BUTTON: 'getByRole("button", { name: /Discard/i })'
  },

  // Messages / Direct
  MESSAGES: {
    MESSAGES_ICON: 'getByLabel("Direct")',
    MESSAGES_LIST: 'locator("[role=\'button\']").filter({ hasText: /^@/ })',
    SEARCH_DM: 'getByPlaceholder("Search Direct")',
    MESSAGE_INPUT: 'getByPlaceholder("Aa")',
    SEND_BUTTON: 'getByRole("button", { name: /Send/i })',
    MESSAGE_TEXT: 'locator("[dir=\'auto\'] span")',
    CONVERSATION_AREA: 'locator("[role=\'main\']")',
    CURRENT_CHAT: 'locator("header h2")',
    ATTACH_MEDIA: 'getByLabel("Like")',
    EMOJI_BUTTON: 'getByLabel("Emoji")'
  },

  // Settings
  SETTINGS: {
    SETTINGS_BUTTON: 'getByRole("button", { name: /Settings/i })',
    LOGOUT: 'getByRole("button", { name: /Log Out/i })',
    HELP: 'getByRole("button", { name: /Help/i })',
    REPORT_PROBLEM: 'getByRole("button", { name: /Report a problem/i })',
    ABOUT: 'getByRole("button", { name: /About/i })'
  }
};

// Timeouts (in milliseconds)
const TIMEOUTS = {
  SHORT: 3000,      // Quick element checks
  MEDIUM: 10000,    // Normal operations
  LONG: 15000,      // Page loads, network waits
  EXTRA_LONG: 30000 // Very slow operations
};

// Waits
const WAITS = {
  NETWORK_IDLE: 'networkidle',
  LOAD: 'load',
  DOM_CONTENT: 'domcontentloaded'
};

// Common Test Data
const TEST_DATA = {
  DELAYS: {
    SHORT: 500,
    MEDIUM: 1000,
    LONG: 2000
  },
  SCROLL: {
    COUNT: 3,
    DISTANCE: 'window.innerHeight'
  }
};

module.exports = {
  INSTAGRAM_URLS,
  INSTAGRAM_SELECTORS,
  TIMEOUTS,
  WAITS,
  TEST_DATA
};
