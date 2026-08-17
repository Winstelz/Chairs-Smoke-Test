import { test as base, expect } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';
import { BestChiavariInlineCart } from '../../src/pom/bestChiavariChairs/bestChiavariInLineCart';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: BestChiavariHomePage;
  plp: BestChiavariPLP;
  commonCart: CommonCart;
  commonInlineCart: CommonInlineCart;
  inlineCart: BestChiavariInlineCart;
  commonHomePage: CommonHomePage;
  commonUtil: CommonUtil;
};
export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BestChiavariHomePage(page));
  },
    plp: async ({ page }, use) => {
      await use(new BestChiavariPLP(page));
    },
    commonCart: async ({ page }, use) => {
        await use(new CommonCart(page));
    },
    commonInlineCart: async ({ page }, use) => {
        await use(new CommonInlineCart(page));
    },
    inlineCart: async ({ page }, use) => {
        await use(new BestChiavariInlineCart(page));
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

test('BestChiavari InlineCart', async ({ commonUtil, inlineCart, commonCart, commonHomePage, commonInlineCart, homePage, plp }) => {
//Navigate to PLP
    await homePage.clickCrossBackChairs();
//Click First Item
    await plp.clickCrossBackFirstItem();
//Await for Pop Up and Close
    await commonUtil.popUpClose();

//Add Item to Cart
    await commonCart.clickAddToCartButton();
//Assert Product is in Cart
    await commonInlineCart.assertProduct(inlineCart.product, "Advantage X-Back Chair");
//Increase QTY
    await commonCart.clickQtyIncrease(commonInlineCart.qtyIncrease, commonInlineCart.qty);
//Decrease QTY
    await commonCart.clickQtyDecrease(commonInlineCart.qtyDecrease, commonInlineCart.qty);
//Input QTY
    await commonCart.InputQtyInput(commonInlineCart.qty);
//Await for Pop Up and Close
    await commonUtil.popUpClose(); 
//Calculate Shipping
    await commonCart.clickCalculateShipping();
//Click Checkout
    await commonCart.clickCheckout();
//Click Checkout Logo
    await commonCart.clickCheckoutLogo('bestChiavari', commonCart.chiavariLogo);
//Navigate to Inline Cart
    await commonHomePage.clickCartIcon();
//Delete Item from Inline Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and go to that page
    await commonCart.clickEmptyCartLink(commonCart.shopAllTables, 'collections/banquet-cocktail-and-dining-tables');

});