class InstagramSearchPage {
  constructor(page) {
    this.page = page;

    // Search
    this.searchInput = page.getByPlaceholder('Search');
    this.searchIcon = page.getByLabel('Search');
    this.searchResults = page.locator('[role="button"] span[dir="auto"]');

    // Filter tabs
    this.accountsTab = page.getByRole('button', { name: /Accounts/i });
    this.hashtagsTab = page.getByRole('button', { name: /Hashtags/i });
    this.placesTab = page.getByRole('button', { name: /Places/i });

    // Result items
    this.resultItems = page.locator('[role="button"]').filter({ hasText: /^(?!.*button)/ });
  }

  async navigateToSearch() {
    await this.searchIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchForUser(username) {
    await this.searchInput.fill(username);
    await this.page.waitForTimeout(1000);
    return await this.searchResults.count();
  }

  async searchForHashtag(hashtag) {
    await this.searchInput.fill(`#${hashtag}`);
    await this.page.waitForTimeout(1000);
    return await this.searchResults.count();
  }

  async clickOnFirstResult() {
    const firstResult = this.page.locator('[role="button"]').first();
    await firstResult.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickAccountsTab() {
    await this.accountsTab.click();
  }

  async clickHashtagsTab() {
    await this.hashtagsTab.click();
  }

  async clickPlacesTab() {
    await this.placesTab.click();
  }

  async getResultsCount() {
    return await this.resultItems.count();
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  async getSearchResults() {
    return await this.searchResults.allTextContents();
  }
}

module.exports = { InstagramSearchPage };
