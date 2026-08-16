class InstagramProfilePage {
  constructor(page) {
    this.page = page;

    // Profile info
    this.profileName = page.locator('header h2');
    this.profileBio = page.locator('header [role="heading"] ~ span');
    this.profilePicture = page.locator('img[alt*="profile picture"]').first();
    this.editProfileButton = page.getByRole('button', { name: /Edit profile/i });
    this.followButton = page.getByRole('button', { name: /Follow/i });
    this.unfollowButton = page.getByRole('button', { name: /Following/i });

    // Stats
    this.postCount = page.locator('text=/\\d+\\s+(posts|Post)/i');
    this.followerCount = page.locator('text=/\\d+\\s+(followers|Followers)/i');
    this.followingCount = page.locator('text=/\\d+\\s+(following|Following)/i');

    // Post grid
    this.userPosts = page.locator('[role="grid"] [role="link"]');
    this.postsGrid = page.locator('[role="grid"]');

    // Tabs
    this.postsTab = page.getByRole('tab', { name: /Posts/i });
    this.reelsTab = page.getByRole('tab', { name: /Reels/i });
    this.savedTab = page.getByRole('tab', { name: /Saved/i });
    this.taggedTab = page.getByRole('tab', { name: /Tagged/i });
  }

  async gotoProfile(username) {
    await this.page.goto(`https://www.instagram.com/${username}/`);
    await this.page.waitForLoadState('networkidle');
  }

  async getProfileName() {
    return await this.profileName.textContent();
  }

  async getProfileBio() {
    return await this.profileBio.textContent();
  }

  async getFollowerCount() {
    const text = await this.followerCount.textContent();
    return parseInt(text.match(/\d+/)[0]);
  }

  async getFollowingCount() {
    const text = await this.followingCount.textContent();
    return parseInt(text.match(/\d+/)[0]);
  }

  async getPostCount() {
    const text = await this.postCount.textContent();
    return parseInt(text.match(/\d+/)[0]);
  }

  async clickEditProfile() {
    await this.editProfileButton.click();
  }

  async follow() {
    await this.followButton.click();
  }

  async unfollow() {
    await this.unfollowButton.click();
    // Confirm unfollow
    await this.page.getByRole('button', { name: /Unfollow/i }).click();
  }

  async switchToPostsTab() {
    await this.postsTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  async switchToReelsTab() {
    await this.reelsTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  async switchToSavedTab() {
    await this.savedTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  async switchToTaggedTab() {
    await this.taggedTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getUserPostsCount() {
    return await this.userPosts.count();
  }

  async clickOnPost(postIndex = 0) {
    await this.userPosts.nth(postIndex).click();
    await this.page.waitForLoadState('networkidle');
  }

  async isFollowButton() {
    return await this.followButton.isVisible().catch(() => false);
  }

  async isUnfollowButton() {
    return await this.unfollowButton.isVisible().catch(() => false);
  }

  async isEditProfileVisible() {
    return await this.editProfileButton.isVisible().catch(() => false);
  }
}

module.exports = { InstagramProfilePage };
