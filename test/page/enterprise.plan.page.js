class EnterprisePlanPage {
get enterpriseCloudButton () {
return $('//*[text()="Enterprise Cloud"]');
}
get enterpriseServerButton () {
    return $('//*[text()="Enterprise Server"]');
}

async clickEnterpriseCloudButton () {
    await this.enterpriseCloudButton.click ();
}
async clickEnterpriseServerButton () {
    await this.enterpriseServerButton.click ();
}
}
module.exports = new EnterprisePlanPage();