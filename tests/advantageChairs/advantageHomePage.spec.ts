import { test as base, expect } from '@playwright/test';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';
import { CommonInlineCart } from '../../src/pom/commonPages/commonInlineCart';
import { CommonCart } from '../../src/pom/commonPages/commonCart';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';

type PageObjects = {
  commonHomePage: CommonHomePage;
  commonCart: CommonCart;
  commonInlineCart: CommonInlineCart;
  homePage: AdvantageHomePage

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  commonHomePage: async ({ page }, use) => {
    await use(new CommonHomePage(page));
  },
  commonInlineCart: async ({ page }, use) => {
    await use(new CommonInlineCart(page));
  },
  commonCart: async ({ page }, use) => {
    await use(new CommonCart(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});


test('AnnoucementBar Flow', async ({ commonHomePage, homePage }) => {
  // Click through the Bar
  await commonHomePage.clickBanner(homePage.bannerContainer);
});
test('Advantage Header Icons Search', async ({ commonHomePage, homePage }) => {
  // Click Search Icon, type search, and submit
  await commonHomePage.clickSearchIcon();
  await commonHomePage.searchForItem('Cha', 'advantage');
  //Assert land on correct page
  await expect(homePage.page).toHaveURL(/.*search/);
});

test('Advantage Header Icons Account', async ({ commonHomePage, homePage }) => {
  // Click Account Icon and wait for the auth flow to start
  await commonHomePage.clickAccountIcon();

  // Assert land on the Shopify auth page
  await expect(homePage.page).toHaveURL(/shopify\.com/);
});
test('Advantage Header Icons Cart', async ({ commonHomePage, commonInlineCart, commonCart }) => {
    // Click Inline Cart
    await commonHomePage.clickCartIcon();
    // Assert land on the Cart page
    await commonInlineCart.assertEmptyCartHeader();
    // Click and Assert Empty Cart Link
    await commonCart.clickEmptyCartLink(commonCart.shopAllEmptyLink, 'collections/shop-all');
});