describe ('Tests',()=>{
    it ('First test', async () => {
        await browser.url('https://github.com/');
        const automateButton = await $('[href="#home-automate"]')
        await automateButton.click ();
        await browser.pause(2000);
        const textAutomation = await $('div[class*="col-8-max "] [class="h2-mktg mb-3"]')
        console.log ('Is displayed', await textAutomation.isDisplayed());
    })
    })