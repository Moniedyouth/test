class EnterpriseAccountPage {
    get userNameInput() {
        return $('#user_login');
    }
    get userEmailInput() {
          return $('#user_email')
    }
    get userPasswordInput() {
        return $('#user_password');
    }
    get allEmailsCheckBox () {
        return $ ('#all_emails')
    }
    
    
    async setUserName (name) {
        await this.userNameInput.setValue(name);
    }
    async setUserEmail (email) {
        await this.userEmailInput.setValue(email);
    }
  
    async setUserPassword (password) {
        await this.userPasswordInput.setValue(password);
    }
    async submitAllEmailsCheckBox() {
        await this.allEmailsCheckBox.click();
        await browser.pause(5000);
      }
      async backPage() {
          await browser.back ();
      }
    }
    module.exports = new EnterpriseAccountPage();