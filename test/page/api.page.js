class ApiPage {
    get contribute() {
        return $('.table-of-contents__left-border a[href="#contribute"]');
    }

    async clickContribute() {
        await this.contribute.click();
    }

}

module.exports = new ApiPage();
