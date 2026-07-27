import base, { test as baseTest, expect, type Page } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';
import { AdvantageInlineCart } from '../../src/pom/AdvantageChairs/AdvantageInlineCart';

type PageObjects = {
  homePage: AdvantageHomePage;
  inlineCart: AdvantageInlineCart;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
  inlineCart: async ({ page }, use) => {
    await use(new AdvantageInlineCart(page));
  },
});


test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('AdvantageHeaderIcons Search', async ({ homePage }) => {
  // Click Search Icon, type search, and submit
  await homePage.clickSearchIcon();
  await homePage.searchForItem('Cha');
  //Assert land on correct page
  await expect(homePage.page).toHaveURL(/.*search/);
});

test('AdvantageHeaderIcons Account', async ({ homePage }) => {
  // Click Account Icon and wait for the auth flow to start
  await homePage.clickAccountIcon();

  // Assert land on the Shopify auth page
  await expect(homePage.page).toHaveURL(/shopify\.com/);
});
test('AdvantageHeaderIcons Cart', async ({ homePage, inlineCart }) => {
    // Click Inline Cart
    await homePage.clickCartIcon();
    // Assert land on the Cart page
    await inlineCart.assertEmptyCartHeader();
    // CLick and Assert Empty Cart Link
    await inlineCart.clickInlineCartEmptyLink();
});
