import { expect, type Locator, type Page } from '@playwright/test';


export class AdvantageFooter {
    readonly page: Page;
    readonly about: Locator;
    readonly payment: Locator;
    readonly shipping: Locator;
    readonly site: Locator;
    readonly privacy: Locator;
    readonly caPrivacy: Locator;
    readonly termsOU: Locator;
    readonly termsOS: Locator;
    readonly access: Locator;
    readonly sitemap: Locator;

constructor(page: any) {
    this.page = page;
    this.about =  page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='About Us']");
    this.payment = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Payment Options']");
    this.shipping = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Shipping Information']");
    this.site = page.locator("//a[normalize-space()='Site Security']");
    this.privacy = page.locator("//a[normalize-space()='Privacy Policy']");
    this.caPrivacy = page.locator("//a[normalize-space()='California Privacy Rights']");
    this.termsOU = page.locator("//a[normalize-space()='Terms of Use']");
    this.termsOS = page.locator("//a[normalize-space()='Terms of Sale']");
    this.access = page.locator("//a[normalize-space()='Accessibility Statement']");
    this.sitemap = page.locator("//a[normalize-space()='Sitemap']");

}
async clickAbout () {
    console.log({ message: `Clicking About Us....`});
    await this.about.click();
    await expect(this.page.url()).toContain("about-us");
}
async clickPayment () {
    console.log({ message: `Clicking Payment Options....`});
    await this.payment.click();
    await expect(this.page.url()).toContain("payment-options");
}
async clickShipping () {
    console.log({ message: `Clicking Shipping Information....`});
    await this.shipping.click();
    await expect(this.page.url()).toContain("shipping-information");
}
async clickSite () {
    console.log({ message: `Clicking Site Security....`});
    await this.site.click();
    await expect(this.page.url()).toContain("site-security");
}
async clickPrivacy () {
    console.log({ message: `Clicking Privacy Policy....`});
    await this.privacy.click();
    await expect(this.page.url()).toContain("privacy-policy");
}
async clickCAPrivacy () {
    console.log({ message: `Clicking California Privacy Rights....`});
    await this.caPrivacy.click();
    await expect(this.page.url()).toContain("privacy-policy");
}
async clickTermOU () {
    console.log({ message: `Clicking Terms of Use....`});
    await this.termsOU.click();
    await expect(this.page.url()).toContain("terms-of-use");
}
async clickTermOS () {
    console.log({ message: `Clicking Terms of Sale....`});
    await this.termsOS.click();
    await expect(this.page.url()).toContain("terms-of-sale");
}
async clickAccess () {
    console.log({ message: `Clicking Accessibility Statement....`});
    await this.access.click();
    await expect(this.page.url()).toContain("accessibility");
}
async clickSiteMap () {
    console.log({ message: `Clicking Site Map....`});
    await this.sitemap.click();
    await expect(this.page.url()).toContain("sitemap");
}
}
