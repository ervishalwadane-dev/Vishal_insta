class InstagramHomePage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.homeIcon = page.getByRole('link').filter({ has: page.getByLabel('Home') }).first();
    this.searchIcon = page.getByLabel('Search');
    this.exploreIcon = page.getByLabel('Explore');
    this.reelsIcon = page.getByLabel('Reels');
    this.messagesIcon = page.getByLabel('Direct');
    this.notificationsIcon = page.getByLabel('Notifications');
    this.createIcon = page.getByLabel('Create');
    this.profileIcon = page.getByLabel('Profile');

    // Feed
    this.feedPosts = page.locator('[role="article"]');
    this.postLikeButton = page.getByLabel(/Like/i).first();
    this.postCommentButton = page.getByLabel(/Comment/i).first();
    this.postShareButton = page.getByLabel(/Share/i).first();
    this.postSaveButton = page.getByLabel(/Save/i).first();

    // Comments and interactions
    this.commentInput = page.locator('textarea[aria-label="Add a comment…"]');
    this.followButton = page.getByRole('button', { name: /Follow/i });
    this.unfollowButton = page.getByRole('button', { name: /Following/i });
  }

  async goto(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToHome() {
    await this.homeIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToExplore() {
    await this.exploreIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToReels() {
    await this.reelsIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToMessages() {
    await this.messagesIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToNotifications() {
    await this.notificationsIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToProfile() {
    await this.profileIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openCreate() {
    await this.createIcon.click();
  }

  async likePost() {
    await this.postLikeButton.click();
  }

  async commentOnPost(commentText) {
    await this.commentInput.fill(commentText);
    await this.page.getByRole('button', { name: /Post/i }).click();
  }

  async followUser() {
    await this.followButton.click();
  }

  async unfollowUser() {
    await this.unfollowButton.click();
  }

  async getFeedPostsCount() {
    return await this.feedPosts.count();
  }

  async isPostLiked() {
    const likeButton = this.page.getByLabel(/Unlike/i).first();
    return await likeButton.isVisible().catch(() => false);
  }

  async scrollFeed(scrollCount = 3) {
    for (let i = 0; i < scrollCount; i++) {
      await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await this.page.waitForLoadState('networkidle');
    }
  }

  async waitForFeedToLoad() {
    await this.feedPosts.first().waitFor({ state: 'visible', timeout: 15000 });
  }
}

module.exports = { InstagramHomePage };
