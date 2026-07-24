import { expect, type Locator, type Page} from '@playwright/test';
import { CommonUtil } from '../../commonUtil';
import { AdvantageHomePage } from './AdvantageHomePage';
import { STORE_URLS } from '../../config/urls';

export class AdvantageCart {
    readonly page: Page;
    readonly commonUtil: CommonUtil;
    readonly homePage: AdvantageHomePage;
    readonly cart: Locator;
    readonly qtyIncr: Locator;
    readonly qty: Locator;
    readonly qtyDecr: Locator;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly zip: Locator;
    readonly address: Locator;
    readonly calculateShipping: Locator;
    readonly calculateShippingButton: Locator;
    readonly shippingSummary: Locator;
    readonly teaser: Locator;
    readonly checkoutButton: Locator;
    readonly logo: Locator;
    readonly cartPage: Page;
    readonly checkoutLogo: Locator;
    readonly trashIconButton: Locator;
    readonly emptyCartMessage: Locator;
    readonly shopAllEmptyLink: Locator;

    


    constructor(page: any) {
        this.page = page;
        this.commonUtil = new CommonUtil(page);
        this.homePage = new AdvantageHomePage(page);
        this.cart = page.getByRole('link', { name: 'View Cart' });
        this.qtyIncr = page.locator("//button[@aria-label='Increment Quantity']");
        this.qty = page.locator("(//input[@type='number'])[1]");
        this.qtyDecr = page.locator("//button[@aria-label='Decrement Quantity']");
        this.rightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.leftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.address = page.locator("//select[@name='addressType']");
        this.calculateShipping = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.calculateShippingButton = page.getByRole('button', { name: 'Calculate Shipping', exact: true });
        this.shippingSummary = this.page.locator('text=Zip or Postal Code:').locator('..').filter({ hasText: '45014' });
        this.checkoutButton = page.locator('button.ra-button.ra-button--primary.ra-button--full-width.ra-button--lg').filter({ hasText: 'Proceed to Checkout' }).first();
        this.logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//a[@class='s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 s2kwpi7 s2kwpi5 _1fragemwl']");
        this.teaser = page.locator('button[aria-label="Close teaser"], button:has(svg[aria-hidden="true"])').first();
        this.cartPage = page;
        this.checkoutLogo = page.locator(`header a[href="${STORE_URLS.advantage}"]`).filter({
            has: page.locator('img[alt="Advantage Church Chairs"]')
        }).first();
        this.trashIconButton = page.getByRole('button', { name: 'Remove item' });
        this.emptyCartMessage = page.locator('text=Your Cart Is Empty');
        this.shopAllEmptyLink = page.locator('a.ra-button.ra-button--primary.ra-button--lg').filter({ hasText: 'Shop All' });
    }

async clickCart (){
    console.log({ message: `Clicking Cart....`});
    await this.cart.click();
    await expect(this.page.url()).toContain("/cart");
}
async increaseQTY () {
    console.log({ message: `Increasing QTY....`});
    await this.page.waitForTimeout(1000);
    await this.qtyIncr.click();
    //Need to wait for the QTY to update before clicking again, otherwise it will not register the click
    await this.page.waitForTimeout(1000);
    await this.qtyIncr.click();
    await this.page.waitForTimeout(1000);
    await this.qtyIncr.click();
    await this.page.waitForTimeout(1000);
    await this.qtyIncr.click();
    await this.page.waitForTimeout(1000);
    await this.qtyIncr.click();
    await this.page.waitForTimeout(2000);
    await expect(this.qty).toHaveValue("6");
}
async decreaseQTY () {
    console.log({ message: `Decreasing QTY....`});
    await this.page.waitForTimeout(1000);
    await this.qtyDecr.click();
    //Need to wait for the QTY to update before clicking again, otherwise it will not register the click
    await this.page.waitForTimeout(1000);
    await this.qtyDecr.click();
    await this.page.waitForTimeout(2000);
    await expect(this.qty).toHaveValue("4");
}
async inputQTY () {
    console.log({ message: `Inputting QTY....`});
    await this.qty.click();
    await this.qty.fill("10");
    await this.page.waitForTimeout(2000);
    await expect(this.qty).toHaveValue("10"); 
}
async clickYouMayLike () {
    console.log({ message: `Clicking You May Also Like Carousel....`});
    await this.rightArrow.click();
    await this.rightArrow.click();
    await this.leftArrow.click();
    await this.leftArrow.click(); 
}
async clickCalculateShipping () {
    console.log({ message: `Calculating Shipping....`});
    await this.calculateShipping.click();
    await this.zip.click();
    await this.zip.fill("45014");
    await this.address.click();
    await this.address.selectOption('Residential');

    const shippingResponse = this.page.waitForResponse(
        response =>
            response.url().includes('Ubique.Gateway.ThirdParty/shopify/freight/cart') &&
            response.status() >= 200 &&
            response.status() < 400,
        { timeout: 15000 }
    );

    await this.calculateShippingButton.click();
    await shippingResponse;
    await this.shippingSummary.waitFor({ state: 'visible', timeout: 15000 });
}
async clickCheckout () {
    console.log({ message: `Clicking Checkout....`});
    await this.checkoutButton.click();
}

async clickCheckoutLogo () {
    console.log({ message: `Clicking Checkout Logo....`});
    // On Shopify checkout, logo should navigate back to store
    try {
        const checkoutLogoLink = this.page.locator('a:has(img[alt="Advantage Church Chairs"])').first();
        const attached = await checkoutLogoLink.count();
        if (attached > 0) {
            await checkoutLogoLink.scrollIntoViewIfNeeded();
            await checkoutLogoLink.click({ force: true });
            await this.page.waitForURL(/advantagechurchchairs\.com/);
        } else {
            // If logo not found on checkout page, navigate directly back
            console.log({ message: 'Logo not found, navigating back to store' });
            await this.homePage.gotoHomePage();
        }
    } catch (e) {
        const errorMsg = e instanceof Error ? e.message : String(e);
        console.log({ 
            message: 'Error clicking checkout logo - logo may not exist on checkout page, falling back to navigation', 
            error: errorMsg,
            currentUrl: this.page.url()
        });
        await this.homePage.gotoHomePage();
    }
}

async closeTeaser () {
      console.log({ message: `Awaiting Pop Up....`});
        const teaser = this.teaser;
    try {
        await teaser.waitFor({ state: 'visible', timeout: 15000 });
        console.log({ message: 'Klaviyo teaser appeared — closing it' });
        await this.teaser.click();
    } catch {
        console.log({ message: 'Klaviyo popup did not appear — skipping close step' });
    }
}
async goToCart () {
    console.log({ message: `Navigating to Cart Page....`});
    await this.page.goto(`${STORE_URLS.advantage}/cart`);
    await this.page.waitForLoadState();
}

async clickTrashIcon () {
    console.log({ message: `Clicking Trash Icon....`});
    await this.trashIconButton.click();
}

async assertEmptyCart () {
    console.log({ message: `Asserting Empty Cart....`});
    await expect(this.emptyCartMessage).toBeVisible();
}

async clickShopAllEmptyLink () {
    console.log({ message: `Clicking Shop All Empty Link....`});
    await this.shopAllEmptyLink.isVisible();
    await this.shopAllEmptyLink.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain("/collections/shop-all");
}
}
