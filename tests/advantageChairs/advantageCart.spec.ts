import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP }from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantagePDP } from '../../src/pom/advantageChairs/advantagePDP';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { AdvantageCart } from '../../src/pom/advantageChairs/advantageCart';
import { CommonUtil } from '../../src/commonUtil';




test('Advantage Cart WorkFlow', async ({ page }) => {

    const homePage = new AdvantageHomePage(page)
    const plp = new AdvantagePLP(page)
    const pdp = new AdvantagePDP(page)
    const inlineCart = new AdvantageInlineCart(page)
    const cart = new AdvantageCart(page)
    const commonUtil = new CommonUtil(page)
//Navigate to Advantage site    
    await homePage.gotoHomePage();
//Await for Pop Up and Close
    await homePage.popUpClose();    
//Navigate to PLP
    await homePage.clickShopAll();
 //Click First Item
    await plp.firstItem.click();
//Add Item to Cart
    await pdp.clickAddToCart();
//Assert Product is in Cart
    await inlineCart.assertProduct();
//Click Cart Page
    await commonUtil.clickViewCart();
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);          
//Increase QTY
    await commonUtil.clickQtyIncrease
//Decrease QTY
    await commonUtil.clickQtyDecrease();
//Input QTY
    await commonUtil.InputQtyInput();
//You May Also Like Carousel Clicking
    await commonUtil.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
    await cart.clickCalculateShipping();
//Close Teaser
    await cart.closeTeaser();    
//Click Checkout
    await cart.clickCheckout();
//Click Checkout Logo
    await cart.clickCheckoutLogo();
//Click Cart Page
    await cart.goToCart();
//Delete Item from Inline Cart
    await cart.clickTrashIcon();
    await cart.assertEmptyCart();
//Assert can click empty link and good to that page
    await cart.clickShopAllEmptyLink();

    
    
   





        


});