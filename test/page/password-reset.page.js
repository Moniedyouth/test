class PasswordResetPage {
   get emailInput() {
       return $('#email_field');
   }

   get submitButton() {
       return $('input[type="submit"]');
   }

   async setEmail(email) {
    await this.emailInput.setValue(email);
   }

   async clickSubmitButton() {
        await this.submitButton.click();
   }
  }
  
  module.exports = new PasswordResetPage();
  