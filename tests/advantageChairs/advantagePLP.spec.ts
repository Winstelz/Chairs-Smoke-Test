import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP } from '../../src/pom/advantageChairs/advantagePLP';
import { CommonPDP } from '../../src/pom/commonPages/commonPDP';
import { CommonPLP } from '../../src/pom/commonPages/commonPLP';

type PageObjects = {
  homePage: AdvantageHomePage;
  commonPDP: CommonPDP;
  plp: AdvantagePLP;
  commonPLP: CommonPLP;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
    commonPDP: async ({ page }, use) => {
        await use(new CommonPDP(page));
    },
    plp: async ({ page }, use) => {
        await use(new AdvantagePLP(page));
    },
    commonPLP: async ({ page }, use) => {
        await use(new CommonPLP(page));
    },
});

test('Advantage PLP Flow', async ({ commonPLP, homePage, plp }) => {
    
//Navigate to Advantage site   
    await homePage.gotoHomePage() 
//Click Church Chairs Menu
    await homePage.clickChurchChairs();
//Remove popUp if shown
    await homePage.popUpClose(); 
//Click Sort button Price low to high
    await commonPLP.selectSorting("Advantage Multipurpose Church Chairs", plp.firstItem, );
//Click Color Family -> Green
    await commonPLP.selectColorFilter();
//Click Finish -> Copper Vein Metal
    await commonPLP.clickingFinishFilter();   
//Clear Filter Pills
    await commonPLP.clearColorFilter();
    await commonPLP.clearFinishFilter();
//Click Pagination
   await commonPLP.clickPagination();
//Click Pagination Right Arrow
    await commonPLP.clickRightArrow()
//Click Pagination Left Arrow
    await commonPLP.clickLeftArrow();
//Click on PDP
    await commonPLP.clickPDP(plp.pdpItem, "21-stackable-church-chair-with-arms-xu-dg-60156" );
});