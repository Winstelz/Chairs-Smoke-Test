import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageAnnoucementBar {
    readonly page: Page;
    readonly RightArrow: Locator;
    readonly LeftArrow: Locator;
    

constructor(page) {
    this.page = page;
    this.RightArrow = page.locator("//div[@aria-label='Next slide']//span[1]");
    this.LeftArrow = page.locator("//div[@aria-label='Previous slide']//span[1]");

}
async ClickBanner () {
    await this.RightArrow.click();
    await this.page.waitForTimeout(2000);
    await this.RightArrow.click();
    await this.page.waitForTimeout(2000);
    await this.LeftArrow.click();
    await this.page.waitForTimeout(2000);
    await this.LeftArrow.click();
    await this.page.waitForTimeout(2000);
    await this.RightArrow.click();
    await this.page.waitForTimeout(2000);
}


}