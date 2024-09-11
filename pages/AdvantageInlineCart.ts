import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageInlineCart {
    readonly page: Page;
    readonly Product: Locator;
    readonly QTYIncr: Locator;
    readonly QTY: Locator;
    readonly QTYDecr: Locator;
    readonly RightArrow: Locator;
    readonly LeftArrow: Locator;
   

    constructor(page) {
        this.page = page;
        this.Product = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.QTYIncr = page.locator("(//button[@aria-label='Increment Quantity'])[2]");
        this.QTYDecr = page.locator("(//button[@aria-label='Decrement Quantity'])[2]");
        this.QTY = page.locator("(//input[@type='number'])[2]");
        this.RightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.LeftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");

    
    }


async VerifyProduct () {
    await this.Product.isVisible();
    expect(this.Product).toHaveText("Advantage Multipurpose Church Chairs - 18.5 in. Wide");
}
async QTYIncrease () {
        await this.QTYIncr.click();
        await this.page.waitForTimeout(1000);
        await this.QTYIncr.click();
        await this.page.waitForTimeout(1000);
        await this.QTYIncr.click();
        await this.page.waitForTimeout(1000);
        await this.QTYIncr.click();
        await this.page.waitForTimeout(2000);
        await expect(this.QTY).toHaveValue("5");
}
async QTYDecrease () {
        await this.QTYDecr.click();
        await this.page.waitForTimeout(1000);
        await this.QTYDecr.click();
        await this.page.waitForTimeout(2000);
        await expect(this.QTY).toHaveValue("3");
}
async QTYInput () {
        await this.QTY.click();
        await this.QTY.fill("10");
        await this.page.waitForTimeout(2000);
        await expect(this.QTY).toHaveValue("10");
}

async YouMayLikeCarousel () {
    await this.RightArrow.click();
    await this.RightArrow.click();
    await this.LeftArrow.click();
    await this.LeftArrow.click();
}

}