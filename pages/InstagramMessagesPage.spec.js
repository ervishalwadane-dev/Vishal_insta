class InstagramMessagesPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.messagesIcon = page.getByLabel('Direct');
    this.messagesList = page.locator('[role="button"]').filter({ hasText: /^@/ });

    // Search
    this.searchInput = page.getByPlaceholder('Search Direct');

    // Chat
    this.messageInput = page.getByPlaceholder('Aa');
    this.sendButton = page.locator('[aria-label="Like"]').or(page.getByRole('button', { name: /Send/i }));
    this.messageText = page.locator('[dir="auto"] span');

    // Conversation
    this.conversationArea = page.locator('[role="main"]');
    this.currentChatHeader = page.locator('header h2');

    // Media
    this.attachMediaButton = page.getByLabel('Like');
    this.emojiButton = page.getByLabel('Emoji');
    this.likeReaction = page.locator('🔥');
  }

  async navigateToMessages() {
    await this.messagesIcon.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openConversation(username) {
    const userConversation = this.page.locator(`[role="button"]`).filter({ hasText: username }).first();
    await userConversation.click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchUser(username) {
    await this.searchInput.fill(username);
    await this.page.waitForTimeout(1000);
  }

  async sendMessage(message) {
    await this.messageInput.fill(message);
    await this.sendButton.click();
    await this.page.waitForTimeout(1000);
  }

  async sendMessageWithEmoji(message, emoji) {
    await this.messageInput.fill(`${message} ${emoji}`);
    await this.sendButton.click();
  }

  async isMessageSent(messageText) {
    const message = this.page.locator(`text="${messageText}"`);
    return await message.isVisible({ timeout: 5000 }).catch(() => false);
  }

  async getCurrentChatName() {
    return await this.currentChatHeader.textContent();
  }

  async createNewMessage(username, message) {
    const newMessageButton = this.page.getByRole('button', { name: /New message/i });
    await newMessageButton.click();
    await this.searchInput.fill(username);
    const userOption = this.page.getByRole('button', { name: username }).first();
    await userOption.click();
    await this.sendMessage(message);
  }

  async getConversationCount() {
    return await this.messagesList.count();
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  async attachMedia(filePath) {
    await this.attachMediaButton.click();
    const fileInput = this.page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);
  }
}

module.exports = { InstagramMessagesPage };
