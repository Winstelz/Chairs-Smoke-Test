import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantagePDP {
    readonly page: Page;
    readonly Description: Locator;
    readonly DescrContent: Locator;
    readonly PDPHeader: Locator;
    readonly PDPPrice:  Locator;
    readonly ReviewStars: Locator;
    readonly NewReview: Locator;
    readonly CloseReview: Locator;
    readonly Sort: Locator;
    readonly RightArrow: Locator;
    readonly ReviewNumber: Locator;
    readonly LeftArrow: Locator;
    readonly QTYInc: Locator;
    readonly QTY: Locator;
    readonly QTYDec: Locator;
    readonly AddToCart: Locator;
    readonly Cart: Locator;
    
    
    
   
    


    constructor(page) {
        this.page = page;
        this.Description = page.locator("//button[normalize-space()='Description']");
        this.DescrContent = page.locator("//div[@id='content-description']");
        this.PDPHeader = page.locator("//h1[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.PDPPrice = page.locator("//div[@class='h3 flex-col items-end hidden md:flex']//div[@class='h3 text-tertiary-900'][normalize-space()='$38.99']");
        this.ReviewStars = page.locator("//div[@class='bv_stars_component_container']//*[name()='svg']").nth(0);
        this.NewReview = page.locator("div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > svg:nth-child(1)");
        this.CloseReview = page.locator(".ips__sc-hn2bh6-0.cbsYNK");
        this.Sort = page.locator("#bv-dropdown-select-reviews");
        this.RightArrow = page.getByRole('button', { name: 'Next Reviews' });
        this.ReviewNumber = page.locator(".bv-rnr__sc-11r39gb-2.ghmrMg");
        this.LeftArrow = page.getByRole('button', { name: 'Previous Reviews' });
        this.QTYInc = page.locator("//button[@aria-label='Increment Quantity']//*[name()='svg']");
        this.QTY = page.locator("//input[@type='number']");
        this.QTYDec = page.locator("//button[@aria-label='Decrement Quantity']//*[name()='svg']");
        this.AddToCart = page.locator("//button[normalize-space()='Add to Cart']");
        this.Cart = page.locator("//span[@class='mr-2 font-light text-white text-e19 leading-120']");
    
    }


async ClickDescription () {
    await this.Description.click();
    expect(this.DescrContent).toContainText("The Molded Foam Multipurpose Church Chair - 18.5 in. Wide provides a durable seating solution for your fellowship hall or convention center. This comfortably padded stack chair not only satisfies seating in Churches, but work well in hotel lobbies, banquet halls and conference facilities.");
}
async VerifyPDPHeader () {
    expect(this.PDPHeader).toContainText("Advantage Multipurpose Church Chairs - 18.5 in. Wide");
}

async VerifyPDPPrice () {
    expect(this.PDPPrice).toContainText("$38.99");   
}

async ClickReviewStars () {
    await this.ReviewStars.click();
}

async ClickNewReview () {
    await this.NewReview.click();
}

async ClickCloseReview () {
    await this.CloseReview.click();
}

async SortFilter () {
    await this.Sort.hover();
    await this.Sort.click("Lowest to Highest Rating");
    await this.Sort.click("Most Recent");
}

async RightArrowPagniation () {
    await this.RightArrow.click();
    await this.page.waitForTimeout(3000);
}
async LeftArrowPagniation () {
    await this.LeftArrow.click();
    await this.page.waitForTimeout(3000);
}
    
async ReviewNumber1 () {
    await this.ReviewNumber.isVisible();
    expect(this.ReviewNumber).toContainText("9 – 23");
}

async ReviewNumber2 () {
    await this.page.waitForTimeout(3000);
    await this.ReviewNumber.isVisible();
    expect(this.ReviewNumber).toContainText("1 – 8");
}
async QTYIncrease () {
    await this.QTYInc.click();
    await this.QTYInc.click();
    await this.QTYInc.click();
    expect(this.QTY).toHaveValue('4');
}

async QTYDecrease () {
    await this.QTYDec.click();
    await this.QTYDec.click();
    await this.QTYDec.click();
    expect(this.QTY).toHaveValue('1');
}

async AddtoCart () {
    await this.AddToCart.click();
    await this.Cart.click();
}

}