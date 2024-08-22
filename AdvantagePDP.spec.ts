import { test, expect } from '@playwright/test';



test('AdvantagePDP', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');
    //Navigate to PLP
        const ShopAll = page.locator("//span[@title='Banquet Chairs']//a[normalize-space()='Banquet Chairs']");
        await ShopAll.click();
        expect(page.url()).toContain("banquet-stack-chairs");
    //Click First Item
        const FirstItem = page.locator("//img[@alt='HERCULES Series Crown Back Stacking Banquet Chair - View 2']");
        await FirstItem.click();
        expect(page.url()).toContain("crown-back-stacking-banquet-chair");
    //Click Description
        const Description = page.locator("//button[normalize-space()='Description']");
        await Description.click();
        const DescrContent = page.locator("//div[@id='content-description']");
        expect(DescrContent).toContainText("Make an impressive presentation in your banquet hall when clients come to visit your facility with these ballroom chairs. Built for the commercial industry these popular crown back banquet chairs have been tested to hold up to 500 pounds. With a high seating capacity these stack chairs are perfect for the event rental business.");
     // Verify PDP Header
        const PDPHeader = page.locator("//h1[normalize-space()='HERCULES Series Crown Back Stacking Banquet Chair']");
        expect(PDPHeader).toContainText("HERCULES Series Crown Back Stacking Banquet Chair");
    // Verify PDP Price
        const PDPPrice = page.locator("//div[@class='h3 flex-col items-end hidden md:flex']//div[@class='h3 text-tertiary-900'][normalize-space()='$31.99']");
        expect(PDPPrice).toContainText("$31.99");   




});