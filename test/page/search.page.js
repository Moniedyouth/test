class SearchPage {
    get typeScriptButton () {
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')
    }
    get firstLink () {
        return $('[href="/webdriverio/webdriverio"]');
    }
 async clickTSButton () {
     await this.typeScriptButton.click ();
 }
 async clickLink () {
     await this.firstLink.click ();
 }

}

module.exports = new SearchPage;