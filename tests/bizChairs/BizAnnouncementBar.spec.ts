import { test, expect } from '@playwright/test';



test('AnnoucementBar', async ({ page }) => {
    //Navigate to BizChairs site    
        await page.goto('https://www.bizchair.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=165139382574');
//Click through the Bar
    const RightArrow = await page.locator("//div[@class='sections--22013028729134__preheader swiper-button-next -right-2.5']");
    const LeftArrow = await page.locator("//div[@class='sections--22013028729134__preheader swiper-button-prev -left-2.5']");
    await RightArrow.click();
    await page.waitForTimeout(2000);
    await RightArrow.click();
    await page.waitForTimeout(2000);
    await LeftArrow.click();
    await page.waitForTimeout(2000);
    await LeftArrow.click();
    await page.waitForTimeout(2000);
    await RightArrow.click();
    await page.waitForTimeout(2000);





});