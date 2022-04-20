class TopicsPage {
    get topicsHeader () {
return $('h1')
    }
async displaydTopics(){
   return await this.topicsHeader.isDisplayedInViewport();
}
get searchForm () {
    return $('[placeholder="Search GitHub"]');
}
async clickSearchForm () {
    await this.searchForm.click ();
}
async typeIntoForm (inputForm) {
    await this.searchForm.setValue(inputForm);
    await browser.keys('Enter');
}
}
module.exports = new TopicsPage();