const mainPage = require("../../page/main.page");

describe('Header items', () => {
    it('hover header item "Product" shows dropdown', async () => {
        browser.url('https://github.com/');
        const headerItem = await mainPage.getHeaderItem('Product');
        await headerItem.moveTo();
        const itemDropdown = await mainPage.getHeaderItemDropdown('Product');
        console.log('shows Product dropdown', await itemDropdown.isDisplayedInViewport());
    });

    it('hover header item "Explore" shows dropdown', async () => {
        browser.url('https://github.com/');
        const headerItem = await mainPage.getHeaderItem('Explore');
        await headerItem.moveTo();
        const itemDropdown = await mainPage.getHeaderItemDropdown('Explore');
        console.log('shows Explore dropdown', await itemDropdown.isDisplayedInViewport());
    });

    it('hover header item "Pricing" shows dropdown', async () => {
        browser.url('https://github.com/');
        const headerItem = await mainPage.getHeaderItem('Pricing');
        await headerItem.moveTo();
        const itemDropdown = await mainPage.getHeaderItemDropdown('Pricing');
        console.log('shows Pricing dropdown', await itemDropdown.isDisplayedInViewport());
    });
});

