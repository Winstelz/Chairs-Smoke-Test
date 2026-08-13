import { expect, type Locator, type Page } from '@playwright/test';

export class CommonPDP {
    readonly page: Page;
    readonly description: Locator;
    readonly descrContent: Locator;
    readonly pdpHeader: Locator;
    readonly pdpPrice:  Locator;
    readonly reviewStars: Locator;
    readonly newReview: Locator;
    readonly closeReview: Locator;
    readonly sort: Locator;
    readonly lowToHighSort: Locator;
    readonly mostRecentSort: Locator;
    readonly rightArrow: Locator;
    readonly reviewNumber: Locator;
    readonly leftArrow: Locator;
    readonly qtyIncrement: Locator;
    readonly qty: Locator;
    readonly qtyDecrement: Locator;
    readonly addToCart: Locator;
    readonly cart: Locator;

    constructor(page: any) {
        this.page = page;
        this.description = page.locator("//button[normalize-space()='Description']");
        this.descrContent = page.locator("//div[@id='content-description']");
        this.pdpHeader = page.getByRole('heading', { level: 1 });
        this.pdpPrice = page.locator("//div[@class='h3 flex-col items-end hidden md:flex']//div[@class='h3 text-tertiary-900']");
        this.reviewStars = page.locator("//div[@class='bv_stars_component_container']//*[name()='svg']").nth(0);
        this.newReview = page.locator("div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > svg:nth-child(1)");
        this.closeReview = page.locator(".ips__sc-hn2bh6-0.cbsYNK");
        this.sort = page.locator('[role="combobox"][aria-controls^="bv-reviews-sort-by"]');
        this.lowToHighSort = page.getByRole('option', { name: 'Lowest to Highest Rating' });
        this.mostRecentSort = page.getByRole('option', { name: 'Most Recent' });
        this.rightArrow = page.getByRole('button', { name: /Next\s+Reviews/ });
        this.reviewNumber = page.getByText(/\d+\s*–\s*\d+\s*of\s*\d+\s*Reviews/).first();
        this.leftArrow = page.getByRole('button', { name: /Previous\s+Reviews/ });
        this.qtyIncrement = page.getByRole('button', { name: 'Increment Quantity' });
        this.qty = page.locator("//input[@type='number']");
        this.qtyDecrement = page.getByRole('button', { name: 'Decrement Quantity' });
        this.addToCart = page.locator("//button[normalize-space()='Add to Cart']");
        this.cart = page.locator("//span[@class='mr-2 font-light text-white text-e19 leading-120']");
    
    }


async clickDescription (text: string) {
    console.log({ message: `Clicking Description` });
    await this.description.click();
    expect(this.descrContent).toContainText(text);
}

async assertPDPHeader (text: string) {
    console.log({ message: `Asserting PDP Header` });
    expect(this.pdpHeader).toContainText(text);
}

async assertPDPPrice (price: string) {
    console.log({ message: `Asserting PDP Price` });
    expect(this.pdpPrice).toContainText(price);   
}

async clickReviewStars () {
    console.log({ message: `Clicking Review Stars` });
    await this.reviewStars.click();
}

async clickNewReview () {
    console.log({ message: `Click New Review` });
    await this.newReview.click();
}

async clickCloseReview () {
    console.log({ message: `Close Review` });
    await this.closeReview.click();
}


async sortFilter() {
    console.log({ message: `Selecting Sort Filter` });
    await this.sort.focus();
    await this.page.keyboard.press('Enter');
    await this.lowToHighSort.click();
    await this.sort.focus();
    await this.page.keyboard.press('Enter');
    await this.mostRecentSort.click();
}

async rightArrowPagniation () {
    console.log({ message: `Clicking Right Arrow Pagniation` });
    await this.rightArrow.scrollIntoViewIfNeeded();
    await this.rightArrow.click();
    await this.page.waitForTimeout(3000);
}
async leftArrowPagniation () {
    console.log({ message: `Clicking Left Arrow Pagniation` });
    await this.leftArrow.scrollIntoViewIfNeeded();
    await this.leftArrow.click();
    await this.page.waitForTimeout(3000);
}

async assertReviewNumber1 () {
    console.log({ message: `Asserting Review Number Page 1` });
    await expect(this.reviewNumber).toContainText("9 – 26");
}

async assertReviewNumber2 () {
    console.log({ message: `Asserting Review Number Page 2` });
    await this.page.waitForTimeout(3000);
    await expect(this.reviewNumber).toContainText("1 – 8");
}

async qtyIncrease () {
    console.log({ message: `Increasing QTY` });
    await this.qtyIncrement.click();
    await this.qtyIncrement.click();
    await this.qtyIncrement.click();
    expect(this.qty).toHaveValue('4');
}

async qtyDecrease () {
    console.log({ message: `Decreasing QTY` });
    await this.qtyDecrement.click();
    await this.qtyDecrement.click();
    await this.qtyDecrement.click();
    expect(this.qty).toHaveValue('1');
}

async clickAddToCart () {
    console.log({ message: `Click Add to Cart` });
    await this.addToCart.click();
    await this.cart.click();
}
}