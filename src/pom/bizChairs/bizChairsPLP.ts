import { expect, type Locator, type Page } from '@playwright/test';

export class BizChairsPLP {
    readonly page: Page;

    readonly officeFirstItem: Locator;
    readonly firstItem: Locator;
    readonly pdpItem: Locator;
    readonly blackMetal: Locator;


    constructor(page: any) {
    this.page = page;

    this.officeFirstItem = page.locator("//img[@alt='HERCULES Diplomat Series LeatherSoft Chair with Clean Line Stitched Frame - View 2']");
    this.firstItem = page.locator("//a[contains(normalize-space(.), \"Kerry Plastic 4 Compartment Pen Holder Office Desktop Organizer with Metallic Trim\")]")
    this.pdpItem = page.getByRole('img', { name: /Big & Tall 1000 lb. Rated Stack Chair - View 2/i })
    this.blackMetal = page.locator("//span[contains(@class,'ra-choice__label')][normalize-space()='Black Metal']"); 

}


async clickPLPItem(item: Locator) {
    console.log({ message: `Clicking First Item...`});
    await this.page.waitForTimeout(9000);
    await item.click();
    }


}