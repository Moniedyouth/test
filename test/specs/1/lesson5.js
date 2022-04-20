describe ('Check website', () => {
    it('Open Introduction', async () =>{
        browser.url('https://webdriver.io/docs/debugging/')
        const intro = await $('[href="/docs/api"]');
        await browser.pause (2000);
        await intro.click();
        await browser.pause(2000);
        const introductionHeader = await $('h1=Introduction');
        const introText = await introductionHeader.getText();
        expect (introText).toEqual('Introduction');
      })
})

describe ('Click on the button', () => {
  it.only ('Click on the main button', async () =>{
    await browser.url ('https://booking.uz.gov.ua/ru/');
    const inputFrom = await $("//*[text()='Откуда']//following-sibling::input");
    await inputFrom.click();
    await inputFrom.addValue('Одесса');
    await browser.pause(5000);
    const buttonOdessa = await $("//*[@aria-label='Одесса'][text()='Одесса']");
    await buttonOdessa.click();
    const inputWhere = await $("//*[text()='Куда']//following-sibling::input");
    await inputWhere.click();
    await inputWhere.addValue('Киев');
    await browser.pause(5000);
    const buttonKyiv = await $("//*[@aria-label='Киев'][text()='Киев']");
    await buttonKyiv.click();
    const menuHeader = await $$('nav.menu a');
    for (let index = 0; index <  menuHeader.length; index++) {
            const position =  menuHeader[index];
            console.log(await position.getText());
    }
  })
})