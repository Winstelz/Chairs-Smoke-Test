import { test as base} from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';
import { BizChairsPLP } from '../../src/pom/bizChairs/bizChairsPLP';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { BizChairsInlineCart } from '../../src/pom/bizChairs/bizChairsInlineCart';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';
import { CommonUtil } from '../../src/pom/commonUtil';

type PageObjects = {
  homePage: BizChairsHomePage;
  plp: BizChairsPLP;
  commonCart: CommonCart;
  inlineCart: BizChairsInlineCart;
  commonInlineCart: CommonInlineCart;
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
  inlineCart: async ({ page }, use) => {
    await use(new BizChairsInlineCart(page));
  },
  commonInlineCart: async ({ page }, use) => {
    await use(new CommonInlineCart(page));
  },
  commonUtil: async ({ page }, use) => {
    await use(new CommonUtil(page));
  },
});

test('Biz Chairs Cart Flow', async ({ commonCart, commonInlineCart, commonUtil, homePage, inlineCart, page, plp }) => {
//Navigate to Biz Chairs site    
    await homePage.gotoHomePage(); 
//Navigate to PLP
    await homePage.clickOffice();
//Click First Item
    await plp.clickOfficeFirstItem();
//Add Item to Cart
    await commonCart.clickAddToCartButton();
//Assert Product is in Cart
    await commonInlineCart.assertProduct(inlineCart.product, "HERCULES Diplomat Series LeatherSoft Chair with Clean Line Stitched Frame");
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
    await commonCart.clickCheckoutLogo('biz', commonCart.bizLogo);
//Click Cart Page
    await commonCart.goToCart('biz');
//Delete Item from Cart
    await commonCart.clickTrashIcon();
    await commonCart.assertEmptyCart();
//Assert can click empty link and go to that page
    await commonCart.clickEmptyCartLink(commonCart.residentialButton, 'collections/residential');
});