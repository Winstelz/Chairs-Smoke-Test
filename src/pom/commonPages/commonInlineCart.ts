import { expect, type Locator, type Page } from '@playwright/test';


export class CommonInlineCart {
    readonly page: Page;
    readonly emptyHeader: Locator;
    readonly qtyIncrease: Locator;
    readonly qtyDecrease: Locator;
    readonly qty: Locator;

    constructor(page: any) {
    this.page = page;
    
    this.emptyHeader = page.locator('h3', {hasText: /Your cart is empty/i });
    this.qtyIncrease = page.locator("(//button[@aria-label='Increment Quantity'][2])");
    this.qtyDecrease = page.locator("(//button[@aria-label='Decrement Quantity'])[2]");
    this.qty = page.locator("(//input[@type='number'])[2]");
    
}

async assertEmptyCartHeader() {
    console.log({ message: `Asserting Empty Cart Header....`});
    await expect(this.emptyHeader).toBeVisible();
    await expect(this.emptyHeader).toHaveText(/Your Cart is Empty/i);
}

async assertProduct (product: Locator, productName: string) {
console.log({ message: `Asserting Product in Cart....`});
    await product.isVisible();
    expect(product).toHaveText(productName);
}

}