import { test, expect } from '@playwright/test';
import { BestChiavairHomePage } from '../../src/pom/bestChiavairChairs/bestChiavairHomePage';
import { CommonHomePage } from '../../src/pom/commonHomePage';



test('AnnoucementBar Flow', async ({ page }) => {
    const homePage = new BestChiavairHomePage(page);
    const commonHomePage = new CommonHomePage(page);

//Navigate to Best Chiavari site    
    await homePage.gotoHomePage();
//Click through the Bar
    await commonHomePage.clickBanner(homePage.bannerContainer);




});