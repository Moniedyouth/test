const mainPage = require("../../page/main.page");
const signInPage = require('../../page/signin.page');
const userPage = require('../../page/user.page');
const passwordResetPage = require('../../page/password-reset.page');

describe('Sign In', () => {
    it('open user page', async () => {
        const login = 'max1794office@gmail.com';
        const password = 'Table1Maxim1';
        browser.url('https://github.com/');
        await mainPage.clickSignInLink();
        await browser.pause(2000);
        await signInPage.setEmail(login);
        await signInPage.setPassword(password);
        await signInPage.submitSignInForm();

        console.log('user avatar', await (await userPage.userAvatar).getAttribute('alt'));
        ;
    });

    it('forgot password do nothing if input value is empty', async () => {
        await browser.reloadSession();
        await browser.url('https://github.com/login');
        await signInPage.clickForgotPassword();
        await passwordResetPage.setEmail('');
        await passwordResetPage.clickSubmitButton();
    });

    it('forgot password shows error if input email is invalid', async () => {
        browser.url('https://github.com/login');
        await signInPage.clickForgotPassword();
        await passwordResetPage.setEmail('asdasd');
        await passwordResetPage.clickSubmitButton();
    });

    it('forgot password send email if input email is valid', async () => {
        browser.url('https://github.com/login');
        await signInPage.clickForgotPassword();
        await passwordResetPage.setEmail('max1794office@gmail.com');
        await passwordResetPage.clickSubmitButton();
    });
});