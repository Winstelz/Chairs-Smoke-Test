import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../pages/AdvantageHomePage';
import { AdvantageFooter } from '../../pages/AdvantageFooter';



test('AdvantageFooter', async ({ page }) => {
    const HomePage = new AdvantageHomePage(page)
    const Footer = new AdvantageFooter(page)
    //Navigate to Advantage site   
        await HomePage.gotoHomePage(); 
    //Click About Us
        await Footer.ClickAbout();
    //Click Payment Option
       await Footer.ClickPayment();
     //Click Shipping Information
        await Footer.ClickShipping();
     //Click Site Security
        await Footer.ClickSite();
    //Click Privacy Policy
        await Footer.ClickPrivacy();
    //Click CA Privacy
        await Footer.ClickCAPrivacy();
    //Click Terms of Use
        await Footer.ClickTermOU();
    //Click Terms of Sale
        await Footer.ClickTermOS();
    //Click Accessibility Statement
        await Footer.ClickAccess();
    //Click Site Map
        await Footer.ClickSiteMap();

    });
