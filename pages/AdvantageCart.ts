import { expect, type Locator, type Page, type getByRole } from '@playwright/test';

export class AdvantageCart {
    readonly page: Page;
    readonly Cart: Locator;
    readonly QTYIncr: Locator;
    readonly QTY: Locator;
    readonly QTYDecr: Locator;
    readonly RightArrow: Locator;
    readonly LeftArrow: Locator;
    readonly Zip: Locator;
    readonly Address: Locator;
    readonly CalShip: Locator;
    readonly CalShipButton: Locator;
    readonly CheckoutButton: Locator;
    readonly Logo: Locator;
    readonly CartPage: Page;

    


    constructor(page) {
        this.page = page;
        this.Cart = page.locator("//span[normalize-space()='View Cart']");
        this.QTYIncr = page.locator("//button[@aria-label='Increment Quantity']");
        this.QTY = page.locator("(//input[@type='number'])[1]");
        this.QTYDecr = page.locator("//button[@aria-label='Decrement Quantity']");
        this.RightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.LeftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.Zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.Address = page.locator("//select[@name='addressType']");
        this.CalShip = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.CalShipButton = page.locator("//button[normalize-space()='Calculate Shipping']");
        this.CheckoutButton = page.locator("//button[normalize-space()='Proceed to Checkout']");
        this.Logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//a[@class='s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 s2kwpi7 s2kwpi5 _1fragemwl']");
        this.CartPage = page;


    }
async ClickCart (){
    await this.Cart.click();
    await expect(this.page.url()).toContain("/cart");
}
async IncreaseQTY () {
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
async DecreaseQTY () {
    await this.QTYDecr.click();
    await this.page.waitForTimeout(1000);
    await this.QTYDecr.click();
    await this.page.waitForTimeout(2000);
    await expect(this.QTY).toHaveValue("3");
}
async InputQTY () {
    await this.QTY.click();
    await this.QTY.fill("10");
    await this.page.waitForTimeout(2000);
    await expect(this.QTY).toHaveValue("10"); 
}
async YouMayLike () {
    await this.RightArrow.click();
    await this.RightArrow.click();
    await this.LeftArrow.click();
    await this.LeftArrow.click(); 
}
async CalShipping () {
    await this.CalShip.click();
    await this.Zip.click();
    await this.Zip.fill("45014");
    await this.Address.click();
    await this.Address.selectOption('Residential');
    await this.CalShipButton.click();
    await this.page.waitForTimeout(2000);
}
async ClickCheckout () {
    await this.CheckoutButton.click();
    await this.Logo.click();
}
async GotoCart () {
    await this.page.goto("https://www.bestchiavarichairs.com/cart");
    await page.waitForLoadState();
}
}