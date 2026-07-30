import { test, expect } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';
import { CommonUtil } from '../../src/commonUtil';
import { BestChiavariInlineCart } from '../../src/pom/bestChiavariChairs/bestChiavariInLineCart';





test('BestChiavariCart', async ({ page }) => {
    const homePage = new BestChiavariHomePage(page);
    const plp = new BestChiavariPLP(page);
    const commonUtil = new CommonUtil(page);
    const inlineCart = new BestChiavariInlineCart(page);

//Navigate to Best Chiavari site    
    await homePage.gotoHomePage();
//Await for Pop Up and Close
    await homePage.popUpClose(); 
//Navigate to PLP
    await homePage.clickCrossBackChairs();
//Click First Item
    await plp.clickCrossBackFirstItem();
//Add Item to Cart
    await commonUtil.clickAddToCartButton();
//Assert Product is in Cart
    await inlineCart.assertProduct();
//Click Cart Page
    await commonUtil.clickViewCart();
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);          
//Increase QTY
    await commonUtil.clickQtyIncrease();
//Decrease QTY
    await commonUtil.clickQtyDecrease();
//Input QTY
    await commonUtil.InputQtyInput();
//You May Also Like Carousel Clicking
    await commonUtil.clickThroughYouMayAlsoLikeArrows();
/*//Calculate Shipping   WORKIng ON UPDATING WITH COMMONUTIL
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
    await cart.clickShopAllEmptyLink();*/
});