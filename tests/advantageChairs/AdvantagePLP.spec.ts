import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';
import { AdvantagePLP } from '../../src/pom/AdvantageChairs/AdvantagePLP';



test('AdvantagePLP Flow', async ({ page }) => {

    const homePage = new AdvantageHomePage(page)
    const plp = new AdvantagePLP(page)
    
//Navigate to Advantage site   
    await homePage.gotoHomePage() 
//Click Church Chairs Menu
    await homePage.clickChurchChairs();
//Click Sort button Price low to high
    await plp.selectSorting();
//Click Color Family -> Green
    await plp.selectColorFilter();
//Click Finish -> Copper Vein Metal
    await plp.clickingfinishFilter();
//Clear Filter Pills
    await plp.clearColorFilter();
    await plp.clearAllFilter();
//Click Pagination
   await plp.clickPagination();
//Click Pagination Right Arrow
    await plp.clickRightArrow()
//Click Pagination Left Arrow
    await plp.clickLeftArrow();
//Click on PDP
    await plp.clickPDP();

    




});