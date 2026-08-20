import { expect, type Locator, type Page } from '@playwright/test';

export class BestChiavariPLP {
    readonly page: Page;

    readonly crossBackFirstItem: Locator;
    readonly banquetFirstItem: Locator;
    readonly firstItem: Locator;
    readonly pdpItem: Locator;

    constructor(page: any) {
    this.page = page;

    this.crossBackFirstItem = page.locator("//img[@alt='Advantage X-Back Chair - View 2']");
    this.banquetFirstItem = page.locator("//img[@alt='HERCULES Series Crown Back Stacking Banquet Chair - View 2']");
    this.firstItem = page.locator("//a[contains(normalize-space(.), \"HERCULES Series Trapezoidal Back Stacking Banquet Chair with 1.5\")]")
    this.pdpItem = page.getByRole('img', { name: /HERCULES Series Crown Back Stacking Banquet Chair - View 2/i })
}


async clickCrossBackFirstItem() {
    console.log({ message: `Clicking First Item...`});
    await this.crossBackFirstItem.click();
    await this.page.waitForTimeout(5000);
    }

async clickBanquetFirstItem() {
    console.log({ message: `Clicking First Item...`});
    await this.banquetFirstItem.click();
    await this.page.waitForTimeout(9000);
    }
}