import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageInlineCart {
    readonly page: Page;
    readonly product: Locator;



    constructor(page: any) {
        this.page = page;
        this.product = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");

    }


}