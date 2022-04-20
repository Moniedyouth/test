describe ('Tests',()=>{
    it ('First test', async () => {
        await browser.url ('https://booking.uz.gov.ua/ru/');
        const input = await $('[aria-label="Откуда"]');
        await input.click ();
        await input.addValue ('Киев');
        await browser.pause (2000);

        let value = await input.getValue ();
        console.log('Откуда', value);

        expect(value).toEqual('Киев');

        const valueButton = await $('[value="14.04.2022"]'); 
        const SubmitButton = await valueButton.getValue();
        console.log('Attribute', SubmitButton);

        const location = await valueButton.getLocation ();
        console.log(location);
        const xLocation = await valueButton.getLocation ('x');
        console.log('xLocation'+ xLocation);

        const title = await browser.getTitle();
        const html = await browser.getUrl(); 
        console.log(title, html);


    })
    it.only ('Seond test', async () => {
        const uz = 'https://booking.uz.gov.ua/ru/'
        await browser.url (uz);
        const firstButton = await $ ('[href="https://uz.gov.ua/press_center/"]');
        console.log('is clickable', await firstButton.isClickable());

        console.log('is Displayed', await firstButton.isDisplayed());

        console.log('is DisplayedinViewport', await firstButton.isDisplayedInViewport());

        console.log('is Enabled', await firstButton.isEnabled());

        await firstButton.moveTo ();
        console.log('is Focused', await firstButton.isFocused());

        const mibile = await $('[class="mobile-version"]')
        await mibile.scrollIntoView();
        await browser.pause (2000)

        const isHeaderDisplayed = await browser.waitUntil(async () => {
            const introductionHeader = await $('[class="mobile-version"]');
            const introText = await introductionHeader.getText();
            await introductionHeader.saveScreenshot('introduction-header.png');
            return introText === 'Мобильная версия';
        },{timeout: 5000, timeoutMsg: 'header is not displayed'} );
        console.log('hw2-log', 'is header displayed:', isHeaderDisplayed);
        
        const linkJSON = await $('[href="https://booking.uz.gov.ua/ru/authorization/"]');
        const hrefJSON = await linkJSON.getAttribute('href');
        await browser.newWindow(hrefJSON);

        await browser.switchWindow(uz);
        await browser.pause(3000);
    })
})