import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantageAnnoucementBar } from '../../src/pom/advantageChairs/advantageAnnoucementBar';



test('AnnoucementBar Flow', async ({ page }) => {
    const homePage = new AdvantageHomePage(page)
    const banner = new AdvantageAnnoucementBar(page)
 //Navigate to Advantage site    
    await homePage.gotoHomePage();
//Click through the Bar
    await banner.clickBanner();
});