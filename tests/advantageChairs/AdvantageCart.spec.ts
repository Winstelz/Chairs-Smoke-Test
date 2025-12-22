import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../src/pom/AdvantageHomePage';
import { AdvantagePLP }from '../../src/pom/AdvantagePLP';
import { AdvantagePDP } from '../../src/pom/AdvantagePDP';
import { AdvantageInlineCart } from '../../src/pom/AdvantageInlineCart';
import { AdvantageCart } from '../../src/pom/AdvantageCart';




test('AdvantageCart', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
    const PLP = new AdvantagePLP(page)
    const PDP = new AdvantagePDP(page)
    const Inline = new AdvantageInlineCart(page)
    const Cart = new AdvantageCart(page)
//Navigate to Advantage site    
    await HomePage.gotoHomePage();
//Navigate to PLP
    await HomePage.ClickShopAll();
 //Click First Item
    await PLP.clickFirstItem();
//Add Item to Cart
       await PDP.AddtoCart();
 //Verify Product is in Cart
    await Inline.VerifyProduct();
//Click Cart Page
    await Cart.clickCart();
        
//Increase QTY
    await Cart.increaseQTY();
//Decrease QTY
    await Cart.decreaseQTY();
//Input QTY
    await Cart.inputQTY();
//You May Also Like Carousel Clicking
    await Cart.youMayLike();
//Calculate Shipping
    await Cart.calShipping();
//Click Checkout
    await Cart.clickCheckout();
//Click Cart Page
    await Cart.GotoCart();
//Delete Item from Inline Cart
    await page.locator("//button[@class='ra-button ra-icon-button ra-button--tertiary ra-icon-button--md hover:!border-primary-600 !border-primary-800 group !w-//*[name()='svg']").click();
//  const EmptyLink = await page.locator("//a[normalize-space()='Shop Chiavari Chairs']");
//  await EmptyLink.isVisible();
//  await EmptyLink.click();
//  await page.waitForLoadState();
//  expect(page.url()).toContain("/collections/chiavari-chairs");


    
    
   





        


});