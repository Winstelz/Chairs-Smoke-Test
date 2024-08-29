import { test, expect } from '@playwright/test';




test('AdvantageCart', async ({ page }) => {
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
        await page.waitForTimeout(2000);
    //Verify Product is in Cart
        const Product = await page.locator("//a[normalize-space()='HERCULES Series Crown Back Stacking Banquet Chair']");
        await Product.isVisible();
        expect(Product).toHaveText("HERCULES Series Crown Back Stacking Banquet Chair");
    //Click Cart Page
        await page.getByLabel("button", {name: "View Cart"}).click();
        expect(page.url()).toContain("/cart");
    
    
   





        


});