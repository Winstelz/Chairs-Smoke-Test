import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../src/pom/AdvantageChairs/AdvantageHomePage';
import { AdvantagePLP }from '../../src/pom/AdvantageChairs/AdvantagePLP';
import { AdvantagePDP } from '../../src/pom/AdvantageChairs/AdvantagePDP';
import { AdvantageInlineCart } from '../../src/pom/AdvantageChairs/AdvantageInlineCart';
import { AdvantageCart } from '../../src/pom/AdvantageChairs/AdvantageCart';




test('Advantage Cart WorkFlow', async ({ page }) => {

    const homePage = new AdvantageHomePage(page)
    const plp = new AdvantagePLP(page)
    const pdp = new AdvantagePDP(page)
    const inlineCart = new AdvantageInlineCart(page)
    const cart = new AdvantageCart(page)
//Navigate to Advantage site    
    await homePage.gotoHomePage();
//Await for Pop Up and Close
    await homePage.popUpClose();    
//Navigate to PLP
    await homePage.clickShopAll();
 //Click First Item
    await plp.firstItem.click();
//Add Item to Cart
    await pdp.AddtoCart();
//Verify Product is in Cart
    await inlineCart.assertProduct();
//Click Cart Page
    await cart.clickCart(); 
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);          
//Increase QTY
    await cart.increaseQTY();
//Decrease QTY
    await cart.decreaseQTY();
//Input QTY
    await cart.inputQTY();
//You May Also Like Carousel Clicking
    await cart.youMayLike();
//Calculate Shipping
    await cart.calculateShippingOrder();
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