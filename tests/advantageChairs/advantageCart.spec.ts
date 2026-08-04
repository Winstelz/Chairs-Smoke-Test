import { test } from '@playwright/test';
import { AdvantageHomePage }from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP }from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantagePDP } from '../../src/pom/advantageChairs/advantagePDP';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { CommonCart } from '../../src/pom/commonPages/commonCart';




test('Advantage Cart WorkFlow', async ({ page }) => {

    const homePage = new AdvantageHomePage(page);
    const plp = new AdvantagePLP(page);
    const pdp = new AdvantagePDP(page);
    const inlineCart = new AdvantageInlineCart(page);
    const commonCart = new CommonCart(page);
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
//Click View Cart Page
    await commonCart.clickViewCart();
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);          
//Increase QTY
    await commonCart.clickQtyIncrease();
//Decrease QTY
    await commonCart.clickQtyDecrease();
//Input QTY
    await commonCart.InputQtyInput;
//You May Also Like Carousel Clicking
    await commonCart.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
    await commonCart.clickCalculateShipping();
//Close Teaser
    await commonCart.clickCloseTeaser();    
//Click Checkout
    await commonCart.clickCheckout();
//Click Checkout Logo
    await commonCart.clickCheckoutLogo("advantage", commonCart.advantageLogo);
//Click Cart Page
    await commonCart.goToCart("advantage");
//Delete Item from Inline Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and good to that page
    await commonCart.clickEmptyCartLink(commonCart.shopAllEmptyLink, '/collections/shop-all');

    
    
   





        


});