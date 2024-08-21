import { test, expect } from '@playwright/test';



test('AdvantagePLP', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');
//Click Church Chairs Menu
    const ChurchChairs = page.locator("//span[@title='Church Chairs']");
    await ChurchChairs.click(); 
    expect(page.url()).toContain('/collections/church-stack-chairs');
//Click Sort button Price low to high
    const Sort = page.locator("//select[@id='SortBy']");
    await Sort.inputValue("Price, low to high");
    const FirstItem = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
    expect(FirstItem).toContainText("Advantage Multipurpose Church Chairs");
//Click Color Family -> Green
    const ColorFam = await page.locator("//button[normalize-space()='Color Family']");
    await ColorFam.isVisible();
    await ColorFam.click();
    const ShowMore = await page.locator("//div[@data-toggle-filter='color-family']");
    await ShowMore.isVisible();
    await ShowMore.click();
    const Green = await page.locator("//label[contains(@for,'filter-p-m-filter-colors_green')]//div[contains(@class,'ra-choice__checkmark set--inherit-focus')]");
    await Green.isVisible();
    await Green.click();
    await page.waitForTimeout(2000);
//Click Finish -> Copper Vein Metal
    const Finish = await page.locator("//button[normalize-space()='Finish']");
    await Finish.isVisible();
    await Finish.click();
    const Copper = await page.locator("//span[contains(@class,'ra-choice__label')][normalize-space()='Copper Vein Metal']");
    await Copper.isVisible();
    await Copper.click();
//Clear Filter Pills
    const GreenPill = await page.locator("//button[contains(@data-param,'filter.p.m.filter.colors')]//span[contains(@class,'ra-icon')]//*[name()='svg']");
    await GreenPill.click();
    const ClearAll = await page.locator("//button[normalize-space()='Clear All']");
    await ClearAll.click();
//Click Pagination
    const Page2 = await page.locator("//a[normalize-space()='2']");
    await Page2.isVisible();
    await Page2.click();
    expect(page.url()).toContain("page=2");
//Click Pagination Right Arrow
    const RightArrow = await page.locator("//body/main[@role='main']/div[@id='shopify-section-template--22515541213474__product-grid']/div[@id='ra-collection-section']/div[@class='flex justify-center']/div[@id='collectionMain']/div[1]");
    await RightArrow.isVisible();
    await RightArrow.click();
    expect(page.url()).toContain("page=3");

    




});