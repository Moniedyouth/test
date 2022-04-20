class CareersPage {
    get positionButton() {
        return $('[href="#positions"]');
    }
    
    get openPositions(){
        return $$('[class="float-left f3-mktg text-normal py-4"]');
    }

    async clickPositionButton() {
        await this.positionButton.click();
    }

    async logOpenPositions(){
        const openPositions = await this.openPositions;
        for (let index = 0; index < openPositions.length; index++) {
            const position = openPositions[index];
            console.log(await position.getText());
        }
    }

}

module.exports = new CareersPage();