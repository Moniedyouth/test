class PricingPage {
    get joinForFreeButton (){
        return $('a[class="btn-mktg d-block btn-muted-mktg"]')
    }
   
    async joinForFreeButtonClick() {
    await this.joinForFreeButton.click();
}
getHeaderItem(headerExplore) {
    return $("//summary[contains(text(),'" + headerExplore + "')]");
}
async openExploreGitHub() {
    const exploreGitHub = await $("//a[contains(text(),'Explore GitHub')]");
    await exploreGitHub.click();
}
}
module.exports = new PricingPage();