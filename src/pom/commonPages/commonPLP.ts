import { expect, type Locator, type Page } from '@playwright/test';

export class CommonPLP {
    readonly page: Page;

    readonly sort: Locator;
    readonly firstItem: Locator
    readonly colorFam: Locator
    readonly showMore: Locator
    readonly green: Locator;
    readonly finish: Locator;
    readonly copperVeinMetal: Locator;
    readonly greenPill: Locator;
    readonly clearFinish: Locator;
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
        this.copperVeinMetal = page.locator("//span[contains(@class,'ra-choice__label')][normalize-space()='Copper Vein Metal']");
        this.greenPill = page.locator("//button[contains(@data-param,'filter.p.m.filter.colors')]");
        this.clearFinish = page.locator("//button[contains(@data-param,'filter.p.m.filter.finish')]");
        this.clearAll = page.locator("//button[normalize-space()='Clear All']");   
        this.page2 = page.locator("a[aria-label='Page 2']"); 
        this.rightArrow = page.locator("//a[@aria-label='Go to next page']");
        this.leftArrow = page.locator("//a[@aria-label='Go to previous page']");
        this.pdpItem = page.getByRole('img', { name: /HERCULES Series 21"W Stacking Wood Accent Arm Church Chair - View 2/i })
    
    }


async selectSorting (text:string, firstItem: Locator) {
    console.log({ message: "Sorting...." });
    await this.sort.selectOption( {label: "Price, low to high"});
    expect(firstItem).toContainText(text);
    await this.sort.selectOption( {label: "Best selling"});
}

async selectColorFilter(){
    console.log({ message: "Filtering by Colors...." });
    await expect(this.colorFam).toBeVisible();
    await this.colorFam.click();
    await expect(this.showMore).toBeVisible();
    //wait so it does not put up are you a robot prompt
    await this.page.waitForTimeout(5000);
    await this.page.mouse.click(0, 0);  
    await this.showMore.click();
    await expect(this.green).toBeVisible();
    await this.green.click();
    await this.page.waitForTimeout(2000);
}

async clickingFinishFilter () {
    console.log({ message: "Filtering by Finish...." });
    await this.finish.click();
    await expect(this.copperVeinMetal).toBeVisible();
    await this.copperVeinMetal.click();
}

async clearColorFilter () {
    console.log({ message: "Clearing Color Filter...." });
    //wait so it does not put up are you a robot prompt
    await this.page.waitForTimeout(5000);
    await this.page.mouse.click(0, 0);  
    await this.greenPill.click();
}


async clearFinishFilter () {
    console.log({ message: "Clearing Finish Filter...." });
    await this.page.waitForTimeout(5000); // consider replacing with a proper wait condition later
    await this.page.mouse.click(0, 0);
    await this.clearFinish.first().click();
}
async clearAllFilter () {
    console.log({ message: "Clearing All Filters...." });
    await this.clearAll.click();
}

async clickPagination() {
  console.log({ message: "Clicking Pagination...." });

  
  // Trigger any lazy loading first
  await this.page.waitForLoadState('networkidle');

  // Scroll an element close to pagination into view
  await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await this.page2.scrollIntoViewIfNeeded();

  await this.page2.waitFor({ state: 'visible', timeout: 30000 });
  await this.page2.click();
  await expect(this.page).toHaveURL(/page=2/);
}

async clickRightArrow () {
    console.log({ message: "Clicking Right Arrow...." });
    await this.rightArrow.click();
    expect(this.page.url()).toContain("page=3");
}
async clickLeftArrow () {
    console.log({ message: "Clicking Left Arrow...." });
    await this.leftArrow.click();
    expect(this.page.url()).toContain("page=2");
}
async clickPDP (pdpItem: Locator, url: string) {
    console.log({ message: "Clicking PDP...." });
    await this.page.waitForLoadState();
    await pdpItem.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain(url);
}


}