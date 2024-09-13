import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../pages/AdvantageHomePage';
import { AdvantagePLP }from '../../pages/AdvantagePLP';
import { AdvantagePDP } from '../../pages/AdvantagePDP';
import { AdvantageInlineCart } from '../../pages/AdvantageInlineCart';
import { AdvantageCart } from '../../pages/AdvantageCart';




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
    await PLP.ClickFirstItem();
//Add Item to Cart
       await PDP.AddtoCart();
 //Verify Product is in Cart
    await Inline.VerifyProduct();
//Click Cart Page
    await Cart.ClickCart();
        
//Increase QTY
    await Cart.IncreaseQTY();
//Decrease QTY
    await Cart.DecreaseQTY();
//Input QTY
    await Cart.InputQTY();
//You May Also Like Carousel Clicking
    await Cart.YouMayLike();
//Calculate Shipping
    await Cart.CalShipping();
//Click Checkout
    await Cart.ClickCheckout();
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