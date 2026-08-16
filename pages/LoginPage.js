import { test } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;

    // Instagram Login Selectors
    this.usernameInput = page.getByRole('textbox', { name: /Mobile number, username or email/i });
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByText("Log in", { exact: true });

    // Popup buttons
    this.notNowButton = page.getByRole('button', { name: /Not Now/i });
    this.saveInfoButton = page.getByRole('button', { name: /Save Info/i });
    this.turnOnNotificationsButton = page.getByRole('button', { name: /Turn On/i });

    // Navigation verification
    this.homeLink = page.getByRole('link', { name: /Home/i });
    this.feedContainer = page.locator('[role="main"]');

    // Error messages
    this.errorMessage = page.locator('text=/Invalid username, email or phone number/i');
  }

  async goto(BaseURL) {
    await this.page.goto(BaseURL, { waitUntil: 'networkidle' });
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async handleSaveInfo() {
    const isVisible = await this.saveInfoButton.isVisible({ timeout: 3000 }).catch(() => false);
    if (isVisible) {
      await this.saveInfoButton.click();
      await this.page.waitForTimeout(1000);
    }
  }

  async handleNotifications() {
    const isVisible = await this.turnOnNotificationsButton.isVisible({ timeout: 3000 }).catch(() => false);
    if (isVisible) {
      await this.notNowButton.click();
      await this.page.waitForTimeout(1000);
    }
  }

  async handleOptionalPopups() {
    for (let i = 0; i < 3; i += 1) {
      const saveInfoVisible = await this.saveInfoButton.isVisible({ timeout: 2000 }).catch(() => false);
      const notNowVisible = await this.notNowButton.isVisible({ timeout: 2000 }).catch(() => false);

      if (!saveInfoVisible && !notNowVisible) break;

      if (saveInfoVisible) {
        await this.handleSaveInfo();
      }
      if (notNowVisible) {
        await this.notNowButton.click();
      }

      await this.page.waitForTimeout(500);
    }
  }

  async assertLoggedIn() {
    await this.page.waitForLoadState('networkidle');
    await this.homeLink.waitFor({ state: 'visible', timeout: 15000 });
  }

  async assertLoginFailed() {
    return await this.errorMessage.isVisible({ timeout: 5000 }).catch(() => false);
  }

  async isLoggedIn() {
    return await this.homeLink.isVisible({ timeout: 5000 }).catch(() => false);
  }

  async logout() {
    const profileButton = this.page.getByLabel('Profile');
    await profileButton.click();
    const settingsButton = this.page.getByRole('button', { name: /Settings/i });
    await settingsButton.click();
    const logoutButton = this.page.getByRole('button', { name: /Log Out/i });
    await logoutButton.click();
  }
}

module.exports = { LoginPage };