import { test, expect } from '@playwright/test';



test('BestChiavariPLP', async ({ page }) => {
    //Navigate to Best Chiavari site    
        await page.goto('https://www.bestchiavarichairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=161761132832');
//Click Chiavari Chairs Menu
    const ChiavairChairs = page.locator("//span[@title='Chiavari Chairs']//a[normalize-space()='Chiavari Chairs']");
    await ChiavairChairs.click(); 
    expect(page.url()).toContain('/collections/chiavari-chairs');
//Click Sort button Price low to high
    const Sort = page.locator("//select[@id='SortBy']");
    await Sort.selectOption("Price, low to high");
    await page.waitForTimeout(1000);
    const FirstItem = page.locator("//a[normalize-space()='Fabric Chiavari Chair Storage Cover']");
    expect(FirstItem).toContainText("Fabric Chiavari Chair Storage Cover");
//Click Color Family -> Gold
    const ColorFam = await page.locator("//button[normalize-space()='Color Family']");
    await ColorFam.isVisible();
    await ColorFam.click();
    const Gold = await page.locator("//label[contains(@for,'filter-p-m-filter-colors_gold')]//div[@class='ra-choice__checkmark set--inherit-focus']");
    await Gold.isVisible();
    await Gold.click();
    await page.waitForTimeout(2000);
//Click Finish -> Walnut Wood
    const Finish = await page.locator("//button[normalize-space()='Finish']");
    await Finish.isVisible();
    await Finish.click();
    const Walnut = await page.locator("//label[contains(@for,'filter-p-m-filter-finish_walnut-wood')]//div[contains(@class,'ra-choice__checkmark set--inherit-focus')]");
    await Walnut.isVisible();
    await Walnut.click();
//Clear Filter Pills
    const GoldPill = await page.locator('#CollectionActiveFilters').getByRole('button');
    await GoldPill.isVisible();
    await GoldPill.click();
    await page.waitForTimeout(1000);
    const ClearAll = await page.getByRole('button', { name: 'Clear All' });
    await ClearAll.isVisible();
    await ClearAll.click();
//Click Pagination
    const Page2 = await page.locator("//a[normalize-space()='2']");
    await Page2.isVisible();
    await Page2.click();
    expect(page.url()).toContain("page=2");
    await page.waitForLoadState();
//Click Pagination Left Arrow
    const LeftArrow = await page.locator("//a[@aria-label='Go to previous page']");
    await LeftArrow.isVisible();
    await LeftArrow.click();
expect(page.url()).toContain("page=1"); 
//Click Pagination Right Arrow
    const RightArrow = await page.locator("//a[@aria-label='Go to next page']");
    await RightArrow.isVisible();
    await RightArrow.click();
    expect(page.url()).toContain("page=2");
//Click on PDP
    await page.waitForLoadState();
    const PDPItem = await page.getByRole('link', { name: 'Kids Soft Fabric Chiavari Chair Cushion - View 1 Kids Soft Fabric Chiavari' })
    await PDPItem.isVisible();
    await PDPItem.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain("products/kids-soft-fabric-chiavari-chair-cushion-chair-and-event-accessories");

    




});