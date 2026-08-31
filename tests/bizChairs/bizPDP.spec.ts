import { test as base } from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';
import { CommonPDP } from '../../src/pom/commonPages/commonPDP';
import { BizChairsPLP } from '../../src/pom/bizChairs/bizChairsPLP';
import { CommonUtil } from '../../src/pom/commonUtil';
import { CommonCart } from '../../src/pom/commonPages/commonCart';

type PageObjects = {
  homePage: BizChairsHomePage;
  commonPDP: CommonPDP;
  plp: BizChairsPLP;
  commonUtil: CommonUtil;
  commonCart: CommonCart

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
    commonUtil: async ({ page }, use) => {
        await use(new CommonUtil(page));
    },
    commonCart: async ({ page }, use) => {
        await use(new CommonCart(page));
    },
});
test('Best Chiavari PDP', async ({ commonCart, commonPDP, commonUtil, homePage, plp }) => {
    //Navigate to Biz Chairs site    
        await homePage.gotoHomePage();
    //Navigate to PLP
        await homePage.clickOffice();
    //Click First Item
        await plp.clickOfficeFirstItem();
    //Click Description
        await commonPDP.clickDescription("Your lobby or reception area is the forefront of your business and provides that ever important first impression. Providing distinguished and comfortable seating lets your clients know that you value their business. The modern appeal of this soft and durable LeatherSoft upholstered collection will make a lasting impression.");
    //Assert PDP Header
        await commonPDP.assertPDPHeader("HERCULES Diplomat Series LeatherSoft Chair with Clean Line Stitched Frame");
    //Assert PDP Price
        await commonPDP.assertPDPPrice("$337.09"); 
    //Click Review Stars    
        await commonPDP.clickReviewStars();
    //Click New Review
        await commonPDP.clickNewReview();
        await commonPDP.clickCloseReview();
    //Sort Reviews 
        await commonPDP.sortFilter();
    //remove popUp if shown
        await commonUtil.popUpClose();
        await commonCart.clickCloseAIChat();  
    //Review Pagination Right
        await commonPDP.rightArrowPagniation();
    //remove popUp if shown
        await commonUtil.popUpClose();
        await commonCart.clickCloseAIChat();  
        await commonPDP.assertReviewNumber1("9 – 38");
    //Review Pagination left
        await commonPDP.leftArrowPagniation();
    //remove popUp if shown
        await commonUtil.popUpClose();
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