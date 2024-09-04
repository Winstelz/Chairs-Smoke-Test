import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../pages/AdvantageHomePage';
import { AdvantagePLP }from '../../pages/AdvantagePLP';



test('AdvantagePLP', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
    const PLP = new AdvantagePLP(page)
//Navigate to Advantage site   
    await HomePage.gotoHomePage() 
//Click Church Chairs Menu
    await HomePage.ClickChurchChairs();
//Click Sort button Price low to high
    await PLP.Sorting();
//Click Color Family -> Green
    await PLP.ColorFilter();
//Click Finish -> Copper Vein Metal
    await PLP.FinishFilter();
//Clear Filter Pills
    await PLP.ClearColorFilter();
    await PLP.ClearAllFilter();
//Click Pagination
   await PLP.ClickPagination();
//Click Pagination Right Arrow
    await PLP.ClickRightArrow()
//Click Pagination Left Arrow
    await PLP.ClickLeftArrow();
//Click on PDP
    await PLP.ClickPDP();

    




});