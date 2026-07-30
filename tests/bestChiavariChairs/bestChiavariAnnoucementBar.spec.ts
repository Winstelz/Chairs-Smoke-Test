import { test, expect } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { CommonHomePage } from '../../src/pom/commonHomePage';



test('AnnoucementBar Flow', async ({ page }) => {
    const homePage = new BestChiavariHomePage(page);
    const commonHomePage = new CommonHomePage(page);

//Navigate to Best Chiavari site    
    await homePage.gotoHomePage();
//Click through the Bar
    await commonHomePage.clickBanner(homePage.bannerContainer);




});