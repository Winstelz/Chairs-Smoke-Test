import { expect, type Locator, type Page } from '@playwright/test';


export class CommonInlineCart {
    readonly page: Page;
    readonly emptyHeader: Locator;

    constructor(page: any) {
    this.page = page;
    
    this.emptyHeader = page.locator('h3', {hasText: /Your cart is empty/i });

}

async assertEmptyCartHeader() {
    console.log({ message: `Asserting Empty Cart Header....`});
    await expect(this.emptyHeader).toBeVisible();
    await expect(this.emptyHeader).toHaveText(/Your Cart is Empty/i);
}

}