import { expect, type Locator, type Page } from '@playwright/test';

export class BizChairsPLP {
    readonly page: Page;

    readonly officeFirstItem: Locator;
    readonly firstItem: Locator;
    readonly pdpItem: Locator;

    constructor(page: any) {
    this.page = page;

    this.officeFirstItem = page.locator("//img[@alt='HERCULES Diplomat Series LeatherSoft Chair with Clean Line Stitched Frame - View 2']");
    this.firstItem = page.locator("//a[contains(normalize-space(.), \"HERCULES Series Trapezoidal Back Stacking Banquet Chair with 1.5\")]")
    this.pdpItem = page.getByRole('img', { name: /Big & Tall 1000 lb. Rated Stack Chair - View 2/i })
    
}


async clickPLPItem(item: Locator) {
    console.log({ message: `Clicking First Item...`});
    await item.click();
    await this.page.waitForTimeout(5000);
    }


}