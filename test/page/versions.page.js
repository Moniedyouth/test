class VersionsPage {
   get v5() {
       return $("a[href*='v5.']");
   }

   clickV5() {
       this.v5.click();
   }
}

module.exports = new VersionsPage();
