import  base, { test as baseTest, expect, type Page } from '@playwright/test';
import { BizChairsHomePage } from '../../src/pom/bizChairs/bizChairsHomePage';

type PageObjects = {
  homePage: BizChairsHomePage;

};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new BizChairsHomePage(page));
  },
});

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
});

test('Biz Chairs Navigation Click Flow', async ({ homePage }) => {
//Click Logo and assert on homepage
    await homePage.clickLogo();
//Click Office Menu
    await homePage.clickOffice();
//Click Folding Menu
    await homePage.clickFolding();
//Click Event Menu
    await homePage.clickEvent();
//Click Restaurant Menu
    await homePage.clickRestaurant();
//Click Church Menu
    await homePage.clickChurch();
//Click Classroom Menu
    await homePage.clickClassroom();
//Click Residential Menu
    await homePage.clickResidential();    
});

test('Biz Chairs Navigation Hover Flow', async ({ homePage }) => {
//Hover Biz Office Menu & Click Executive Office Chairs
    await homePage.hoverOffice();
//Hover Folding & Click Resin Folding Chairs
    await homePage.hoverFolding();
//Hover Event & Click Folding Chairs
    await homePage.hoverEvent();
//Hover Restaurant & Click Indoor Dining Chairs
    await homePage.hoverRestaurant();
//Hover Church & Click 18.5 Church Chairs
    await homePage.hoverChurch();
//Hover Classroom & Click Student Desks
    await homePage.hoverClassroom();
//Hover Residential & Click Living Room
    await homePage.hoverResidential();
});