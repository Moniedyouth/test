const mainPage = require('../../page/main.page');
const careersPage = require('../../page/careers.page');

describe ('Careers', () => {
    it ('Find careers', async () =>{
        await browser.url('https://github.com/');
        await mainPage.clickCareersButton();
        await careersPage.clickPositionButton();
        await careersPage.logOpenPositions();
    })
})