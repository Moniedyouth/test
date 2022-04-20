class HelpPage {
    get stackOverflow() {
        return $('h2#stack-overflow');
    }

    get discussion() {
        return $('h2#discussion-forums');
    }

    get news() {
        return $('h2#news');
    }

    isStackOverflow() {
        return this.stackOverflow.isDisplayed();
    }

    isDiscussion() {
        return this.discussion.isDisplayed();
    }

    isNews() {
        return this.news.isDisplayed();
    }
}

module.exports = new HelpPage();
