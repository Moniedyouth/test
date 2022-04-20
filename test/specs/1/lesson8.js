describe ('Check website', () => {
    it('Open Introduction', async () =>{
        browser.url('https://webdriver.io/docs/debugging/');
        browser.pause(2000);
       const list = await $('.theme-doc-sidebar-menu.menu__list');
               
       console.log('list', await list.getHTML());
        // list.forEach(async (element: any) => {
        //     console.log('element', element);
        //     const liText = await element.getText();
        //     console.log ('Item of list:', liText);
        // });
    //    for (const element of list) {
    //        const liText = await element.getText();
    //        console.log ('Item of list:', liText);   
    //    }
      })
})