import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';
import { AdvantagePLP } from '../../src/pom/AdvantageChairs/AdvantagePLP';
import { AdvantagePDP } from '../../src/pom/AdvantageChairs/AdvantagePDP';
import { AdvantageInlineCart } from '../../src/pom/AdvantageChairs/AdvantageInlineCart';
import { AdvantageCart } from '../../src/pom/AdvantageChairs/AdvantageCart';

type PageObjects = {
  homePage: AdvantageHomePage;
  plp: AdvantagePLP;
  pdp: AdvantagePDP;
  inlineCart: AdvantageInlineCart;
  cart: AdvantageCart;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  plp: async ({ page }, use) => {
    await use(new AdvantagePLP(page));
  },
  pdp: async ({ page }, use) => {
    await use(new AdvantagePDP(page));
  },
  inlineCart: async ({ page }, use) => {
    await use(new AdvantageInlineCart(page));
  },
  cart: async ({ page }, use) => {
    await use(new AdvantageCart(page));
  }
});

test('AdvantageInlineCart Flow', async ({ cart, homePage, plp, pdp, inlineCart }) => {
//Navigate to Home Page    
  await homePage.gotoHomePage();
//Click Shop All  
  await homePage.clickShopAll();
//Click First Item on PLP  
  await plp.firstItem.click();
//Click Add to Cart on PDP  
  await pdp.clickAddToCart();
//Assert Product in Cart
  await inlineCart.assertProduct();
//await cart popup
  await homePage.popUpClose(); 
//Increase and Decrease Quantity in Cart  
  await inlineCart.qtyIncrease();
  await inlineCart.qtyDecrease();
//Input Quantity in Cart  
  await inlineCart.qtyInput();
//Navigate through You May Liek Carousel  
  await inlineCart.youMayLikeCarousel();
//Calculate Shipping
  await cart.clickCalculateShipping();
//Checkout
  await cart.clickCheckout();
//Click Checkout Logo to Navigate Back to Home Page
  await cart.clickCheckoutLogo();
//Click Cart to Navigate Back to Cart Page
  await homePage.clickCartIcon();
//Assert on Cart Inline Page
  await inlineCart.cartHeader.isVisible();  
//Delete Item from Cart      
  await inlineCart.deleteItem();
//Click Empty Cart Link
  await inlineCart.clickInlineCartEmptyLink();
});
