import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../pages/AdvantageHomePage';
import { AdvantagePLP }from '../../pages/AdvantagePLP';
import { AdvantagePDP } from '../../pages/AdvantagePDP';


test('AdvantagePDP', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
    const PLP = new AdvantagePLP(page)
    const PDP = new AdvantagePDP(page)
    //Navigate to Advantage site    
        await HomePage.gotoHomePage();
    //Navigate to PLP
        await HomePage.ClickShopAll();
    //Click First Item
        await PLP.ClickFirstItem();
    //Click Description
        await PDP.ClickDescription();
    // Verify PDP Header
        await PDP.VerifyPDPHeader();
    // Verify PDP Price
        await PDP.VerifyPDPPrice();  
    //Click Review Stars    
        await PDP.ClickReviewStars();
    //Click New Review
        await PDP.ClickNewReview();
        await PDP.ClickCloseReview();
    //Sort Reviews 
        await PDP.SortFilter();
    //Review Pagination Rigth
        await PDP.RightArrowPagniation();
        await PDP.ReviewNumber1();
    //Review Pagination left
        await PDP.LeftArrowPagniation();
        await PDP.ReviewNumber2();
    //Qty Increase
        await PDP.QTYIncrease();
        
    //Qty Decrease
        await PDP.QTYDecrease(); 
        
    //Add Item to Cart
        await PDP.AddtoCart();

});