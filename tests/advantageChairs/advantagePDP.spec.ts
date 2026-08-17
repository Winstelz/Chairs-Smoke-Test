import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP } from '../../src/pom/advantageChairs/advantagePLP';
import { CommonPDP } from '../../src/pom/commonPages/commonPDP';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: AdvantageHomePage;
  plp: AdvantagePLP;
  commonPDP: CommonPDP;
  commonUtil: CommonUtil;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  plp: async ({ page }, use) => {
    await use(new AdvantagePLP(page));
  },
  commonPDP: async ({ page }, use) => {
    await use(new CommonPDP(page));
  },
  commonUtil: async ({ page }, use) => {
    await use(new CommonUtil(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('AdvantagePDP Flow', async ({ commonPDP, commonUtil, homePage, plp }) => {
    //Navigate to PLP
        await homePage.clickShopAll();
    //Click First Item
        await plp.firstItem.click();
    //Click Description
        await commonPDP.clickDescription("The Molded Foam Multipurpose Church Chair - 18.5 in. Wide provides a durable seating solution for your fellowship hall or convention center. This comfortably padded stack chair not only satisfies seating in Churches, but work well in hotel lobbies, banquet halls and conference facilities.");
    // Verify PDP Header
        await commonPDP.assertPDPHeader("Advantage Multipurpose Church Chairs - 18.5 in. Wide");
    // Verify PDP Price
        await commonPDP.assertPDPPrice("$49.36");  
    //Click Review Stars    
        await commonPDP.clickReviewStars();
    //Click New Review
        await commonPDP.clickNewReview();
        await commonPDP.clickCloseReview();
    //Sort Reviews 
        await commonPDP.sortFilter();
    //Review Pagination Rigth
        await commonPDP.rightArrowPagniation();
        await commonPDP.assertReviewNumber1("9 – 26");
    //Review Pagination left
        await commonPDP.leftArrowPagniation();
        await commonPDP.assertReviewNumber2();
    //remove popUp if shown
        await commonUtil.popUpClose();    
    //Qty Increase
        await commonPDP.qtyIncrease();  
    //Qty Decrease
        await commonPDP.qtyDecrease();       
    //Add Item to Cart
        await commonPDP.clickAddToCart();

});