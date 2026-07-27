import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantagePDP {
    readonly page: Page;
    readonly description: Locator;
    readonly descrContent: Locator;
    readonly pdpHeader: Locator;
    readonly pdpPrice:  Locator;
    readonly reviewStars: Locator;
    readonly newReview: Locator;
    readonly closeReview: Locator;
    readonly sort: Locator;
    readonly rightArrow: Locator;
    readonly reviewNumber: Locator;
    readonly leftArrow: Locator;
    readonly qtyInc: Locator;
    readonly qty: Locator;
    readonly qtyDec: Locator;
    readonly addToCart: Locator;
    readonly cart: Locator;
    
    
    
   
    


    constructor(page: any) {
        this.page = page;
        this.description = page.locator("//button[normalize-space()='Description']");
        this.descrContent = page.locator("//div[@id='content-description']");
        this.pdpHeader = page.locator("//h1[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.pdpPrice = page.locator("//div[@class='h3 flex-col items-end hidden md:flex']//div[@class='h3 text-tertiary-900'][normalize-space()='$38.99']");
        this.reviewStars = page.locator("//div[@class='bv_stars_component_container']//*[name()='svg']").nth(0);
        this.newReview = page.locator("div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > svg:nth-child(1)");
        this.closeReview = page.locator(".ips__sc-hn2bh6-0.cbsYNK");
        this.sort = page.locator("#bv-dropdown-select-reviews");
        this.rightArrow = page.getByRole('button', { name: 'Next Reviews' });
        this.reviewNumber = page.locator(".bv-rnr__sc-11r39gb-2.ghmrMg");
        this.leftArrow = page.getByRole('button', { name: 'Previous Reviews' });
        this.qtyInc = page.locator("//button[@aria-label='Increment Quantity']//*[name()='svg']");
        this.qty = page.locator("//input[@type='number']");
        this.qtyDec = page.locator("//button[@aria-label='Decrement Quantity']//*[name()='svg']");
        this.addToCart = page.locator("//button[normalize-space()='Add to Cart']");
        this.cart = page.locator("//span[@class='mr-2 font-light text-white text-e19 leading-120']");
    
    }


async clickDescription () {
    await this.description.click();
    expect(this.descrContent).toContainText("The Molded Foam Multipurpose Church Chair - 18.5 in. Wide provides a durable seating solution for your fellowship hall or convention center. This comfortably padded stack chair not only satisfies seating in Churches, but work well in hotel lobbies, banquet halls and conference facilities.");
}
async assertPDPHeader () {
    expect(this.pdpHeader).toContainText("Advantage Multipurpose Church Chairs - 18.5 in. Wide");
}

async assertPDPPrice () {
    expect(this.pdpPrice).toContainText("$38.99");   
}

async clickReviewStars () {
    await this.reviewStars.click();
}

async clickNewReview () {
    await this.newReview.click();
}

async clickCloseReview () {
    await this.closeReview.click();
}

async sortFilter() {
    await this.sort.hover();
    await this.sort.selectOption({ label: 'Lowest to Highest Rating' });
    await this.sort.selectOption({ label: 'Most Recent' });
}

async rightArrowPagniation () {
    await this.rightArrow.click();
    await this.page.waitForTimeout(3000);
}
async leftArrowPagniation () {
    await this.leftArrow.click();
    await this.page.waitForTimeout(3000);
}
    
async reviewNumber1 () {
    await this.reviewNumber.isVisible();
    expect(this.reviewNumber).toContainText("9 – 23");
}

async reviewNumber2 () {
    await this.page.waitForTimeout(3000);
    await this.reviewNumber.isVisible();
    expect(this.reviewNumber).toContainText("1 – 8");
}
async qtyIncrease () {
    await this.qtyInc.click();
    await this.qtyInc.click();
    await this.qtyInc.click();
    expect(this.qty).toHaveValue('4');
}

async qtyDecrease () {
    await this.qtyDec.click();
    await this.qtyDec.click();
    await this.qtyDec.click();
    expect(this.qty).toHaveValue('1');
}

async clickAddToCart () {
    await this.addToCart.click();
    await this.cart.click();
}

}