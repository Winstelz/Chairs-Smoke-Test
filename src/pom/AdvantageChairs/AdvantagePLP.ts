import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantagePLP {
    readonly page: Page;
    readonly sort: Locator;
    readonly firstItem: Locator
    readonly colorFam: Locator
    readonly showMore: Locator
    readonly green: Locator;
    readonly finish: Locator;
    readonly copper: Locator;
    readonly greenPill: Locator;
    readonly clearAll: Locator
    readonly page2: Locator;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly pdpItem: Locator;
    


    constructor(page: any) {
        this.page = page;
        this.sort = page.locator("//select[@id='SortBy']");
        this.firstItem = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.colorFam = page.locator("//button[normalize-space()='Color Family']");
        this.showMore = page.locator("//div[@data-toggle-filter='color-family']");
        this.green = page.locator("//label[contains(@for,'filter-p-m-filter-colors_green')]//div[contains(@class,'ra-choice__checkmark set--inherit-focus')]");
        this.finish = page.locator("//button[normalize-space()='Finish']");
        this.copper = page.locator("//span[contains(@class,'ra-choice__label')][normalize-space()='Copper Vein Metal']");
        this.greenPill = page.locator("//button[contains(@data-param,'filter.p.m.filter.colors')]//span[contains(@class,'ra-icon')]//*[name()='svg']");
        this.clearAll = page.locator("//button[normalize-space()='Clear All']");   
        this.page2 = page.locator("//a[normalize-space()='2']"); 
        this.rightArrow = page.locator("//a[@aria-label='Go to next page']");
        this.leftArrow = page.locator("//a[@aria-label='Go to previous page']");
        this.pdpItem = page.locator("//img[@alt=\"Embroidered 21''W Church Chair in Empire Fabric with Book Rack - Gold Vein Frame - View 2\"]");
    
    }


async Sorting () {
    await this.sort.selectOption( {label: "Price, low to high"});
    expect(this.firstItem).toContainText("Advantage Multipurpose Church Chairs");
    await this.sort.selectOption( {label: "Best selling"});
}

async ColorFilter(){
    await this.colorFam.isVisible();
    await this.colorFam.click();
    await this.showMore.isVisible();
    await this.showMore.click();
    await this.green.isVisible();
    await this.green.click();
    await this.page.waitForTimeout(2000);
}

async FinishFilter () {
    await this.finish.click();
    await this.copper.isVisible();
    await this.copper.click();
}

async ClearColorFilter () {
    await this.greenPill.isVisible();
    await this.greenPill.click();
}
async ClearAllFilter () {
    await this.clearAll.isVisible();
    await this.clearAll.click();
}

async ClickPagination () {
    await this.page2.isVisible();
    await this.page2.click();
    expect(this.page.url()).toContain("page=2");
}

async ClickRightArrow () {
    await this.rightArrow.isVisible();
    await this.rightArrow.click();
    expect(this.page.url()).toContain("page=3");
}
async ClickLeftArrow () {
    await this.leftArrow.isVisible();
    await this.leftArrow.click();
    expect(this.page.url()).toContain("page=2");
}
async ClickPDP () {
    await this.page.waitForLoadState();
    await this.pdpItem.isVisible();
    await this.pdpItem.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain("21w-church-chair-in-galaxy-fabric");
}


}