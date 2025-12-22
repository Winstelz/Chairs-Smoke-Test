import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageHomePage';
import { AdvantageFooter } from '../../src/pom/AdvantageFooter';



test('AdvantageFooter', async ({ page }) => {
    const HomePage = new AdvantageHomePage(page)
    const Footer = new AdvantageFooter(page)
    //Navigate to Advantage site   
        await HomePage.gotoHomePage(); 
    //Click About Us
        await Footer.clickAbout();
    //Click Payment Option
       await Footer.clickPayment();
     //Click Shipping Information
        await Footer.clickShipping();
     //Click Site Security
        await Footer.clickSite();
    //Click Privacy Policy
        await Footer.clickPrivacy();
    //Click CA Privacy
        await Footer.clickCAPrivacy();
    //Click Terms of Use
        await Footer.clickTermOU();
    //Click Terms of Sale
        await Footer.clickTermOS();
    //Click Accessibility Statement
        await Footer.clickAccess();
    //Click Site Map
        await Footer.clickSiteMap();

    });
