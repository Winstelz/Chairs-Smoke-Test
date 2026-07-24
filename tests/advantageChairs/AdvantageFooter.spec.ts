import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';
import { AdvantageFooter } from '../../src/pom/AdvantageChairs/AdvantageFooter';



test('AdvantageFooter WorkFlow', async ({ page }) => {
    const homePage = new AdvantageHomePage(page)
    const footer = new AdvantageFooter(page)
    //Navigate to Advantage site   
        await homePage.gotoHomePage(); 
    //Click About Us
        await footer.clickAbout();
    //Click Payment Option
       await footer.clickPayment();
     //Click Shipping Information
        await footer.clickShipping();
     //Click Site Security
        await footer.clickSite();
    //Click Privacy Policy
        await footer.clickPrivacy();
    //Click CA Privacy
        await footer.clickCAPrivacy();
    //Click Terms of Use
        await footer.clickTermOU();
    //Click Terms of Sale
        await footer.clickTermOS();
    //Click Accessibility Statement
        await footer.clickAccess();
    //Click Site Map
        await footer.clickSiteMap();

    });
