describe('Github Main Page', () => {
    it ('Search refers to Search Page with empty input value.', async () => {
        browser.url('https://github.com/');
        let search = await $('[data-test-selector="nav-search-input"]');
        await search.click();
        await browser.keys('Enter');
        search = await $('input[placeholder="Search GitHub"]');

        console.log('url', await browser.getUrl());
        console.log('search', await search.getText());
            });

    it ('Search shows result by user input ("Mocha").', async () => {
        browser.url('https://github.com/');
        const search = await $('[data-test-selector="nav-search-input"]');
        await search.click();
        await search.addValue('Mocha');
        await browser.keys('Enter');
        const header = await $("//h3[contains(text(),'repository results')]");

        console.log('url', await browser.getUrl());
        console.log('header', await header.getText());
        
    });

    it ('Search shows "not found result" by user input (random string).', async () => {
        browser.url('https://github.com/');
        const search = await $('[data-test-selector="nav-search-input"]');
        const randomString = generateRandomString(25);
        await search.click();
        await search.addValue(randomString);
        await browser.keys('Enter');
        const result = await $("//h3[contains(text(),'We couldn’t find any repositories matching')]");

        console.log('url with random string', await browser.getUrl());
        console.log('result obj', await result.getText());
        
    });

    it ('Sign up works with valid e-mail.', async () => {
        browser.url('https://github.com/');
        const signUpInput = await $('#user_email');
        await signUpInput.click();
        await signUpInput.addValue('ukraine@com.ua');

        const signUpButton = await $('form.js-signup-form button');
        await signUpButton.click();

        console.log('url', await browser.getUrl());
        
    });

    it ('Sign up shows validation error with not valid e-mail.', async () => {
        browser.url('https://github.com/');
        const signUpInput = await $('#user_email');
        await signUpInput.click();
        await signUpInput.addValue('not-valid-email');

        const signUpButton = await $('form.js-signup-form button');
        await signUpButton.click();

        console.log('url', await browser.getUrl());
    });

    it ('Show animated block when it\'s in a viewport.', async () => {
        browser.url('https://github.com/');
        const animatedBlock = await $('.home-mobile-iphone');

        console.log('animated block in a viewport', await animatedBlock.isDisplayedInViewport());
        await animatedBlock.scrollIntoView();
        await browser.pause(5000);
        console.log('animated block in a viewport', await animatedBlock.isDisplayedInViewport());
    });
});

// source: https://stackoverflow.com/a/1349426
function generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}