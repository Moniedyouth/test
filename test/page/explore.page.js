class ExplorePage {
    get buttonTopics (){
        return $('nav[role="navigation"] a[href="/topics"]')
    }
    async clickButtonTopics() {
        await this.buttonTopics.click();
    }
}

module.exports = new ExplorePage();