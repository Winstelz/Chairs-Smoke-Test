import { test, expect } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';
import { CommonUtil } from '../../src/commonUtil';
import { BestChiavariInlineCart } from '../../src/pom/bestChiavariChairs/bestChiavariInLineCart';


test('BestChiavari Cart Flow', async ({ page }) => {
    const homePage = new BestChiavariHomePage(page);
    const plp = new BestChiavariPLP(page);
    const commonUtil = new CommonUtil(page);
    const inlineCart = new BestChiavariInlineCart(page);

//Navigate to Best Chiavari site    
    await homePage.gotoHomePage();
//Await for Pop Up and Close
    //await homePage.popUpClose(); 
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
//Close Teaser
    await commonUtil.clickCloseTeaser();         
//Increase QTY
    await commonUtil.clickQtyIncrease();
//Decrease QTY
    await commonUtil.clickQtyDecrease();
//Input QTY
    await commonUtil.InputQtyInput();
//Await for Pop Up and Close
    await homePage.popUpClose();     
//You May Also Like Carousel Clicking
    await commonUtil.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
    await commonUtil.clickCalculateShipping();
//Close Teaser
    //await commonUtil.clickCloseTeaser();    
//Click Checkout
    await commonUtil.clickCheckout();
//Click Checkout Logo
    await commonUtil.clickCheckoutLogo('bestChiavari');
//Click Cart Page
    await commonUtil.goToCart('bestChiavari');
//Delete Item from Inline Cart
    await commonUtil.clickTrashIcon();
    await commonUtil.assertEmptyCart();
//Assert can click empty link and good to that page
    await commonUtil.clickEmptyCartLink(commonUtil.shopAllTables, 'collections/banquet-cocktail-and-dining-tables');
});