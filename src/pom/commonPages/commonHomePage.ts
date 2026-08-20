import { expect, type Locator, type Page } from '@playwright/test';
import { STORE_URLS } from '../../config/urls';

export class CommonHomePage {
    readonly page: Page;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly accountIcon: Locator;
    readonly cartIcon: Locator;
    

constructor(page: any) {
    this.page = page;
    this.rightArrow = page.locator("//div[@aria-label='Next slide']//span[1]");
    this.leftArrow = page.locator("//div[@aria-label='Previous slide']//span[1]");
    this.searchIcon = page.getByRole('button', { name: 'search' });
    this.searchInput = page.locator("//input[@id='autocomplete-0-input']");
    this.accountIcon = page.getByRole('link', { name: 'account' });
    this.cartIcon = page.getByRole('link', { name: 'cart', exact: true });

}
async clickBanner (container: Locator) {
    console.log({message: `Clicking Banner Arrows...`});
    const activeSlide = container.locator('.swiper-slide-active');
   // Grab the active slide's index before clicking
  const getActiveIndex = async () => {
    return await activeSlide.getAttribute('data-swiper-slide-index');
  };

  const index1 = await getActiveIndex();

  await this.rightArrow.click();
  await this.page.waitForTimeout(2000);
  const index2 = await getActiveIndex();
  expect(index2).not.toBe(index1); // confirms it moved forward

  await this.rightArrow.click();
  await this.page.waitForTimeout(2000);
  const index3 = await getActiveIndex();
  expect(index3).not.toBe(index2);

  await this.leftArrow.click();
  await this.page.waitForTimeout(2000);
  const index4 = await getActiveIndex();
  expect(index4).toBe(index2); // back to slide 2

  await this.leftArrow.click();
  await this.page.waitForTimeout(2000);
  const index5 = await getActiveIndex();
  expect(index5).toBe(index1); // back to start

  await this.rightArrow.click();
  await this.page.waitForTimeout(2000);
}


async clickSearchIcon() {
    console.log({ message: `Clicking Search Icon....`});
    await this.searchIcon.click();
    await this.page.waitForLoadState(`networkidle`);
}

async searchForItem(item: string, url: keyof typeof STORE_URLS) {
    console.log({ message: `Searching for item: ${item}....`});
    await this.searchInput.fill(item);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('load');
    expect(this.page.url()).toContain(STORE_URLS[url] + '/search');
    await this.page.waitForTimeout(5000);
    }

async clickAccountIcon() {
    console.log({ message: `Clicking Account Icon....`});
    await this.accountIcon.click();
    await this.page.waitForURL(/shopify\.com/);
    await this.page.waitForTimeout(1000);
}

async clickCartIcon() {
    console.log({ message: `Clicking Cart Icon....`});
    await this.cartIcon.click();
    await this.page.waitForTimeout(1000);
}
}
