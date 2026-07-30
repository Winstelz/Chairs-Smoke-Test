import { expect, type Locator, type Page } from '@playwright/test';

export class BestChiavariPLP {
    readonly page: Page;

    readonly crossBackFirstItem: Locator;

    constructor(page: any) {
    this.page = page;

    this.crossBackFirstItem = page.locator("//img[@alt='Advantage X-Back Chair - View 2']");
    }

async clickCrossBackFirstItem() {
    console.log({ message: `Clicking First Item...`});
    await this.crossBackFirstItem.click();
    }
}