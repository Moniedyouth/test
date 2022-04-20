const topicsPage = require('../../page/topics.page');
const searchPage = require('../../page/search.page');
const webdriverioPage = require('../../page/webdriverio.page');

describe ('Use search form', () => {
    it ('Result of using seacrh form', async () => {
        browser.url('https://github.com/topics');
        const inputForm = "webdriverio";
        await topicsPage.clickSearchForm();
        await topicsPage.typeIntoForm (inputForm);
        await browser.pause (2000);
        await searchPage.clickTSButton();
        await browser.pause (2000);
        await searchPage.clickLink();
        await webdriverioPage.checkCurrentLink (); 
            })
})