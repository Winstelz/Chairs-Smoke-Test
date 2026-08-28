import { test as base, expect } from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';
import { BizChairsPLP } from '../../src/pom/bizChairs/bizChairsPLP';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';
import { BizChairsInlineCart } from '../../src/pom/bizChairs/bizChairsInlineCart';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: BizChairsHomePage;
  plp: BizChairsPLP;
  commonCart: CommonCart;
  commonInlineCart: CommonInlineCart;
  inlineCart: BizChairsInlineCart;
  commonHomePage: CommonHomePage;
  commonUtil: CommonUtil;
};
export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BizChairsHomePage(page));
  },
    plp: async ({ page }, use) => {
      await use(new BizChairsPLP(page));
    },
    commonCart: async ({ page }, use) => {
        await use(new CommonCart(page));
    },
    commonInlineCart: async ({ page }, use) => {
        await use(new CommonInlineCart(page));
    },
    inlineCart: async ({ page }, use) => {
        await use(new BizChairsInlineCart(page));
    },
    commonHomePage: async ({ page }, use) => {
        await use(new CommonHomePage(page));
    },
    commonUtil: async ({ page }, use) => {
        await use(new CommonUtil(page));
    },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('Biz Chairs InlineCart', async ({ commonUtil, inlineCart, commonCart, commonHomePage, commonInlineCart, homePage, plp }) => {
//Navigate to PLP
    await homePage.clickOffice();
//Click First Item
    await plp.clickOfficeFirstItem();
//Await for Pop Up and Close
    await commonUtil.popUpClose();
    await commonCart.clickCloseAIChat(); 
//Add Item to Cart
    await commonCart.clickAddToCartButton();
//Assert Product is in Cart
    await commonInlineCart.assertProduct(inlineCart.product, "HERCULES Diplomat Series LeatherSoft Chair with Clean Line Stitched Frame");
//Increase QTY
    await commonCart.clickQtyIncrease(commonInlineCart.qtyIncrease, commonInlineCart.qty);
//Decrease QTY
    await commonCart.clickQtyDecrease(commonInlineCart.qtyDecrease, commonInlineCart.qty);
//Input QTY
    await commonCart.InputQtyInput(commonInlineCart.qty);
//Await for Pop Up and Close
    await commonUtil.popUpClose();
    await commonCart.clickCloseAIChat();  
//Calculate Shipping
    await commonCart.clickCalculateShipping();
//Click Checkout
    await commonCart.clickCheckout();
//Click Checkout Logo
    await commonCart.clickCheckoutLogo('biz', commonCart.bizLogo);
//Await for Pop Up and Close
    await commonUtil.popUpClose();
    await commonCart.clickCloseAIChat(); 
//Navigate to Inline Cart
    await commonHomePage.clickCartIcon();
//Delete Item from Inline Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and go to that page
    await commonCart.clickEmptyCartLink(commonCart.residentialButton, 'collections/residential');
});