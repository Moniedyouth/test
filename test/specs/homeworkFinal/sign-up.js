const mainPage = require("../../page/main.page");
const signUpPage = require('../../page/signup.page');

describe('Sign Up', () => {
    it('by button', async () => {
        browser.url('https://github.com/');
        const email = generateRandomEmail();
        const passowrd = generateRandomString(12);
        const userName = generateRandomString(8);
        await mainPage.clickSignUpLink();
        await signUpPage.setEmail(email);
        await signUpPage.setPassword(passowrd +'A1a');
        await signUpPage.setUserName(userName);
        await signUpPage.setProductUpdates('n');
        
        await browser.pause(5000);
    });

    it('by form', async () => {
        browser.url('https://github.com/');
        const email = generateRandomEmail();
        const passowrd = generateRandomString(12);
        const userName = generateRandomString(8);
        await mainPage.signUpByForm(email);
        await browser.pause(4000);
        await signUpPage.clickContinueButton('password');
        await signUpPage.setPassword(passowrd +'A1a');
        await signUpPage.setUserName(userName);
        await signUpPage.setProductUpdates('n');
    });
});

// source: https://stackoverflow.com/a/20013464
function generateRandomEmail() {
    var strValues = "abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
}

// source: https://stackoverflow.com/a/1349426
function generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}