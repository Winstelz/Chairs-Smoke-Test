import  base, { test as baseTest, expect, type Page } from '@playwright/test';
import { BestChiavariHomePage } from '../../src/pom/bestChiavariChairs/bestChiavariHomePage';

type PageObjects = {
  homePage: BestChiavariHomePage;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BestChiavariHomePage(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('Best Chiavari Navigation Click Flow', async ({ homePage }) => {
//Click Logo and assert on homepage
    await homePage.clickLogo();
//Click Chiavari Chairs Menu
    await homePage.clickChiavariChairs();
//Click Tables Menu
    await homePage.clickTables();
//Click Folding Chairs Menu
    await homePage.clickFoldingChairs();
//Click Cross Back Chairs Menu
    await homePage.clickCrossBackChairs();
//Click Banquet Chairs Menu
    await homePage.clickBanquetChairs();
//Click Ghost Chairs Menu
    await homePage.clickGhostChairs();
//Click Dollies & Carts Menu
    await homePage.clickDolliesCarts();    
    
});
test('Best Chiavari Navigation Hover Flow', async ({ homePage }) => {
//Hover Chiavari Chairs Menu & Click Wood Chiavari Chairs
    await homePage.hoverChiavariChairs();
//Hover Tables & Click Wood Folding Tables
    await homePage.hoverTables();
//Hover Folding Chairs & Click Resin Folding Chairs
    await homePage.hoverFoldingChairs();
});