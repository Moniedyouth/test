class MainPage {
    get docsButton () {
            return $("//a[contains(text(),'Docs')]");
    }

    get signUpLink() {
        return $('a.HeaderMenu-link[href*="signup"]');
    }

    get signUpFormInput () {
        return $('#user_email');
    }
    
    get signUpFormButton () {
        return $('.js-signup-form button');
    }

    get signInLink() {
        return $('a[href="/login"]');
    }

    get enterpriseButton() {
        return $('[data-test-selector="start-trial-button"]');
        }

    get careersButton() {
        return $('[href="/about/careers"]');
        } 

    async clickSignUpLink(){
        await this.signUpLink.click();
        await browser.pause(3000);
    }

    async signUpByForm(email) {
        await this.signUpFormInput.click();
        await this.signUpFormInput.setValue(email);
        await this.signUpFormButton.click();
    }

    async clickSignInLink() {
        await this.signInLink.click();
    }

    getHeaderItem(itemName) {
        return $("//summary[contains(text(),'" + itemName + "')]");
    }

    getHeaderItemDropdown(itemName) {
        return $("//summary[contains(text(),'" + itemName + "')]/../div/ul");
    }

    async openPlans() {
        const plans = await $("//a[contains(text(),'Plans')]");
        await plans.click();
    }

    async clickEnterpriseButton () {
        await this.enterpriseButton.click ();
    }

    async clickCareersButton () {
         await this.careersButton.click();
    }
}

module.exports = new MainPage();