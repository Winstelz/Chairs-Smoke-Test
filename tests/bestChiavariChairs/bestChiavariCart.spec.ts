import { test, expect } from '@playwright/test';




test('BestChiavariCart', async ({ page }) => {
    //Navigate to Best Chiavari site    
        await page.goto('https://www.bestchiavarichairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=161761132832');
    //Navigate to PLP
    const ShopAll = page.locator("//span[@title='Banquet Chairs']//a[normalize-space()='Banquet Chairs']");
    await ShopAll.click();
    expect(page.url()).toContain("banquet-stack-chairs");
//Click First Item
    const FirstItem = page.locator("//img[@alt='HERCULES Series Crown Back Stacking Banquet Chair - View 2']");
    await FirstItem.click();
    expect(page.url()).toContain("crown-back-stacking-banquet-chair");;
//Add Item to Cart
    const AddtoCart = page.locator("//button[normalize-space()='Add to Cart']");
    await AddtoCart.click();
    await page.waitForTimeout(2000);
//Verify Product is in Cart
        const Product = await page.locator("//a[normalize-space()='HERCULES Series Crown Back Stacking Banquet Chair']");
        await Product.isVisible();
        await page.waitForTimeout(2000);
        expect(Product).toHaveText("HERCULES Series Crown Back Stacking Banquet Chair");
//Click Cart Page
        await page.locator("//span[normalize-space()='View Cart']").click();
        expect(page.url()).toContain("/cart");
 //Increase QTY
    const QTYIncr = page.locator("//button[@aria-label='Increment Quantity']");
    await QTYIncr.click();
    await page.waitForTimeout(1000);
    await QTYIncr.click();
    await page.waitForTimeout(1000);
    await QTYIncr.click();
    await page.waitForTimeout(1000);
    await QTYIncr.click();
    await page.waitForTimeout(2000);
    const QTY = page.locator("(//input[@type='number'])[1]");
    await expect(QTY).toHaveValue("5");
//Decrease QTY
    const QTYDecr = page.locator("//button[@aria-label='Decrement Quantity']");
    await QTYDecr.click();
    await page.waitForTimeout(1000);
    await QTYDecr.click();
    await page.waitForTimeout(2000);
    await expect(QTY).toHaveValue("3");
//Input QTY
    await QTY.click();
    await QTY.fill("10");
    await page.waitForTimeout(2000);
    await expect(QTY).toHaveValue("10"); 
//You May Also Like Carousel Clicking
    const RightArrow = page.locator("//button[@aria-label='Next slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
    await RightArrow.click();
    await RightArrow.click();
    const LeftArrow = page.locator("//button[@aria-label='Previous slide']//span[@class='ra-icon ra-icon--sm']//*[name()='svg']");
    await LeftArrow.click();
    await LeftArrow.click(); 
//Calculate Shipping
    await page.locator("//span[@class='ra-icon']//*[name()='svg']").click();
    const Zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
    await Zip.click();
    await Zip.fill("45014");
    const Address = page.locator("//select[@name='addressType']");
    await Address.click();
    await Address.selectOption('Residential');
    await page.locator("//button[normalize-space()='Calculate Shipping']").click();
    await page.waitForTimeout(2000);
//Click Checkout
    await page.locator("//button[normalize-space()='Proceed to Checkout']").click();
    await page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//a[@class='s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 s2kwpi7 s2kwpi5 _1fragemwl']").click();
//Click Cart Page
   await page.goto("https://www.bestchiavarichairs.com/cart");
   await page.waitForLoadState();
 //Delete Item from Inline Cart
    await page.locator("//button[@class='ra-button ra-icon-button ra-button--tertiary ra-icon-button--md hover:!border-primary-600 !border-primary-800 group !w-//*[name()='svg']").click();
    //const EmptyLink = await page.locator("//a[normalize-space()='Shop Chiavari Chairs']");
   // await EmptyLink.isVisible();
    //await EmptyLink.click();
   // await page.waitForLoadState();
   // expect(page.url()).toContain("/collections/chiavari-chairs");


    
   





        


});