import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../pages/AdvantageHomePage';
import { AdvantagePLP }from '../../pages/AdvantagePLP';
import { AdvantagePDP } from '../../pages/AdvantagePDP';
import { AdvantageInlineCart } from '../../pages/AdvantageInlineCart';




test('AdvantageInlineCart', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
    const PLP = new AdvantagePLP(page)
    const PDP = new AdvantagePDP(page)
    const Inline = new AdvantageInlineCart(page)
    //Navigate to Advantage site   
        await HomePage.gotoHomePage(); 
    //Navigate to PLP
        await HomePage.ClickShopAll();
    //Click First Item
        await PLP.ClickFirstItem();
    //Add Item to Cart
        await PDP.AddtoCart()
    //Verify Product is in Cart
        await Inline.VerifyProduct();
    //Increase QTY
        await Inline.QTYIncrease();
    //Decrease QTY
        await Inline.QTYDecrease();
    //Input QTY
        await Inline.QTYInput();
    //You May Also Like Carousel Clicking
       await Inline.YouMayLikeCarousel();
    //Calculate Shipping
        await Inline.CalShipping();
    //Click Checkout
        await Inline.Checkout();
    //Delete Item from Inline Cart
        await Inline.DeleteItem();


});