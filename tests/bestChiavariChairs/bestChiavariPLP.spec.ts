import { test as base } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';
import { CommonPDP } from '../../src/pom/commonPages/commonPDP';
import { CommonPLP } from '../../src/pom/commonPages/commonPLP';

type PageObjects = {
  homePage: BestChiavariHomePage;
  commonPDP: CommonPDP;
  plp: BestChiavariPLP;
  commonPLP: CommonPLP;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BestChiavariHomePage(page));
  },
    commonPDP: async ({ page }, use) => {
        await use(new CommonPDP(page));
    },
    plp: async ({ page }, use) => {
        await use(new BestChiavariPLP(page));
    },
    commonPLP: async ({ page }, use) => {
        await use(new CommonPLP(page));
    },
});

test('BestChiavari PLP', async ({ commonPLP, homePage, plp }) => {
//Navigate to Best Chiavari site    
    await homePage.gotoHomePage();
//Click Chiavari Chairs Menu
    await homePage.clickBanquetChairs();
//Click Sort button Price low to high
    await commonPLP.selectSorting("HERCULES Series Trapezoidal Back Stacking Banquet Chair with 1.5", plp.firstItem, );
//Click Color Family -> Green
    await commonPLP.selectColorFilter();
//Click Finish -> Copper Vein Metal
    await commonPLP.clickingFinishFilter();  
//Clear Filter Pills
    await commonPLP.clearColorFilter();
    await commonPLP.clearFinishFilter();
//There are no PLP with multiple pages so no need to test pagination.
/*//Click Pagination
   await commonPLP.clickPagination();
//Click Pagination Right Arrow
    await commonPLP.clickRightArrow()
//Click Pagination Left Arrow
    await commonPLP.clickLeftArrow();*/
//Click on PDP
    await commonPLP.clickPDP(plp.pdpItem, "crown-back-stacking-banquet-chair-fd-c01?variant=47302183747872" );
});