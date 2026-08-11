import { expect, type Locator, type Page } from '@playwright/test';

export class BestChiavariPLP {
    readonly page: Page;

    readonly crossBackFirstItem: Locator;
    readonly banquetFirstItem: Locator;

    constructor(page: any) {
    this.page = page;

    this.crossBackFirstItem = page.locator("//img[@alt='Advantage X-Back Chair - View 2']");
    this.banquetFirstItem = page.locator("//img[@alt='HERCULES Series Crown Back Stacking Banquet Chair - View 2']");
}


async clickCrossBackFirstItem() {
    console.log({ message: `Clicking First Item...`});
    await this.crossBackFirstItem.click();
    }

async clickBanquetFirstItem() {
    console.log({ message: `Clicking First Item...`});
    await this.banquetFirstItem.click();
    }
}