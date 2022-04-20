const mainPage = require("../../page/main.page");
const pricingPage = require('../../page/pricing.page');
const pricingAccountPage = require('../../page/pricing.account.page');
const explorePage = require('../../page/explore.page');
const topicsPage = require('../../page/topics.page');

describe('Choose pricing plan', () => {
    it('Free plan on Github', async () => {
    const name = 'MaxUser';
    const email = 'max1794office@gmail.com';
    const password = 'Table1Maxim1';
    browser.url('https://github.com/');
    const headerItem = await mainPage.getHeaderItem('Pricing');
    await headerItem.moveTo();
    await browser.pause(2000);
    await mainPage.openPlans();
    await pricingPage.joinForFreeButtonClick();
    await pricingAccountPage.setUserName (name);
    await pricingAccountPage.setUserEmail(email);
    await pricingAccountPage.setUserPassword (password);
    await pricingAccountPage.submitAllEmailsCheckBox ();
    await pricingAccountPage.backPage();
    })
        it.only ('Topics', async () => {
            await browser.url('https://github.com/pricing');
            const headerItem = await pricingPage.getHeaderItem ('Explore');
            await headerItem.moveTo();
            await browser.pause(5000);
            await pricingPage.openExploreGitHub();
            await browser.pause(5000);
            await explorePage.clickButtonTopics();
            console.log(await topicsPage.displaydTopics());
                   }) 
}) 