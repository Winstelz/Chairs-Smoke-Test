import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageInlineCart {
    readonly page: Page;
    readonly product: Locator;
    readonly qtyIncr: Locator;
    readonly qty: Locator;
    readonly qtyDecr: Locator;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly plus: Locator;
    readonly zip: Locator;
    readonly address: Locator;
    readonly calculateShippingButton: Locator;
    readonly checkoutButton: Locator;
    readonly logo: Locator;
    readonly cart: Locator;
    readonly trashCan: Locator;
    readonly emptyLink: Locator;


    constructor(page: any) {
        this.page = page;
        this.product = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.qtyIncr = page.locator("(//button[@aria-label='Increment Quantity'])[2]");
        this.qtyDecr = page.locator("(//button[@aria-label='Decrement Quantity'])[2]");
        this.qty = page.locator("(//input[@type='number'])[2]");
        this.rightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.leftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.plus = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.address = page.locator("//select[@name='addressType']");
        this.calculateShippingButton = page.locator("//button[normalize-space()='Calculate Shipping']");
        this.checkoutButton = page.locator("//button[normalize-space()='Proceed to Checkout']")
        this.logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//div[@class='_1fragem2i _1fragempf _16s97g73r']");
        this.cart =  page.locator("//body/div[@id='shopify-section-sections--21855799083298__header']/ra-header[@class='header flex items-center justify-center fixed w-full left-0 transition-all duration-300 z-10 flex-col max-md:py-4 border-b !border-grey-200']/div[@class='header__wrapper flex h-full flex-wrap justify-between md:justify-start w-full container max-md:!px-3']/div[@class='header__inner flex w-full justify-between items-center flex-col md:pt-5 max-md:!flex']/div[@class='flex items-center w-full max-md:justify-between']/div[@class='m-0 md:ml-auto']/div[@class='flex flex-row gap-6']/ul[@class='flex justify-center items-center h-full']/li[@class='header__action-item flex justify-center items-center h-full mr-4 last:mr-0 leading-/ra-cart-toggle/a[@title='cart']/span[1]");
        this.trashCan = page.getByRole('button', { name: 'remove-item' });
        this.emptyLink =  page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
    
    }


async assertProduct () {
    await this.product.isVisible();
    expect(this.product).toHaveText("Advantage Multipurpose Church Chairs - 18.5 in. Wide");
}
async qtyIncrease () {
        await this.qtyIncr.click();
        await this.page.waitForTimeout(1000);
        await this.qtyIncr.click();
        await this.page.waitForTimeout(1000);
        await this.qtyIncr.click();
        await this.page.waitForTimeout(1000);
        await this.qtyIncr.click();
        await this.page.waitForTimeout(2000);
        await expect(this.qty).toHaveValue("5");
}
async qtyDecrease () {
        await this.qtyDecr.click();
        await this.page.waitForTimeout(1000);
        await this.qtyDecr.click();
        await this.page.waitForTimeout(2000);
        await expect(this.qty).toHaveValue("3");
}
async qtyInput () {
        await this.qty.click();
        await this.qty.fill("10");
        await this.page.waitForTimeout(2000);
        await expect(this.qty).toHaveValue("10");
}

async youMayLikeCarousel () {
    await this.rightArrow.click();
    await this.rightArrow.click();
    await this.leftArrow.click();
    await this.leftArrow.click();
}
async calShipping () {
    await this.plus.click();
    await this.zip.click();
    await this.zip.fill("45014");
    await this.address.click();
    await this.address.selectOption('Residential');
    await this.calculateShippingButton.click();
    await this.page.waitForTimeout(2000);
}
async checkout () {
    await this.checkoutButton.click();
    await this.logo.click();
    await this.page.waitForLoadState();
    await this.cart.click();
}
async deleteItem () {
    await this.page.waitForTimeout(2000);
    await this.trashCan.click();
    await this.emptyLink.click();
    expect(this.page.url()).toContain("/collections/church-stack-chairs");
}

}