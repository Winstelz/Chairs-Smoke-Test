import { test, expect } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { BestChiavariInlineCart } from '../../src/pom/bestChiavariChairs/bestChiavariInLineCart';


test('BestChiavari Cart Flow', async ({ page }) => {
    const homePage = new BestChiavariHomePage(page);
    const plp = new BestChiavariPLP(page);
    const commonCart = new CommonCart(page);
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
    await commonCart.clickAddToCartButton();
//Assert Product is in Cart
    await inlineCart.assertProduct();
//Click Cart Page
    await commonCart.clickViewCart();
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);   
//Close Teaser
    await commonCart.clickCloseTeaser();         
//Increase QTY
    await commonCart.clickQtyIncrease();
//Decrease QTY
    await commonCart.clickQtyDecrease();
//Input QTY
    await commonCart.InputQtyInput();
//Await for Pop Up and Close
    await homePage.popUpClose();     
//You May Also Like Carousel Clicking
    await commonCart.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
    await commonCart.clickCalculateShipping();
//Close Teaser
    //await commonUtil.clickCloseTeaser();    
//Click Checkout
    await commonCart.clickCheckout();
//Click Checkout Logo
    await commonCart.clickCheckoutLogo('bestChiavari');
//Click Cart Page
    await commonCart.goToCart('bestChiavari');
//Delete Item from Inline Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and good to that page
    await commonCart.clickEmptyCartLink(commonCart.shopAllTables, 'collections/banquet-cocktail-and-dining-tables');
});