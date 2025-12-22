import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../src/pom/AdvantageHomePage';
import { AdvantageAnnoucementBar }from '../../src/pom/AdvantageAnnoucementBar';



test('AnnoucementBar', async ({ page }) => {
    const HomePage = new AdvantageHomePage(page)
    const Banner = new AdvantageAnnoucementBar(page)
 //Navigate to Advantage site    
    await HomePage.gotoHomePage();
//Click through the Bar
    await Banner.clickBanner();
    





});