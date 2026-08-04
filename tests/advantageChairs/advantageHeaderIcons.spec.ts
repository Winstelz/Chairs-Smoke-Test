import base, { test as baseTest, expect, type Page } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/advantageChairs/advantageHomePage';
import { AdvantageInlineCart } from '../../src/pom/advantageChairs/advantageInlineCart';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';

type PageObjects = {
  homePage: AdvantageHomePage;
  inlineCart: AdvantageInlineCart;
  commonHomePage: CommonHomePage;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  inlineCart: async ({ page }, use) => {
    await use(new AdvantageInlineCart(page));
  },
  commonHomePage: async ({ page }, use) => {
    await use(new CommonHomePage(page));
  }
});


test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('AdvantageHeaderIcons Search', async ({ commonHomePage, homePage }) => {
  // Click Search Icon, type search, and submit
  await commonHomePage.clickSearchIcon('advantage');
  await commonHomePage.searchForItem('Cha');
  //Assert land on correct page
  await expect(homePage.page).toHaveURL(/.*search/);
});

test('AdvantageHeaderIcons Account', async ({ commonHomePage, homePage }) => {
  // Click Account Icon and wait for the auth flow to start
  await commonHomePage.clickAccountIcon();

  // Assert land on the Shopify auth page
  await expect(homePage.page).toHaveURL(/shopify\.com/);
});
test('AdvantageHeaderIcons Cart', async ({ commonHomePage, inlineCart }) => {
    // Click Inline Cart
    await commonHomePage.clickCartIcon();
    // Assert land on the Cart page
    await inlineCart.assertEmptyCartHeader();
    // CLick and Assert Empty Cart Link
    await inlineCart.clickInlineCartEmptyLink();
});
