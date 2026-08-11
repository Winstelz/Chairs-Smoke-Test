import { test as base } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { CommonPDP } from '../../src/pom/commonPages/commonPDP';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';

type PageObjects = {
  homePage: BestChiavariHomePage;
  commonPDP: CommonPDP;
  plp: BestChiavariPLP;

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

});
test('Best Chiavari PDP', async ({ commonPDP, homePage, plp }) => {
    //Navigate to Best Chiavari site    
        await homePage.gotoHomePage();
    //Navigate to PLP
        await homePage.clickBanquetChairs();
    //Click First Item
        await plp.clickBanquetFirstItem();
    //Click Description
        await commonPDP.clickDescription("Make an impressive presentation in your banquet hall when clients come to visit your facility with these ballroom chairs. Built for the commercial industry these popular crown back banquet chairs have been tested to hold up to 500 pounds. With a high seating capacity these stack chairs are perfect for the event rental business.");
    //Assert PDP Header
        await commonPDP.assertPDPHeader("HERCULES Series Crown Back Stacking Banquet Chair");
    //Assert PDP Price
        await commonPDP.assertPDPPrice("$34.99"); 
    //Click Review Stars    
        await commonPDP.clickReviewStars();
    //Click New Review
        await commonPDP.clickNewReview();
        await commonPDP.clickCloseReview();
    //Sort Reviews 
        await commonPDP.sortFilter();
    //remove popUp if shown
        await homePage.popUpClose();
    //Review Pagination Right
        await commonPDP.rightArrowPagniation();
        await commonPDP.assertReviewNumber1();
    //remove popUp if shown
        await homePage.popUpClose();
    //Review Pagination left
        await commonPDP.leftArrowPagniation();
        await commonPDP.assertReviewNumber2();
    //remove popUp if shown
        await homePage.popUpClose(); 
    //Qty Increase
        await commonPDP.qtyIncrease();  
    //Qty Decrease
        await commonPDP.qtyDecrease(); 
    //Add Item to Cart
        await commonPDP.clickAddToCart();

});