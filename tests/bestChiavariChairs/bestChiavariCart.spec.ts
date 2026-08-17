import { test as base} from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';
import { BestChiavariPLP } from '../../src/pom/bestChiavariChairs/bestChiavariPLP';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { BestChiavariInlineCart } from '../../src/pom/bestChiavariChairs/bestChiavariInLineCart';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: BestChiavariHomePage;
  plp: BestChiavariPLP;
  commonCart: CommonCart;
  inlineCart: BestChiavariInlineCart;
  commonInlineCart: CommonInlineCart;
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
  inlineCart: async ({ page }, use) => {
    await use(new BestChiavariInlineCart(page));
  },
  commonInlineCart: async ({ page }, use) => {
    await use(new CommonInlineCart(page));
  },
  commonUtil: async ({ page }, use) => {
    await use(new CommonUtil(page));
  },
});

//adding for change
test('BestChiavari Cart Flow', async ({ commonCart, commonInlineCart, commonUtil, homePage, inlineCart, page, plp }) => {
//Navigate to Best Chiavari site    
    await homePage.gotoHomePage(); 
//Navigate to PLP
    await homePage.clickCrossBackChairs();
//Click First Item
    await plp.clickCrossBackFirstItem();
//Add Item to Cart
    await commonCart.clickAddToCartButton();
//Assert Product is in Cart
    await commonInlineCart.assertProduct(inlineCart.product, "Advantage X-Back Chair");
//Click Cart Page
    await commonCart.clickViewCart();
//click anywhere to remove nav bar from blocking the QTY buttons
    await page.mouse.click(0, 0);   
//Await for Pop Up and Close
    await commonUtil.popUpClose();
    await commonCart.clickCloseTeaser();        
//Increase QTY
    await commonCart.clickQtyIncrease(commonCart.qtyIncrease, commonCart.qtyInput);
//Decrease QTY
    await commonCart.clickQtyDecrease(commonCart.qtyDecrease, commonCart.qtyInput);
//Input QTY
    await commonCart.InputQtyInput(commonCart.qtyInput);
//Await for Pop Up and Close
    await commonUtil.popUpClose();
    await commonCart.clickCloseTeaser();     
//You May Also Like Carousel Clicking
    await commonCart.clickThroughYouMayAlsoLikeArrows();
//Calculate Shipping
    await commonCart.clickCalculateShipping(); 
//Click Checkout
    await commonCart.clickCheckout();
//Click Checkout Logo
    await commonCart.clickCheckoutLogo('bestChiavari', commonCart.chiavariLogo);
//Click Cart Page
    await commonCart.goToCart('bestChiavari');
//Delete Item from Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and go to that page
    await commonCart.clickEmptyCartLink(commonCart.shopAllTables, 'collections/banquet-cocktail-and-dining-tables');
});