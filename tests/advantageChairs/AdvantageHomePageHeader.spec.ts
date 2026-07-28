import  base, { test as baseTest, expect, type Page } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';

type PageObjects = {
  homePage: AdvantageHomePage;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('AdvantageHomePageHeader Click Flow', async ({ homePage }) => {
//Click Logo and assert on homepage
    await homePage.clickLogo();
//Click Shop All Menu
    await homePage.clickShopAll();
//Click Church Chairs Menu
    await homePage.clickChurchChairs();
//Click Banquet Chairs Menu
    await homePage.clickBanquetChairs();
//Click Folding & Event Menu
    await homePage.clickFoldEvent();
//Click Classroom Menu
    await homePage.clickClassroom();
//Click Office & Reception Menu
    await homePage.clickOfficeReception();
    
});
test('AdvantageHomePageHeader Hover Flow', async ({ homePage }) => {
//Hover Church Chairs Menu & Click Church & Stack Chairs Dollies
    await homePage.hoverChurchChairs();
//Hover Folding & Event Menu & Click Resin Folding Chairs
    await homePage.hoverFoldEvent();
//Hover Classroom Menu & Click Activity Set
    await homePage.hoverClassroom();
//Hover Office Menu & Click Desks
    await homePage.hoverOffice();
});