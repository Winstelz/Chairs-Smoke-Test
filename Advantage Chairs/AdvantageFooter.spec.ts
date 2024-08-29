import { test, expect } from '@playwright/test';



test('AdvantageFooter', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');
    //Click About Us
        const About = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='About Us']");
        await About.click();
        expect(page.url()).toContain("about-us");
    //Click Payment Option
        const Payment = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Payment Options']");
        await Payment.click();
        expect(page.url()).toContain("payment-options");
     //Click Shipping Information
        const Shipping = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Shipping Information']");
        await Shipping.click();
        expect(page.url()).toContain("shipping-information");
     //Click Site Security
        const SiteSecurity = page.locator("//a[normalize-space()='Site Security']");
        await SiteSecurity.click();
        expect(page.url()).toContain("site-security");
    //Click Privacy Policy
        const Privacy = page.locator("//a[normalize-space()='Privacy Policy']");
        await Privacy.click();
        expect(page.url()).toContain("privacy-policy");
    //Click CA Privacy
        const CAPrivacy = page.locator("//a[normalize-space()='California Privacy Rights']");
        await CAPrivacy.click();
        expect(page.url()).toContain("privacy-policy");
    //Click Terms of Use
        const TermsOU = page.locator("//a[normalize-space()='Terms of Use']");
        await TermsOU.click();
        expect(page.url()).toContain("terms-of-use");
    //Click Terms of Sale
        const TermsOS = page.locator("//a[normalize-space()='Terms of Sale']");
        await TermsOS.click();
        expect(page.url()).toContain("terms-of-sale");
    //Click Accessibility Statement
        const Access = page.locator("//a[normalize-space()='Accessibility Statement']");
        await Access.click();
        expect(page.url()).toContain("accessibility");
    //Click Site Map
        const Sitemap = page.locator("//a[normalize-space()='Sitemap']");
        await Sitemap.click();
        expect(page.url()).toContain("sitemap");
    
     




    });
