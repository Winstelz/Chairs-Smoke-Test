import { expect, type Locator, type Page } from '@playwright/test';


export class BestChiavariInlineCart {
    readonly page: Page;
    readonly product: Locator;
    readonly emptyLink: Locator;


    constructor(page: any) {
        this.page = page;

        this.product = page.locator('.cart-product-tile__title', { hasText: 'Advantage X-Back Chair' });
        this.emptyLink =  page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
    
    }

}