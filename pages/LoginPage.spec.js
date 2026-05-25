class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Mobile number, username or email' });
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Log In', exact: true });
    this.notNowButton = page.getByRole('button', { name: 'Not Now' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
  }

  async goto() {
    await this.page.goto(environments.QA.baseURL);
    // await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
   
  }

  async handleOptionalPopups() {
    for (let i = 0; i < 2; i += 1) {
      const isVisible = await this.notNowButton.isVisible({ timeout: 3000 }).catch(() => false);
      if (!isVisible) break;
      await this.notNowButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  }

  async assertLoggedIn() {
    await this.page.waitForLoadState('networkidle');
    await this.homeLink.waitFor({ state: 'visible', timeout: 15000 });
  }
}

module.exports = { LoginPage };