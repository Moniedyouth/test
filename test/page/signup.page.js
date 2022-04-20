class SignUpPage {
    get emailInput() {
        return $('input#email');
    }

    get passwordInput() {
        return $('input#password');
    }

    get userName() {
        return $('input#login');
    }

    get productUpdates() {
        return $('input#opt_in');
    }

    // not working
    get verifyButton() {
        const button = $('#home_children_button');
        return button;
    }

    getContinueButton(value) {
        return $('[data-continue-to="' + value + '-container"]');
    }

    async clickContinueButton(selector) {
        const continueButton = this.getContinueButton(selector);         
        await continueButton.click();
        await browser.pause(3000);
    }

    async setEmail(value) {
        await this.emailInput.setValue(value);
        await browser.pause(2000);
        await this.clickContinueButton('password');
    }

    async setPassword(value) {
        await this.passwordInput.setValue(value);
        await browser.pause(2000);
        await this.clickContinueButton('username');
    }

    async setUserName(value) {
        await this.userName.setValue(value);
        await browser.pause(2000);
        this.clickContinueButton('opt-in');
    }

    async setProductUpdates(value) {
        await this.productUpdates.setValue(value);
        await browser.pause(2000);
        await this.clickContinueButton('captcha-and-submit');
    }

    // not working
    async clickVerifyButton() {
        await browser.pause(2000);
        await this.verifyButton.click();
    }
}

module.exports = new SignUpPage();
