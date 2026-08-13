import { test as base } from '@playwright/test';
import { AdvantageHomePage }from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantagePLP }from '../../src/pom/advantageChairs/advantagePLP';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';

type PageObjects = {
  homePage: AdvantageHomePage;
  plp: AdvantagePLP;
  commonCart: CommonCart;
  inlineCart: AdvantageInlineCart;
  commonInlineCart: CommonInlineCart;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
 plp: async ({ page }, use) => {
    await use(new AdvantagePLP(page));
  },
  commonCart: async ({ page }, use) => {
    await use(new CommonCart(page));
  },
  inlineCart: async ({ page }, use) => {
    await use(new AdvantageInlineCart(page));
  },
  commonInlineCart: async ({ page }, use) => {
    await use(new CommonInlineCart(page));
  },
});


test('Advantage Cart WorkFlow', async ({ commonCart, commonInlineCart, homePage, inlineCart, page, plp }) => {
//Navigate to Advantage site    
    await homePage.gotoHomePage();
//Await for Pop Up and Close
    await homePage.popUpClose();    
//Navigate to PLP
    await homePage.clickShopAll();
 //Click First Item
    await plp.firstItem.click();
//Add Item to Cart
    await commonCart.clickAddToCartButton();
//Assert Product is in Cart
      await commonInlineCart.assertProduct(inlineCart.product, "Advantage Multipurpose Church Chairs - 18.5 in. Wide");
//Click View Cart Page
    await commonCart.clickViewCart();
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);          
//Increase QTY
    await commonCart.clickQtyIncrease(commonCart.qtyIncrease, commonCart.qtyInput);
//Decrease QTY
    await commonCart.clickQtyDecrease(commonCart.qtyDecrease, commonCart.qtyInput);
//Input QTY
    await commonCart.InputQtyInput(commonCart.qtyInput);
//You May Also Like Carousel Clicking
    await commonCart.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
    await commonCart.clickCalculateShipping();
//Close Teaser
    await commonCart.clickCloseTeaser();    
//Click Checkout
    await commonCart.clickCheckout();
//Click Checkout Logo
    await commonCart.clickCheckoutLogo("advantage", commonCart.advantageLogo);
//Click Cart Page
    await commonCart.goToCart("advantage");
//Delete Item from Inline Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and good to that page
    await commonCart.clickEmptyCartLink(commonCart.shopAllEmptyLink, '/collections/shop-all');

    
    
   





        


});