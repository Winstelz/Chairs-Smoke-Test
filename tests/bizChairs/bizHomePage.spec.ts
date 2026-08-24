import { test as base, expect } from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';

type PageObjects = {
  homePage: BizChairsHomePage;
  commonHomePage: CommonHomePage;
  commonCart: CommonCart;
  commonInlineCart: CommonInlineCart;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BizChairsHomePage(page));
  },
  commonHomePage: async ({ page }, use) => {
    await use(new CommonHomePage(page));
  },
   commonCart: async ({ page }, use) => {
    await use(new CommonCart(page));
  },
   commonInlineCart: async ({ page }, use) => {
    await use(new CommonInlineCart(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('AnnoucementBar Flow', async ({ commonHomePage, homePage }) => {
//Click through the Annoucement Bar
    await commonHomePage.clickBanner(homePage.bannerContainer);
});

test('Biz Icons Search', async ({ commonHomePage, homePage }) => {
  // Click Search Icon, type search, and submit
  await commonHomePage.clickSearchIcon();
  await commonHomePage.searchForItem('Cha', 'biz');
  //Assert land on correct page
  await expect(homePage.page).toHaveURL(/.*search/);
});

test('Biz Icons Account', async ({ commonHomePage, homePage }) => {
  // Click Account Icon and wait for the auth flow to start
  await commonHomePage.clickAccountIcon();
  // Assert land on the Shopify auth page
  await expect(homePage.page).toHaveURL(/shopify\.com/);
});

test('Biz Icons Cart', async ({ commonCart, commonHomePage, commonInlineCart }) => {
    // Click Inline Cart
    await commonHomePage.clickCartIcon();
    // Assert land on the Cart page
    await commonInlineCart.assertEmptyCartHeader();
    // CLick and Assert Empty Cart Link
    await commonCart.clickEmptyCartLink(commonCart.residentialButton, 'collections/residential');
});