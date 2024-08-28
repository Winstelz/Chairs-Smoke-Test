import { test, expect } from '@playwright/test';



test('BestChiavariHomePageHeader', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.bestchiavarichairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=161761132832');

//Click Logo and verify on homepage
    const Logo = await page.locator("//img[@alt='Best Chiavari Chairs Logo']");
    await Logo.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('https://www.bestchiavarichairs.com/');
//Click Chiavari Chairs Menu
    const Chiavari = page.locator("//span[@title='Chiavari Chairs']//a[normalize-space()='Chiavari Chairs']");
    await Chiavari.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/chiavari-chairs');
//Click Tables Menu
    const Tables = page.locator("//span[@title='Tables']//a[normalize-space()='Tables']");
    await Tables.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/banquet-cocktail-and-dining-tables');
//Click Folding Chairs Menu
    const FoldingChairs = page.locator("//span[@title='Folding Chairs']//a[normalize-space()='Folding Chairs']");
    await FoldingChairs.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/folding-chairs');
//Click Cross Back Chairs Menu
    const CrossBack = page.locator("//span[@title='Cross Back Chairs']//a[normalize-space()='Cross Back Chairs']");
    await CrossBack.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('/collections/cross-back-dining-event-chairs');
//Click Banquet Chairs Menu
    const BanquetChairs = page.locator("//span[@title='Banquet Chairs']//a[normalize-space()='Banquet Chairs']");
    await BanquetChairs.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/banquet-stack-chairs');
//Click Ghost Chairs Menu
    const GhostChairs = page.locator("//span[@title='Ghost Chairs']//a[normalize-space()='Ghost Chairs']");
    await GhostChairs.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/ghost-chairs-stools');
//Click Dollies & Carts
    const Dollies = page.locator("//span[@title='Dollies & Carts']//a[normalize-space()='Dollies & Carts']");
    await Dollies.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/dollies-carts');

//Hover Chiavari Chairs Menu & Click Wood Chiavari Chairs
    await Chiavari.hover();
    const WoodChiavari = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Wood Chiavari Chairs']");
    await WoodChiavari.click();
    await page.waitForLoadState('load', { timeout: 60000 });
    expect(page.url()).toContain('/collections/wood-chiavari-chairs');
//Hover Tables Menu & Click Wood Folding Tables
    await Tables.hover();
    const WoodFolding = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Wood Folding Tables']");
    await WoodFolding.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/wood-folding-tables');
//Hover Folding Chairs Menu & Click Resin Folding Chairs
    await FoldingChairs.hover();
    const Resin = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Resin Folding Chairs']");
    await Resin.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/resin-folding-chairs');
//Hover More For Your Venue Menu & Click
    const More = page.locator("//span[@title='More For Your Venue']//a[@href='#'][normalize-space()='More For Your Venue']");
    await More.hover();
    const PatioSets = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Commercial Patio Seating']");
    await PatioSets.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/commercial-patio-seating');

});