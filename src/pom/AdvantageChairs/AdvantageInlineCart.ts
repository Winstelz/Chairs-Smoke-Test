import { expect, type Locator, type Page } from '@playwright/test';
import { AdvantageCart } from './AdvantageCart';

export class AdvantageInlineCart {
    readonly page: Page;
    readonly cartPage: AdvantageCart;
    readonly product: Locator;
    readonly qtyIncr: Locator;
    readonly qty: Locator;
    readonly qtyDecr: Locator;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly plus: Locator;
    readonly zip: Locator;
    readonly address: Locator;
    readonly logo: Locator;
    readonly trashCan: Locator;
    readonly emptyLink: Locator;
    readonly cartHeader: Locator;
    readonly emptyHeader: Locator;


    constructor(page: any) {
        this.page = page;
        this.cartPage = new AdvantageCart(page);
        this.product = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.qtyIncr = page.locator("(//button[@aria-label='Increment Quantity'])[2]");
        this.qtyDecr = page.locator("(//button[@aria-label='Decrement Quantity'])[2]");
        this.qty = page.locator("(//input[@type='number'])[2]");
        this.rightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.leftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.plus = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.address = page.locator("//select[@name='addressType']");
        this.logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//div[@class='_1fragem2i _1fragempf _16s97g73r']");
        this.trashCan = page.getByRole('button', { name: /remove item/i });
        this.emptyLink =  page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
        this.cartHeader = page.locator('header').locator('div.flex.items-center:has-text("Cart")');
        this.emptyHeader = page.locator('h3', {hasText: /Your cart is empty/i });
    
    }


async assertProduct () {
console.log({ message: `Asserting Product in Cart....`});
    await this.product.isVisible();
    expect(this.product).toHaveText("Advantage Multipurpose Church Chairs - 18.5 in. Wide");
}
async qtyIncrease () {
console.log({ message: `Increasing Quantity in Cart....`});
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
console.log({ message: `Decreasing Quantity in Cart....`});
        await this.qtyDecr.click();
        await this.page.waitForTimeout(1000);
        await this.qtyDecr.click();
        await this.page.waitForTimeout(2000);
        await expect(this.qty).toHaveValue("3");
}
async qtyInput () {
console.log({ message: `Inputting Quantity in Cart....`});
        await this.qty.click();
        await this.qty.fill("10");
        await this.page.waitForTimeout(2000);
        await expect(this.qty).toHaveValue("10");
}

async youMayLikeCarousel () {
console.log({ message: `Navigating through You May Like Carousel....`});
    await this.rightArrow.click();
    await this.rightArrow.click();
    await this.leftArrow.click();
    await this.leftArrow.click();
}

async deleteItem () {
    console.log({ message: `Deleting Item from Cart....`});
    await this.trashCan.click();
    await expect(this.emptyLink).toBeVisible();
}

async assertEmptyCartHeader() {
    console.log({ message: `Asserting Empty Cart Header....`});
    await expect(this.emptyHeader).toBeVisible();
    await expect(this.emptyHeader).toHaveText(/Your Cart is Empty/i);
}

async clickInlineCartEmptyLink() {
    console.log({ message: `Clicking Empty Cart Link....`});
    await this.emptyLink.click();
    expect(this.page.url()).toContain("/collections/church-stack-chairs");

}
}