import { expect, type Locator, type Page } from '@playwright/test';

export class CommonUtil {
    readonly page: Page;
    readonly closePopup: Locator;
    readonly closeTeaser: Locator;
    readonly addToCartButton: Locator;
    readonly qtyIncrease: Locator;
    readonly qtyDecrease: Locator;
    readonly qtyInput: Locator;
    readonly viewCartButton: Locator;
    readonly youMayAlsoLikeRightArrow: Locator;
    readonly youMayAlsoLikeLeftArrow: Locator;

    constructor(page: any) {
        this.page = page;
        this.closePopup = page.getByRole('button', { name: 'Close dialog' });
        this.closeTeaser = page.locator('button[aria-label="Close teaser"], button:has(svg[aria-hidden="true"])').first();
        this.addToCartButton = page.locator("//button[normalize-space()='Add to Cart']");
        this.qtyIncrease = page.locator("(//button[@aria-label='Increment Quantity'])[2]");
        this.qtyDecrease = page.locator("(//button[@aria-label='Decrement Quantity'])[2]");
        this.qtyInput = page.locator("(//input[@type='number'])[2]");
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
        this.youMayAlsoLikeRightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.youMayAlsoLikeLeftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
    }

async clickAddToCartButton() {
        console.log({ message: `Clicking Add to Cart Button...` });
        await this.addToCartButton.click();
    }

async clickQtyIncrease () {
        console.log({ message: `Increasing Quantity in Cart....`});
        await this.qtyIncrease.click();
        await this.page.waitForTimeout(1000);
        await this.qtyIncrease.click();
        await this.page.waitForTimeout(1000);
        await this.qtyIncrease.click();
        await this.page.waitForTimeout(1000);
        await this.qtyIncrease.click();
        await this.page.waitForTimeout(2000);
        await expect(this.qtyInput).toHaveValue("5");
}
async clickQtyDecrease () {
        console.log({ message: `Decreasing Quantity in Cart....`});
        await this.qtyDecrease.click();
        await this.page.waitForTimeout(1000);
        await this.qtyDecrease.click();
        await this.page.waitForTimeout(2000);
        await expect(this.qtyInput).toHaveValue("3");
}
async InputQtyInput () {
console.log({ message: `Inputting Quantity in Cart....`});
        await this.qtyInput.click();
        await this.qtyInput.fill("10");
        await this.page.waitForTimeout(2000);
        await expect(this.qtyInput).toHaveValue("10");
}

async clickViewCart (){
    console.log({ message: `Clicking View Cart....`});
    await this.viewCartButton.click();
    await expect(this.page.url()).toContain("/cart");
}

async clickThroughYouMayAlsoLikeArrows () {
    console.log({ message: `Clicking You May Also Like Carousel Arrows....`});
    await this.youMayAlsoLikeRightArrow.click();
    await this.youMayAlsoLikeRightArrow.click();
    await this.youMayAlsoLikeLeftArrow.click();
    await this.youMayAlsoLikeLeftArrow.click();
}
}