class WebdeiverioPage {

async checkCurrentLink () {
await expect (browser).toHaveUrlContaining ('webdriverio');
}
}

module.exports = new WebdeiverioPage;