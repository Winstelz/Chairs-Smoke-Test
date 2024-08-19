import { test, expect } from '@playwright/test';



test('AnnoucementBar', async ({ page }) => {
    //Navigate to Hydrogen site    
        await page.goto('https://www.bestchiavarichairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=161761132832');
//Click through the Bar
    const RightArrow = await page.locator("//div[@aria-label='Next slide']//span[1]");
    const LeftArrow = await page.locator("//div[@aria-label='Previous slide']//span[1]");
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