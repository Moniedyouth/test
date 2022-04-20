const apiPage = require ('../page/api.page');
const helpPage = require ('../page/help.page');
const versionsPage = require ('../page/versions.page');

describe('', () => {
    it('', async () => {
        browser.url('https://webdriver.io/docs/api');
        await apiPage.clickContribute();
        
        browser.url('https://webdriver.io/community/support');
        console.log('stackOverflow', await helpPage.isStackOverflow());
        console.log('discussion', await helpPage.isDiscussion());
        console.log('news', await helpPage.isNews());

        browser.url('https://webdriver.io/versions');
        await versionsPage.clickV5();
        await browser.pause(5000);
    });
});