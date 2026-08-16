class InstagramCreatePostPage {
  constructor(page) {
    this.page = page;

    // Create button
    this.createButton = page.getByLabel('Create');

    // Upload options
    this.postOption = page.getByText(/Post/i).first();
    this.reelOption = page.getByText(/Reel/i).first();
    this.storyOption = page.getByText(/Story/i).first();

    // Upload area
    this.uploadInput = page.locator('input[type="file"]');
    this.dragDropArea = page.locator('text=/Select from computer/i');

    // Editor
    this.captionInput = page.locator('textarea[aria-label="Write a caption…"]');
    this.altText = page.locator('input[placeholder="Alt text"]');
    this.locationInput = page.getByPlaceholder('Add location');
    this.filterOptions = page.locator('[role="button"]').filter({ hasText: /Filter/i });

    // Buttons
    this.nextButton = page.getByRole('button', { name: /Next/i });
    this.shareButton = page.getByRole('button', { name: /Share/i });
    this.discardButton = page.getByRole('button', { name: /Discard/i });

    // Tags
    this.tagPeopleButton = page.getByRole('button', { name: /Tag people/i });
    this.addLocationButton = page.getByRole('button', { name: /Add location/i });
  }

  async openCreate() {
    await this.createButton.click();
  }

  async selectPostOption() {
    await this.postOption.click();
  }

  async selectReelOption() {
    await this.reelOption.click();
  }

  async selectStoryOption() {
    await this.storyOption.click();
  }

  async uploadImage(filePath) {
    await this.uploadInput.setInputFiles(filePath);
    await this.page.waitForTimeout(2000);
  }

  async addCaption(caption) {
    await this.captionInput.fill(caption);
  }

  async addAltText(altText) {
    await this.altText.fill(altText);
  }

  async addLocation(location) {
    await this.locationInput.fill(location);
    await this.page.getByRole('button', { name: location }).first().click();
  }

  async tagPeople(username) {
    await this.tagPeopleButton.click();
    const userButton = this.page.getByRole('button', { name: username });
    await userButton.click();
  }

  async clickNext() {
    await this.nextButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async sharePost() {
    await this.shareButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async discardPost() {
    await this.discardButton.click();
    const confirmDiscard = this.page.getByRole('button', { name: /Discard/i }).last();
    await confirmDiscard.click();
  }

  async isShareButtonEnabled() {
    return await this.shareButton.isEnabled();
  }
}

module.exports = { InstagramCreatePostPage };
