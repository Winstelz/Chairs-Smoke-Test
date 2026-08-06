import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP } from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantagePDP } from '../../src/pom/advantageChairs/advantagePDP';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';

type PageObjects = {
  homePage: AdvantageHomePage;
  plp: AdvantagePLP;
  pdp: AdvantagePDP;
  inlineCart: AdvantageInlineCart;
  commonCart: CommonCart;
  commonHomePage: CommonHomePage;
  commonInlineCart: CommonInlineCart;
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
  commonCart: async ({ page }, use) => {
    await use(new CommonCart(page));
  },
  commonHomePage: async ({ page }, use) => {
    await use(new CommonHomePage(page));
  },
  commonInlineCart: async ({ page }, use) => {
    await use(new CommonInlineCart(page));
  },
});

test('Advantage InlineCart Flow', async ({ commonCart, commonHomePage, commonInlineCart, homePage, plp, pdp, inlineCart }) => {
//Navigate to Home Page    
  await homePage.gotoHomePage();
//Click Shop All  
  await homePage.clickShopAll();
//Click First Item on PLP  
  await plp.firstItem.click();
//Click Add to Cart on PDP  
  await pdp.clickAddToCart();
//Assert Product in Cart
  await commonInlineCart.assertProduct(inlineCart.product, "Advantage Multipurpose Church Chairs - 18.5 in. Wide");
//await cart popup
  await homePage.popUpClose(); 
//Increase and Decrease Quantity in Cart  
  await commonCart.clickQtyIncrease(commonInlineCart.qtyIncrease);
  await commonCart.clickQtyDecrease(commonInlineCart.qtyDecrease);
//Input Quantity in Cart  
  await commonCart.InputQtyInput(commonInlineCart.qty);
//Navigate through You May Liek Carousel  
  await commonCart.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
  await commonCart.clickCalculateShipping();
//Checkout
  await commonCart.clickCheckout();
//Click Checkout Logo to Navigate Back to Home Page
  await commonCart.clickCheckoutLogo('advantage', commonCart.advantageLogo);
//Navigate to Inline Cart
    await commonHomePage.clickCartIcon();
//Delete Item from Inline Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and go to that page
    await commonCart.clickEmptyCartLink(commonCart.shopAllEmptyLink, 'collections/banquet-cocktail-and-dining-tables');

});
