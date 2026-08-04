import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP } from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantagePDP } from '../../src/pom/advantageChairs/advantagePDP';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { AdvantageCart } from '../../src/pom/advantageChairs/advantageCart';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';

type PageObjects = {
  homePage: AdvantageHomePage;
  plp: AdvantagePLP;
  pdp: AdvantagePDP;
  inlineCart: AdvantageInlineCart;
  cart: AdvantageCart;
  commonCart: CommonCart;
  commonHomePage: CommonHomePage;
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
  },
  commonCart: async ({ page }, use) => {
    await use(new CommonCart(page));
  },
  commonHomePage: async ({ page }, use) => {
    await use(new CommonHomePage(page));
  }
});

test('AdvantageInlineCart Flow', async ({ commonCart, commonHomePage, homePage, plp, pdp, inlineCart }) => {
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
  await commonCart.clickCalculateShipping();
//Checkout
  await commonCart.clickCheckout();
//Click Checkout Logo to Navigate Back to Home Page
  await commonCart.clickCheckoutLogo('advantage', commonCart.advantageLogo);
//Click Cart to Navigate Back to Cart Page
  await commonHomePage.clickCartIcon();
//Assert on Cart Inline Page
  await inlineCart.cartHeader.isVisible();  
//Delete Item from Cart      
  await inlineCart.deleteItem();
//Click Empty Cart Link
  await inlineCart.clickInlineCartEmptyLink();
});
