import { test as base } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP } from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: AdvantageHomePage;
  plp: AdvantagePLP;
  inlineCart: AdvantageInlineCart;
  commonCart: CommonCart;
  commonHomePage: CommonHomePage;
  commonInlineCart: CommonInlineCart;
  commonUtil: CommonUtil;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  plp: async ({ page }, use) => {
    await use(new AdvantagePLP(page));
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
  commonUtil: async ({ page }, use) => {
    await use(new CommonUtil(page));
  },
});

test('Advantage InlineCart Flow', async ({ commonCart, commonHomePage, commonInlineCart, commonUtil, homePage, plp, inlineCart }) => {
//Navigate to Home Page    
  await homePage.gotoHomePage();
//Click Shop All  
  await homePage.clickShopAll();
//Click First Item on PLP  
  await plp.firstItem.click();
//Add Item to Cart
  await commonCart.clickAddToCartButton();
//Assert Product in Cart
  await commonInlineCart.assertProduct(inlineCart.product, "Advantage Multipurpose Church Chairs - 18.5 in. Wide");
//await cart popup
  await commonUtil.popUpClose(); 
//Increase and Decrease Quantity in Cart  
  await commonCart.clickQtyIncrease(commonInlineCart.qtyIncrease, commonInlineCart.qty);
  await commonCart.clickQtyDecrease(commonInlineCart.qtyDecrease, commonInlineCart.qty);
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
