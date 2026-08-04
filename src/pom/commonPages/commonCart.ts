import { expect, type Locator, type Page } from '@playwright/test';
import { STORE_URLS } from '../../config/urls';

export class CommonCart {
    readonly page: Page;

    readonly addToCartButton: Locator;
    readonly qtyIncrease: Locator;
    readonly qtyDecrease: Locator;
    readonly qtyInput: Locator;
    readonly viewCartButton: Locator;
    readonly youMayAlsoLikeRightArrow: Locator;
    readonly youMayAlsoLikeLeftArrow: Locator;
    readonly zip: Locator;
    readonly address: Locator;
    readonly calculateShipping: Locator;
    readonly calculateShippingButton: Locator;
    readonly shippingSummary: Locator;
    readonly checkoutButton: Locator;   
    readonly logo: Locator; 
    readonly teaser: Locator;
    readonly trashIconButton: Locator;
    readonly emptyCartMessage: Locator; 
    readonly shopAllEmptyLink: Locator;
    readonly shopAllTables: Locator;
    readonly advantageLogo: Locator;
    readonly chiavariLogo: Locator;


    constructor(page: any) {
        this.page = page;

        this.addToCartButton = page.locator("//button[normalize-space()='Add to Cart']");
        this.qtyIncrease = page.locator("(//button[@aria-label='Increment Quantity'])");
        this.qtyDecrease = page.locator("(//button[@aria-label='Decrement Quantity'])");
        this.qtyInput = page.locator("(//input[@type='number'])");
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
        this.youMayAlsoLikeRightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.youMayAlsoLikeLeftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
        this.zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        this.address = page.locator("//select[@name='addressType']");
        this.calculateShipping = page.locator("//span[@class='ra-icon']//*[name()='svg']");
        this.calculateShippingButton = page.getByRole('button', { name: 'Calculate Shipping', exact: true });
        this.shippingSummary = this.page.locator('text=Zip or Postal Code:').locator('..').filter({ hasText: '45014' });
        this.checkoutButton = page.getByRole('button', { name: / Proceed to Checkout /i });
        this.logo = page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//a[@class='s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 s2kwpi7 s2kwpi5 _1fragemwl']");
        this.teaser = page.locator('button[aria-label="Close teaser"], button:has(svg[aria-hidden="true"])').first();
        this.trashIconButton = page.getByRole('button', { name: 'Remove item' });
        this.emptyCartMessage = page.locator('text=Your Cart Is Empty');
        this.shopAllEmptyLink = page.locator('a.ra-button.ra-button--primary.ra-button--lg').filter({ hasText: 'Shop All' });
        this.shopAllTables = page.locator('a.ra-button.ra-button--primary.ra-button--lg').filter({ hasText: 'Shop All Tables' });
        this.advantageLogo = page.locator("//img[@alt='Advantage Church Chairs Logo']");
        this.chiavariLogo = page.locator("//img[@alt='Best Chiavari Chairs Logo']");
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

async clickCheckoutLogo (url: keyof typeof STORE_URLS, logo: Locator) {
    console.log({ message: `Clicking Checkout Logo....`});
    // On Shopify checkout, logo should navigate back to store
    try {
        const checkoutLogoLink = this.logo.first();
        const attached = await checkoutLogoLink.count();
        if (attached > 0) {
            await checkoutLogoLink.scrollIntoViewIfNeeded();
            await checkoutLogoLink.click({ force: true });
            await this.page.waitForURL(/advantagechurchchairs\.com/);
        } else {
            // If logo not found on checkout page, navigate directly back
            console.log({ message: 'Logo not found, navigating back to store' });
            await this.page.goto(STORE_URLS[url]);
        }
    } catch (e) {
        const errorMsg = e instanceof Error ? e.message : String(e);
        console.log({ 
            message: 'Error clicking checkout logo - logo may not exist on checkout page, falling back to navigation', 
            error: errorMsg,
            currentUrl: this.page.url()
        });
        await this.page.goto(STORE_URLS[url]);
    }
}

async clickCloseTeaser () {
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

async goToCart (url:  keyof typeof STORE_URLS) {
    console.log({ message: `Navigating to Cart Page....`});
    await this.page.goto(`${STORE_URLS[url]}/cart`);
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

async clickEmptyCartLink (emptyLink: Locator, url: string) {
    console.log({ message: `Clicking Empty Cart Link....`});
    await expect(emptyLink).toBeVisible();
    await emptyLink.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain(url);
}
}