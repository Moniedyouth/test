class SignInPage {
  get loginInput() {
      return $('#login_field');
  }
  get passwordInput() {
      return $('#password');
  }

  get submitButton() {
      return $('.js-sign-in-button');
  }

  get forgotPassword() {
      return $('a[href="/password_reset"]');
  }

  async setEmail(email) {
      await this.loginInput.setValue(email);
  }

  async setPassword(password) {
      await this.passwordInput.setValue(password);
  }

  async submitSignInForm() {
    await this.submitButton.click();
  }

  async clickForgotPassword() {
      await this.forgotPassword.click();
  }
}

module.exports = new SignInPage();
