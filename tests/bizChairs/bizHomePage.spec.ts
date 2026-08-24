import { test as base, expect } from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';
import { CommonHomePage } from '../../src/pom/commonPages/commonHomePage';

type PageObjects = {
  homePage: BizChairsHomePage;
  commonHomePage: CommonHomePage

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BizChairsHomePage(page));
  },
  commonHomePage: async ({ page }, use) => {
    await use(new CommonHomePage(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('AnnoucementBar Flow', async ({ commonHomePage, homePage }) => {
//Click through the Annoucement Bar
    await commonHomePage.clickBanner(homePage.bannerContainer);
});