import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageFooter {
    readonly page: Page;
    readonly About: Locator;
    readonly Payment: Locator;
    readonly Shipping: Locator;
    readonly Site: Locator;
    readonly Privacy: Locator;
    readonly CAPrivacy: Locator;
    readonly TermsOU: Locator;
    readonly TermsOS: Locator;
    readonly Access: Locator;
    readonly Sitemap: Locator;

constructor(page) {
    this.page = page;
    this.About =  page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='About Us']");
    this.Payment = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Payment Options']");
    this.Shipping = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Shipping Information']");
    this.Site = page.locator("//a[normalize-space()='Site Security']");
    this.Privacy = page.locator("//a[normalize-space()='Privacy Policy']");
    this.CAPrivacy = page.locator("//a[normalize-space()='California Privacy Rights']");
    this.TermsOU = page.locator("//a[normalize-space()='Terms of Use']");
    this.TermsOS = page.locator("//a[normalize-space()='Terms of Sale']");
    this.Access = page.locator("//a[normalize-space()='Accessibility Statement']");
    this.Sitemap = page.locator("//a[normalize-space()='Sitemap']");

}
async ClickAbout () {
    await this.About.click();
    await expect(this.page.url()).toContain("about-us");
}
async ClickPayment () {
    await this.Payment.click();
    await expect(this.page.url()).toContain("payment-options");
}
async ClickShipping () {
    await this.Shipping.click();
    await expect(this.page.url()).toContain("shipping-information");
}
async ClickSite () {
    await this.Site.click();
    await expect(this.page.url()).toContain("site-security");
}
async ClickPrivacy () {
    await this.Privacy.click();
    await expect(this.page.url()).toContain("privacy-policy");
}
async ClickCAPrivacy () {
    await this.CAPrivacy.click();
    await expect(this.page.url()).toContain("privacy-policy");
}
async ClickTermOU () {
    await this.TermsOU.click();
    await expect(this.page.url()).toContain("terms-of-use");
}
async ClickTermOS () {
    await this.TermsOS.click();
    await expect(this.page.url()).toContain("terms-of-sale");
}
async ClickAccess () {
    await this.Access.click();
    await expect(this.page.url()).toContain("accessibility");
}
async ClickSiteMap () {
    await this.Sitemap.click();
    await expect(this.page.url()).toContain("sitemap");
}
}