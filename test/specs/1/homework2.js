describe('home work 2', () => {
    it('', async () => {
        const intrPageUrl = 'https://webdriver.io/docs/api';
        browser.url(intrPageUrl);
        // open link in a new tab
        const linkJSON = await $('//*[text()="JSONWire protocol"]');
        const hrefJSON = await linkJSON.getAttribute('href');
        await browser.newWindow(hrefJSON);
        console.log('hw2-log', await browser.getUrl());
        // is link displayed
        const linkWiki = await $('//a[text()="on the wiki"]');
        console.log('hw2-log', 'is wiki link displayed:', await linkWiki.isDisplayed());
        // move to previous tab
        await browser.switchWindow(intrPageUrl);
        await browser.pause(3000);
        // is header displayed
        const isHeaderDisplayed = await browser.waitUntil(async () => {
            const introductionHeader = await $('h1=Introduction');
            const introText = await introductionHeader.getText();
            await introductionHeader.saveScreenshot('screenshots/introduction-header.png');
            return introText === 'Introduction';
        },{timeout: 5000, timeoutMsg: 'header is not displayed'} );
        console.log('hw2-log', 'is header displayed:', isHeaderDisplayed);
        // twitter
        const linkTwitter = await $('a[href="https://twitter.com/webdriverio"]');
        console.log('hw2-log', 'is twitter link displayed:', await linkTwitter.isDisplayed());
        console.log('hw2-log', 'is twitter link in viewport:', await linkTwitter.isDisplayedInViewport());
        await linkTwitter.scrollIntoView();
        console.log('hw2-log', 'is twitter link displayed:', await linkTwitter.isDisplayed());
        console.log('hw2-log', 'is twitter link in viewport:', await linkTwitter.isDisplayedInViewport());
        // blog
        const blog = await $('a[href="/blog"]');
        console.log('hw2-log', 'is blog focused', await blog.isFocused());
        await blog.click();
        console.log('hw2-log', 'is blog focused', await blog.isFocused());
    });
});