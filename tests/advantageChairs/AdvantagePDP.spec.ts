import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP } from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantagePDP } from '../../src/pom/advantageChairs/advantagePDP';


test('AdvantagePDP Flow', async ({ page }) => {

    const homePage = new AdvantageHomePage(page)
    const plp = new AdvantagePLP(page)
    const pdp = new AdvantagePDP(page)
    //Navigate to Advantage site    
        await homePage.gotoHomePage();
    //Navigate to PLP
        await homePage.clickShopAll();
    //Click First Item
        await plp.firstItem.click();
    //Click Description
        await pdp.clickDescription();
    // Verify PDP Header
        await pdp.assertPDPHeader();
    // Verify PDP Price
        await pdp.assertPDPPrice();  
    //Click Review Stars    
        await pdp.clickReviewStars();
    //Click New Review
        await pdp.clickNewReview();
        await pdp.clickCloseReview();
    //Sort Reviews 
        await pdp.sortFilter();
    //Review Pagination Rigth
        await pdp.rightArrowPagniation();
        await pdp.assertReviewNumber1();
    //Review Pagination left
        await pdp.leftArrowPagniation();
        await pdp.assertReviewNumber2();
    //remove popUp if shown
        await homePage.popUpClose();    
    //Qty Increase
        await pdp.qtyIncrease();  
    //Qty Decrease
        await pdp.qtyDecrease();       
    //Add Item to Cart
        await pdp.clickAddToCart();

});