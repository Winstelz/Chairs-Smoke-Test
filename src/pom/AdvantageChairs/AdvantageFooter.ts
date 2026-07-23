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
    await this.about.click();
    await expect(this.page.url()).toContain("about-us");
}
async clickPayment () {
    await this.payment.click();
    await expect(this.page.url()).toContain("payment-options");
}
async clickShipping () {
    await this.shipping.click();
    await expect(this.page.url()).toContain("shipping-information");
}
async clickSite () {
    await this.site.click();
    await expect(this.page.url()).toContain("site-security");
}
async clickPrivacy () {
    await this.privacy.click();
    await expect(this.page.url()).toContain("privacy-policy");
}
async clickCAPrivacy () {
    await this.caPrivacy.click();
    await expect(this.page.url()).toContain("privacy-policy");
}
async clickTermOU () {
    await this.termsOU.click();
    await expect(this.page.url()).toContain("terms-of-use");
}
async clickTermOS () {
    await this.termsOS.click();
    await expect(this.page.url()).toContain("terms-of-sale");
}
async clickAccess () {
    await this.access.click();
    await expect(this.page.url()).toContain("accessibility");
}
async clickSiteMap () {
    await this.sitemap.click();
    await expect(this.page.url()).toContain("sitemap");
}
}
