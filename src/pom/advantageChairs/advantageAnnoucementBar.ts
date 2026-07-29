import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageAnnoucementBar {
    readonly page: Page;
    readonly bannerContainer: Locator;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly activeSlide: Locator;
    

constructor(page: any) {
    this.page = page;
    this.bannerContainer = page.locator('#shopify-section-sections--23479412195618__preheader')
    this.rightArrow = page.locator("//div[@aria-label='Next slide']//span[1]");
    this.leftArrow = page.locator("//div[@aria-label='Previous slide']//span[1]");
    this.activeSlide = this.bannerContainer.locator('.swiper-slide-active');

}
async clickBanner () {
    console.log({message: `Clicking Banner Arrows...`});

   // Grab the active slide's index before clicking
  const getActiveIndex = async () => {
    return await this.activeSlide.getAttribute('data-swiper-slide-index');
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
}

