import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantagePLP {
    readonly page: Page;
    readonly Sort: Locator;
    readonly FirstItem: Locator
    readonly ColorFam: Locator
    readonly ShowMore: Locator
    readonly Green: Locator;
    readonly Finish: Locator;
    readonly Copper: Locator;
    readonly GreenPill: Locator;
    readonly ClearAll: Locator
    readonly Page2: Locator;
    readonly RightArrow: Locator;
    readonly LeftArrow: Locator;
    readonly PDPItem: Locator;
    


    constructor(page) {
        this.page = page;
        this.Sort = page.locator("//select[@id='SortBy']");
        this.FirstItem = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.ColorFam = page.locator("//button[normalize-space()='Color Family']");
        this.ShowMore = page.locator("//div[@data-toggle-filter='color-family']");
        this.Green = page.locator("//label[contains(@for,'filter-p-m-filter-colors_green')]//div[contains(@class,'ra-choice__checkmark set--inherit-focus')]");
        this.Finish = page.locator("//button[normalize-space()='Finish']");
        this.Copper = page.locator("//span[contains(@class,'ra-choice__label')][normalize-space()='Copper Vein Metal']");
        this.GreenPill = page.locator("//button[contains(@data-param,'filter.p.m.filter.colors')]//span[contains(@class,'ra-icon')]//*[name()='svg']");
        this.ClearAll = page.locator("//button[normalize-space()='Clear All']");   
        this.Page2 = page.locator("//a[normalize-space()='2']"); 
        this.RightArrow = page.locator("//a[@aria-label='Go to next page']");
        this.LeftArrow = page.locator("//a[@aria-label='Go to previous page']");
        this.PDPItem = page.locator("//img[@alt=\"Embroidered 21''W Church Chair in Empire Fabric with Book Rack - Gold Vein Frame - View 2\"]");
    
    }


async Sorting () {
    await this.Sort.selectOption( {label: "Price, low to high"});
    expect(this.FirstItem).toContainText("Advantage Multipurpose Church Chairs");
}

async ColorFilter(){
    await this.ColorFam.isVisible();
    await this.ColorFam.click();
    await this.ShowMore.isVisible();
    await this.ShowMore.click();
    await this.Green.isVisible();
    await this.Green.click();
    await this.page.waitForTimeout(2000);
}

async FinishFilter () {
    await this.Finish.click();
    await this.Copper.isVisible();
    await this.Copper.click();
}

async ClearColorFilter () {
    await this.GreenPill.isVisible();
    await this.GreenPill.click();
}
async ClearAllFilter () {
    await this.ClearAll.isVisible();
    await this.ClearAll.click();
}

async ClickPagination () {
    await this.Page2.isVisible();
    await this.Page2.click();
    expect(this.page.url()).toContain("page=2");
}

async ClickRightArrow () {
    await this.RightArrow.isVisible();
    await this.RightArrow.click();
    expect(this.page.url()).toContain("page=3");
}
async ClickLeftArrow () {
    await this.LeftArrow.isVisible();
    await this.LeftArrow.click();
    expect(this.page.url()).toContain("page=2");
}
async ClickPDP () {
    await this.page.waitForLoadState();
    await this.PDPItem.isVisible();
    await this.PDPItem.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain("21w-church-chair-in-galaxy-fabric");
}


}