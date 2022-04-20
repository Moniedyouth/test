class EnterpriseServerPage {
    get userNameInput() {
        return $('#contact_request_name');
    }

    get companyNameInput() {
        return $('#contact_request_organization_name');
    }

    get companyEmailInput() {
        return $('#contact_request_email');
    }
    
    get phoneNumberInput() {
        return $('#contact_request_phone');
    }

    get instalationRadiobutton () {
        return $ ('#contact_request_instance_type_not_sure')
    }
   
    get otherQuestionsRadiobutton () {
        return $ ('#questions_yes')
    }

    get questionsList () {
        return $ ('#questions-list')
    } 
    
    get agreedCheckBox () {
        return $ ('#contact_request_agreed_to_terms')
    } 
    
    async setUserName (name) {
        await this.userNameInput.setValue(name);
    }

    async setCompanyName (company) {
        await this.companyNameInput.setValue(company);
    }

    async setCompanyEmail (email) {
        await this.companyEmailInput.setValue(email);
    }

    async setPhoneNumberEmail (phoneNumber) {
        await this.phoneNumberInput.setValue(phoneNumber);
    }

    async clickInstalationRadioButton() {
        await this.instalationRadiobutton.click();
      }

    async clickOtherQuestadioButton() {
        await this.otherQuestionsRadiobutton.click();
      }

      async clickQuestionsList() {
        await this.questionsList.click();
      }

      async setText (text) {
        await this.questionsList.setValue(text);
       }
       
       async clickAgreedCheckBox() {
        await this.agreedCheckBox.click();
      }
       
}
module.exports = new EnterpriseServerPage();