import { expect, type Locator, type Page } from '@playwright/test';


export class BestChiavariInlineCart {
    readonly page: Page;
    //readonly cartPage: AdvantageCart;
    readonly product: Locator;

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

        this.product = page.locator('.cart-product-tile__title', { hasText: 'Advantage X-Back Chair' });
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
    expect(this.product).toHaveText("Advantage X-Back Chair");
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