import { test as base } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { CommonFooter } from '../../src/pom/commonPages/commonFooter';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: BestChiavariHomePage;
  commonFooter: CommonFooter;
  commonUtil: CommonUtil;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BestChiavariHomePage(page));
  },
  commonFooter: async ({ page }, use) => {
    await use(new CommonFooter(page));
  },
  commonUtil: async ({ page }, use) => {
    await use(new CommonUtil(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('BestChiavari Information Footer', async ({ commonUtil, commonFooter }) => {
    //Await for Pop Up and Close
        await commonUtil.popUpClose();
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
        await commonFooter.clickReturnsInformation(commonFooter.returnsInformations);
    //Click Product Warranty
        await commonFooter.clickProductWarranty();
    //Click Contact Us
        await commonFooter.clickContactUs();
    });

test('BestChiavari Terms Footer', async ({ commonUtil, homePage, commonFooter }) => {
    //Await for Pop Up and Close
        await commonUtil.popUpClose();
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
        await commonFooter.clickPIPEDA('canadian-laws-compliance');
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
