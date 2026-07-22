import { expect, type Locator, type Page} from '@playwright/test';

export class AdvantageCart {
    readonly page: Page;
    readonly cart: Locator;
    readonly qtyIncr: Locator;
    readonly qty: Locator;
    readonly qtyDecr: Locator;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly zip: Locator;
    readonly address: Locator;
    readonly calShip: Locator;
    readonly calShipButton: Locator;
    readonly checkoutButton: Locator;
    readonly logo: Locator;
    readonly cartPage: Page;

    


    constructor(page: any) {
        this.page = page;
        this.cart = page.locator("//span[normalize-space()='View Cart']");
        this.qtyIncr = page.locator("//button[@aria-label='Increment Quantity']");
        this.qty = page.locator("(//input[@type='number'])[1]");
        this.qtyDecr = page.locator("//button[@aria-label='Decrement Quantity']");
        this.rightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.leftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.address = page.locator("//select[@name='addressType']");
        this.calShip = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.calShipButton = page.getByRole('button', { name: 'Calculate Shipping' });
        this.checkoutButton = page.getByRole('button', { name: 'Proceed to Checkout' });
        this.logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//a[@class='s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 s2kwpi7 s2kwpi5 _1fragemwl']");
        this.cartPage = page;


    }
async clickCart (){
    console.log({ message: `Clicking Cart....`});
    await this.cart.click();
    await expect(this.page.url()).toContain("/cart");
}
async increaseQTY () {
    console.log({ message: `Increasing QTY....`});
    await this.qtyIncr.click();
    await this.page.waitForTimeout(1000);
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
async decreaseQTY () {
    console.log({ message: `Decreasing QTY....`});
    await this.qtyDecr.click();
    await this.page.waitForTimeout(1000);
    await this.qtyDecr.click();
    await this.page.waitForTimeout(2000);
    await expect(this.qty).toHaveValue("3");
}
async inputQTY () {
    console.log({ message: `Inputting QTY....`});
    await this.qty.click();
    await this.qty.fill("10");
    await this.page.waitForTimeout(2000);
    await expect(this.qty).toHaveValue("10"); 
}
async youMayLike () {
    console.log({ message: `Clicking You May Also Like Carousel....`});
    await this.rightArrow.click();
    await this.rightArrow.click();
    await this.leftArrow.click();
    await this.leftArrow.click(); 
}
async calShipping () {
    console.log({ message: `Calculating Shipping....`});
    await this.calShip.click();
    await this.zip.click();
    await this.zip.fill("45014");
    await this.address.click();
    await this.address.selectOption('Residential');
    await this.calShipButton.click();
    await this.page.waitForTimeout(2000);
}
async clickCheckout () {
    console.log({ message: `Clicking Checkout....`});
    await this.checkoutButton.click();
    await this.logo.click();
}
async goToCart () {
    console.log({ message: `Clicking Cart Page....`});
    await this.page.goto("https://www.bestchiavarichairs.com/cart");
    await this.page.waitForLoadState();
}
}
