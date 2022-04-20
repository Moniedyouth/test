const mainPage = require("../page/main.page");
describe('', () => {
    it('', async () => {        
        browser.url('https://webdriver.io/');
        const docsButton = await mainPage.docsButton;
        await docsButton.click();
        await browser.pause(5000);
    });
});