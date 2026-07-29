import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { CommonHomePage } from '../../src/pom/commonHomePage';



test('AnnoucementBar Flow', async ({ page }) => {
    const homePage = new AdvantageHomePage(page)
    const commonHomePage = new CommonHomePage(page);
 //Navigate to Advantage site    
    await homePage.gotoHomePage();
//Click through the Bar
    await commonHomePage.clickBanner(homePage.bannerContainer);
});