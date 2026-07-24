import base, { test as baseTest, expect, type Page } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';

type TestFixtures = {
  homePage: AdvantageHomePage;
};

const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    await use(new AdvantageHomePage(page));
  },
});

test('AdvantageHeaderIcons Search', async ({ homePage }) => {
  // Navigate to Advantage site
  await homePage.gotoHomePage();

  // Click Search Icon, type search, and submit
  await homePage.clickSearchIcon();
  await homePage.searchForItem('Cha');
  //Assert land on correct page
  await expect(homePage.page).toHaveURL(/.*search/);
});

test('AdvantageHeaderIcons Account', async ({ homePage }) => {
  // Navigate to Advantage site
  await homePage.gotoHomePage();

  // Click Account Icon and wait for the auth flow to start
  await homePage.clickAccountIcon();

  // Assert land on the Shopify auth page
  await expect(homePage.page).toHaveURL(/shopify\.com/);
});
/* Need to clean up like other scenarios above.....
test('AdvantageHeaderIcons Cart', async ({ page }) => {
    const homePage = new AdvantageHomePage(page);

    // Click Inline Cart
    const cart = page.locator("//body/div[@id='shopify-section-sections--21855799083298__header']/ra-header[@class='header flex items-center justify-center fixed w-full left-0 transition-all duration-300 z-10 flex-col max-md:py-4 border-b !border-grey-200']/div[@class='header__wrapper flex h-full flex-wrap justify-between md:justify-start w-full container max-md:!px-3']/div[@class='header__inner w-full justify-between items-center flex-col md:pt-5 max-md:!flex flex']/div[@class='flex items-center w-full max-md:justify-between']/div[@class='m-0 md:ml-auto']/div[@class='flex flex-row gap-6']/ul[@class='flex justify-center items-center h-full']/li[@class='header__action-item flex justify-center items-center h-full mr-4 last:mr-0 leading-[0] relative']/ra-cart-toggle/a[@title='cart']/span[1]//*[name()='svg']");
    await cart.click();
    const firstLink = page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
    expect(firstLink).toContainText('Church Chairs');
    await page.locator("//span[@class='ra-icon p-1 cursor-pointer']").click();
});
*/
