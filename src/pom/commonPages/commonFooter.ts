import { expect, type Locator, type Page } from '@playwright/test';


export class CommonFooter {
    readonly page: Page;
    readonly aboutUs: Locator;
    readonly deliveryInformation: Locator;
    readonly orderingInformation: Locator;
    readonly paymentOptions: Locator;
    readonly financeOptions: Locator;
    readonly shippingInformation: Locator;
    readonly freightCharges: Locator;
    readonly returnsInformations: Locator;
    readonly productWarranty: Locator;
    readonly contactUs: Locator

    readonly siteSecurity: Locator;
    readonly privacyPolicy: Locator;
    readonly caPrivacyPolicy: Locator;
    readonly doNotSellOrShare: Locator;
    readonly usPrivacy: Locator;
    readonly pipeda: Locator;
    readonly gdpr: Locator;
    readonly termsOfUse: Locator;
    readonly termsOfSale: Locator;
    readonly accessibilityStatement: Locator;
    readonly sitemap: Locator;

constructor(page: any) {
    this.page = page;
    this.aboutUs =  page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='About Us']");
    this.deliveryInformation = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Delivery Information']");
    this.orderingInformation = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Ordering Information']");
    this.paymentOptions = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Payment Options']");
    this.financeOptions = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Finance Options']");
    this.shippingInformation = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Shipping Information']");
    this.freightCharges = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Freight Charges']");
    this.returnsInformations = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Returns Information']");
    this.productWarranty = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Product Warranty']");
    this.contactUs = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Contact Us']");
    
    this.siteSecurity = page.locator("//a[normalize-space()='Site Security']");
    this.privacyPolicy = page.locator("//a[normalize-space()='Privacy Policy']");
    this.caPrivacyPolicy = page.locator("//a[normalize-space()='California Privacy Rights']")
    this.doNotSellOrShare = page.locator("//a[normalize-space()='Do Not Sell or Share']");
    this.usPrivacy = page.locator("//a[normalize-space()='US Privacy']");
    this.pipeda = page.locator("//a[normalize-space()='PIPEDA']");
    this.gdpr = page.locator("//a[normalize-space()='GDPR']");
    this.termsOfUse = page.locator("//a[normalize-space()='Terms of Use']");
    this.termsOfSale = page.locator("//a[normalize-space()='Terms of Sale']");
    this.accessibilityStatement = page.locator("//a[normalize-space()='Accessibility Statement']");
    this.sitemap = page.locator("//a[normalize-space()='Sitemap']");

}

async clickAboutUs () {
    console.log({ message: `Clicking About Us....`});
    await this.aboutUs.click();
    await expect(this.page.url()).toContain("about-us");
    await this.page.waitForTimeout(1000);
}

async clickDeliveryInformation () {
    console.log({ message: `Clicking Delivery Information....`});
    await this.deliveryInformation.click();
    await expect(this.page.url()).toContain("delivery-information");
    await this.page.waitForTimeout(1200);
}

async clickOrderingInformation () {
    console.log({ message: `Clicking Ordering Information....`});
    await this.orderingInformation.click();
    await expect(this.page.url()).toContain("ordering-information");
    await this.page.waitForTimeout(1000);
}
async clickPaymentOption () {
    console.log({ message: `Clicking Payment Options....`});
    await this.paymentOptions.click();
    await expect(this.page.url()).toContain("payment-options");
    await this.page.waitForTimeout(1100);
}

async clickFinanceOptions () {
    console.log({ message: `Clicking Finance Options....`});
    await this.financeOptions.click();
    await expect(this.page.url()).toContain("finance-options");
    await this.page.waitForTimeout(1000);
}

async clickShippingInformation () {
    console.log({ message: `Clicking Shipping Information....`});
    await this.shippingInformation.click();
    await expect(this.page.url()).toContain("shipping-information");
    await this.page.waitForTimeout(1300);
}

async clickFreightCharges () {
    console.log({ message: `Clicking Freight Charges....`});
    await this.freightCharges.click();
    await expect(this.page.url()).toContain("freight-charges");
    await this.page.waitForTimeout(1000);
}

async clickReturnsInformation(text: Locator) {
    console.log({ message: `Clicking Return Information....`});
    await text.click();
    await expect(this.page.url()).toContain(`returns-information`);
    await this.page.waitForTimeout(1100);
}

async clickProductWarranty () {
    console.log({ message: `Clicking Product Warranty....`});
    await this.productWarranty.click();
    await expect(this.page.url()).toContain("product-warranty");
    await this.page.waitForTimeout(1000);
}

async clickContactUs () {
    console.log({ message: `Clicking Contact Us....`});
    await this.contactUs.click();
    await expect(this.page.url()).toContain("contact-us");
    await this.page.waitForTimeout(1300);
}


async clickSiteSecurity () {
    console.log({ message: `Clicking Site Security....`});
    await this.siteSecurity.click();
    await expect(this.page.url()).toContain("site-security");
    await this.page.waitForTimeout(1000);
}
async clickPrivacyPolicy () {
    console.log({ message: `Clicking Privacy Policy....`});
    await this.privacyPolicy.click();
    await expect(this.page.url()).toContain("privacy-policy");
    await this.page.waitForTimeout(1200);
}
async clickCAPrivacyPolicy () {
    console.log({ message: `Clicking California Privacy Rights....`});
    await this.caPrivacyPolicy.click();
    await expect(this.page.url()).toContain("privacy-policy");
    await this.page.waitForTimeout(1000);
}

async clickCaliforniaPrivacyRights () {
    console.log({ message: `Clicking California Privacy Rights....`});
    await this.caPrivacyPolicy.click();
    await expect(this.page.url()).toContain("privacy-policy");
    await this.page.waitForTimeout(1300);
}

async clickDoNotSellOrShare () {
    console.log({ message: `Clicking Do Not Sell or Share....`});
    await this.doNotSellOrShare.click();
    await expect(this.page.url()).toContain("do-not-sell-or-share-my-personal-information");
    await this.page.waitForTimeout(1000);
}

async clickUSPrivacy () {
    console.log({ message: `Clicking US Privacy....`});
    await this.usPrivacy.click();
    await expect(this.page.url()).toContain("us-privacy");
    await this.page.waitForTimeout(1100);
}

async clickPIPEDA (site: string) {
    console.log({ message: `Clicking PIPEDA....`});
    await this.pipeda.click();
    await expect(this.page.url()).toContain(site);
    await this.page.waitForTimeout(1000);
}

async clickGDPR () {
    console.log({ message: `Clicking GDPR....`});
    await this.gdpr.click();
    await expect(this.page.url()).toContain("gdpr");
    await this.page.waitForTimeout(1200);
}

async clickTermsOfUse () {
    console.log({ message: `Clicking Terms of Use....`});
    await this.termsOfUse.click();
    await expect(this.page.url()).toContain("terms-of-use");
    await this.page.waitForTimeout(1000);

}
async clickTermsOfSale () {
    console.log({ message: `Clicking Terms of Sale....`});
    await this.termsOfSale.click();
    await expect(this.page.url()).toContain("terms-of-sale");
    await this.page.waitForTimeout(1100);
}
async clickAccessibilityStatement () {
    console.log({ message: `Clicking Accessibility Statement....`});
    await this.accessibilityStatement.click();
    await expect(this.page.url()).toContain("accessibility");
    await this.page.waitForTimeout(1000);
}
async clickSiteMap () {
    console.log({ message: `Clicking Site Map....`});
    await this.sitemap.click();
    await expect(this.page.url()).toContain("sitemap");
    await this.page.waitForTimeout(1200);
}
}