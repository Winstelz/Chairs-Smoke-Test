import { test as base } from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';
import { BizChairsPLP } from '../../src/pom/bizChairs/bizChairsPLP';
import { CommonPDP } from '../../src/pom/commonPages/commonPDP';
import { CommonPLP } from '../../src/pom/commonPages/commonPLP';

type PageObjects = {
  homePage: BizChairsHomePage;
  commonPDP: CommonPDP;
  plp: BizChairsPLP;
  commonPLP: CommonPLP;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BizChairsHomePage(page));
  },
    commonPDP: async ({ page }, use) => {
        await use(new CommonPDP(page));
    },
    plp: async ({ page }, use) => {
        await use(new BizChairsPLP(page));
    },
    commonPLP: async ({ page }, use) => {
        await use(new CommonPLP(page));
    },
});

test('Biz Chairs PLP', async ({ commonPLP, homePage, plp }) => {
//Navigate to Biz Chairs site    
    await homePage.gotoHomePage();
//Click Chiavari Chairs Menu
    await homePage.clickOffice();
//Click Sort button Price low to high
    await commonPLP.selectSorting("Kerry Plastic 4 Compartment Pen Holder Office Desktop Organizer with Metallic Trim", plp.firstItem, );
//Click Color Family -> Green
    await commonPLP.selectColorFilter();
//Click Finish -> Copper Vein Metal
    await commonPLP.clickingFinishFilter(plp.blackMetal);  
//Clear Filter Pills
    await commonPLP.clearAllFilter();
//Click Pagination
   await commonPLP.clickPagination();
//Click Pagination Right Arrow
    await commonPLP.clickRightArrow()
//Click Pagination Left Arrow
    await commonPLP.clickLeftArrow();
//Click on PDP
    await commonPLP.clickPDP(plp.officeFirstItem, "leathersoft-sofa-with-clean-line-stitched-frame-bt-827-3?variant=49863439679790" );
});