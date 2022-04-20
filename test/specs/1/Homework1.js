describe ('Homework 1', () => {
    it('', async () =>{
        browser.url('https://webdriver.io');
        const apiLink = await $('li a[href="/docs/api"]');
        await apiLink.click();
        console.log('Current URL: ', await browser.getUrl())
        const introductionHeader = await $('h1=Introduction');
        const introText = await introductionHeader.getText();
        console.log ('The main header: ', introText);
        const jsonWireProtocol = await $('[href="https://www.selenium.dev/documentation/legacy/json_wire_protocol/"]');
        const jsonWireProtocolText = await jsonWireProtocol.getAttribute('href');
        console.log ('The href attribute: ', jsonWireProtocolText);
        const searchBox = await $('.DocSearch-Button');
        await searchBox.click();
        let input = await $ ('#docsearch-input')
        await input.addValue ('test is ');
        await input.addValue ('DONE!');
        await browser.pause(5000);
      })
})