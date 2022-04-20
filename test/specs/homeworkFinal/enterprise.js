const mainPage = require("../../page/main.page");
const enterprisePlanPage = require ("../../page/enterprise.plan.page");
const enterpriseAccountPage = require ("../../page/enterprise.account.page");
const enterpriseServerPage = require ("../../page/enterprise.server.page");


describe ('GitHub Enterprise', () => {
it ('Register Enteprise Cloud', async () =>{
    const email = 'max1794office@gmail.com';
    const password = 'Table1Maxim1';
    await browser.url('https://github.com/');
    await mainPage.clickEnterpriseButton();
    await browser.pause(2000);
    await enterprisePlanPage.clickEnterpriseCloudButton();
    await enterpriseAccountPage.setUserName('MaxUser');
    await enterpriseAccountPage.setUserEmail(email);
    await enterpriseAccountPage.setUserPassword (password);
    await enterpriseAccountPage.submitAllEmailsCheckBox ();
    await browser.pause(2000);
    await enterpriseAccountPage.backPage();
}) 
    
    it.only ('Register Enteprise Cloud', async () =>{
        const name = 'MaxUser';
        const company = 'IT Company';
        const email = 'max1794office@gmail.com';
        const phoneNumber = '0942323333';
        const text = 'I want work at your company!';
        await browser.url('https://github.com/organizations/enterprise_plan?ref_cta=Start%2520a%2520free%2520trial&ref_loc=billboard&ref_page=%2F')
        await browser.pause (2000);
        await enterprisePlanPage.clickEnterpriseServerButton();
        await enterpriseServerPage.setUserName(name);
        await enterpriseServerPage.setCompanyName (company);
        await enterpriseServerPage.setCompanyEmail (email);
        await enterpriseServerPage.setPhoneNumberEmail (phoneNumber);
        await enterpriseServerPage.clickInstalationRadioButton();
        await enterpriseServerPage.clickOtherQuestadioButton();
        await enterpriseServerPage.clickQuestionsList();
        await enterpriseServerPage.setText(text);
        await enterpriseServerPage.clickAgreedCheckBox()
        await browser.pause (2000);

    })
})