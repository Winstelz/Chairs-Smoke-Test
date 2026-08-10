import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { CommonFooter } from '../../src/pom/commonPages/commonFooter';

type PageObjects = {
  homePage: AdvantageHomePage;
  commonFooter: CommonFooter;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  commonFooter: async ({ page }, use) => {
    await use(new CommonFooter(page));
  },

});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('Advantage Information Footer', async ({ homePage, commonFooter }) => {
    //Await for Pop Up and Close
        await homePage.popUpClose();
    //Click About Us
        await commonFooter.clickAboutUs();
    //Click Delivery Information
        await commonFooter.clickDeliveryInformation();
    //Click Ordering Information
        await commonFooter.clickOrderingInformation();
    //Click Payment Option
        await commonFooter.clickPaymentOption();
    //Click Finance Options
        await commonFooter.clickFinanceOptions();
    //Click Shipping Information
        await commonFooter.clickShippingInformation();
    //Click Freight Charges
        await commonFooter.clickFreightCharges();
    //Click Returns Information
        await commonFooter.clickReturnsInformation();
    //Click Product Warranty
        await commonFooter.clickProductWarranty();
    //Click Contact Us
        await commonFooter.clickContactUs();
    });

test('Advantage Term Footer', async ({ commonFooter }) => {
    //Click About Us
        await commonFooter.clickAboutUs();
    //Click Payment Option
       await commonFooter.clickPaymentOption();
     //Click Shipping Information
        await commonFooter.clickShippingInformation();
     //Click Site Security
        await commonFooter.clickSiteSecurity();
    //Click Privacy Policy
        await commonFooter.clickPrivacyPolicy();
    //Click CA Privacy
        await commonFooter.clickCAPrivacyPolicy();
    //Click Do Not Sell or Share
        await commonFooter.clickDoNotSellOrShare();
    //Click US Privacy
        await commonFooter.clickUSPrivacy();
    //Click PIPEDA
        await commonFooter.clickPIPEDA(`canadian-privacy-rights-pipeda-quebec-law-25`);
    //Click GDPR
        await commonFooter.clickGDPR();
    //Click Terms of Use
        await commonFooter.clickTermsOfUse();
    //Click Terms of Sale
        await commonFooter.clickTermsOfSale();
    //Click Accessibility Statement
        await commonFooter.clickAccessibilityStatement();
    //Click Site Map
        await commonFooter.clickSiteMap();
    });
