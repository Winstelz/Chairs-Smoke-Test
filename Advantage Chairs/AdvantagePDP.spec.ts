import { test, expect } from '@playwright/test';



test('AdvantagePDP', async ({ page }) => {
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
    //Click Review Stars    
        const ReviewStars = page.locator("//div[@class='bv_stars_component_container']//*[name()='svg'][3]/*[name()='polygon'][1]");
        await ReviewStars.click();
    //Click New Review
        const NewReview = page.locator("div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)");
        await NewReview.click();
        const CloseReview = page.locator(".ips__sc-hn2bh6-0.cbsYNK");
        await CloseReview.click();
    //Sort Reviews 
        const Sort = page.locator("#bv-dropdown-select-reviews");
        await Sort.hover();
        await Sort.click("Lowest to Highest Rating");
        await Sort.click("Most Recent");
    //Review Pagination Rigth
        const RightArrow = page.getByRole('button', { name: 'Next Reviews' });
        const ReviewNumber = page.locator(".bv-rnr__sc-11r39gb-2.ghmrMg");
        await RightArrow.click();
        await page.waitForTimeout(3000);
        await ReviewNumber.isVisible();
        expect(ReviewNumber).toContainText("9 – 38");
    //Review Pagination left
        const LeftArrow = page.getByRole('button', { name: 'Previous Reviews' });
        await LeftArrow.click();
        await page.waitForTimeout(3000);
        await ReviewNumber.isVisible();
        expect(ReviewNumber).toContainText("1 – 8");
    //Qty Increase
        const QTYInc  = page.locator("//button[@aria-label='Increment Quantity']//*[name()='svg']");
        const QTY = page.locator("//input[@type='number']");
        await QTYInc.click();
        await QTYInc.click();
        await QTYInc.click();
        expect(QTY).toHaveValue('4');
    //Qty Decrease
        const QTYDec  = page.locator("//button[@aria-label='Decrement Quantity']//*[name()='svg']");
        await QTYDec.click();
        await QTYDec.click();
        await QTYDec.click();
        expect(QTY).toHaveValue('1');
    //Add Item to Cart
        const AddtoCart = page.locator("//button[normalize-space()='Add to Cart']");
        await AddtoCart.click();
        const Cart = page.locator("//span[@class='mr-2 font-light text-white text-e19 leading-120']");
        await Cart.click();



    




});