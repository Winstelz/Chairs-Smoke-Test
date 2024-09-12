import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageInlineCart {
    readonly page: Page;
    readonly Product: Locator;
    readonly QTYIncr: Locator;
    readonly QTY: Locator;
    readonly QTYDecr: Locator;
    readonly RightArrow: Locator;
    readonly LeftArrow: Locator;
    readonly Plus: Locator;
    readonly Zip: Locator;
    readonly Address: Locator;
    readonly CalButton: Locator;
    readonly CheckoutButton: Locator;
    readonly Logo: Locator;
    readonly Cart: Locator;
    readonly TrashCan: Locator;
    readonly EmptyLink: Locator;


    constructor(page) {
        this.page = page;
        this.Product = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.QTYIncr = page.locator("(//button[@aria-label='Increment Quantity'])[2]");
        this.QTYDecr = page.locator("(//button[@aria-label='Decrement Quantity'])[2]");
        this.QTY = page.locator("(//input[@type='number'])[2]");
        this.RightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.LeftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.Plus = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.Zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.Address = page.locator("//select[@name='addressType']");
        this.CalButton = page.locator("//button[normalize-space()='Calculate Shipping']");
        this.CheckoutButton = page.locator("//button[normalize-space()='Proceed to Checkout']")
        this.Logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//div[@class='_1fragem2i _1fragempf _16s97g73r']");
        this.Cart =  page.locator("(//a[@title='cart'])[1]");
        this.TrashCan = page.getByRole('button', { name: 'remove-item' });
        this.EmptyLink =  page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
    
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
async CalShipping () {
    await this.Plus.click();
    await this.Zip.click();
    await this.Zip.fill("45014");
    await this.Address.click();
    await this.Address.selectOption('Residential');
    await this.CalButton.click();
    await this.page.waitForTimeout(2000);
}
async Checkout () {
    await this.CheckoutButton.click();
    await this.Logo.click();
    await this.page.waitForLoadState();
    await this.Cart.click();
}
async DeleteItem () {
    await this.page.waitForTimeout(2000);
    await this.TrashCan.click();
    await this.EmptyLink.click();
    expect(this.page.url()).toContain("/collections/church-stack-chairs");
}

}