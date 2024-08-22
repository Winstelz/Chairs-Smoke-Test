import { test, expect } from '@playwright/test';



test('AdvantageInlineCart', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');
    //Navigate to PLP
        const ShopAll = page.locator("//span[@title='Banquet Chairs']//a[normalize-space()='Banquet Chairs']");
        await ShopAll.click();
        expect(page.url()).toContain("banquet-stack-chairs");
    //Click First Item
        const FirstItem = page.locator("//img[@alt='HERCULES Series Crown Back Stacking Banquet Chair - View 2']");
        await FirstItem.click();
        expect(page.url()).toContain("crown-back-stacking-banquet-chair");
    //Add Item to Cart
        const AddtoCart = page.locator("//button[normalize-space()='Add to Cart']");
        await AddtoCart.click();
    //Verify Product is in Cart
        


});