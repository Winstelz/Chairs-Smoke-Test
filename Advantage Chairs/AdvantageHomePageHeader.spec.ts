import { test, expect } from '@playwright/test';



test('AdvantageHomePageHeader', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');

//Click Logo and verify on homepage
    const Logo = await page.locator("//img[@alt='Advantage Church Chairs Logo']");
    await Logo.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('https://www.advantagechurchchairs.com/');
//Click Shop All Menu
    const ShopAll = page.locator("//span[@title='Shop All']//a[normalize-space()='Shop All']");
    await ShopAll.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/shop-all');
//Click Church Chairs Menu
    const ChurchChairs = page.locator("//span[@title='Church Chairs']");
    await ChurchChairs.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/church-stack-chairs');
//Click Banquet Chairs Menu
    const BanquetChairs = page.locator("//span[@title='Banquet Chairs']");
    await BanquetChairs.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/banquet-stack-chairs');
//Click Folding & Event Menu
    const FoldEvent = page.locator("//span[@title='Folding & Event']//a[normalize-space()='Folding & Event']");
    await FoldEvent.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('/collections/folding-event');
//Click Classroom Menu
    const Classroom = page.locator("//span[@title='Classroom']//a[normalize-space()='Classroom']");
    await Classroom.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/classroom');
//Click Office & Reception Menu
    const Office = page.locator("//span[@title='Office & Reception']//a[normalize-space()='Office & Reception']");
    await Office.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/office');
//Hover Church Chairs Menu & Click Church & Stack Chairs Dollies
    await ChurchChairs.hover();
    const Dollies = page.locator("//a[@class='text-base leading-4 tracking-wider flex flex-col'][normalize-space()='Church & Stack Chair Dollies']");
    await Dollies.click();
    await page.waitForLoadState('load', { timeout: 60000 });
    expect(page.url()).toContain('/collections/church-banquet-stack-chair-dollies');
//Hover Folding & Event Menu & Click Resin Folding Chairs
    await FoldEvent.hover();
    const Resin = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Resin Folding Chairs']");
    await Resin.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/resin-folding-chairs');
//Hover Classroom Menu & Click Activity Set
    await Classroom.hover();
    const Activity = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Activity Sets']");
    await Activity.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/classroom-activity-table-sets');
//Hover Office Menu & Click Desks
    await Office.isVisible();
    await Office.hover();
    const Desks = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Desks']");
    await Desks.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/desks');
//Hover More Menu & Click Patio & Outdoor
    const More = page.locator("//span[@title='More']");
    await More.hover();
    const Patio = page.locator("//a[@class='text-base leading-4 tracking-wider flex flex-col' and normalize-space()='Patio & Outdoor']");
    await Patio.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/patio-outdoor');
});