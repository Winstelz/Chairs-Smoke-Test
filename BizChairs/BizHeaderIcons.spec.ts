import { test, expect } from '@playwright/test';



test('BizHeaderIcons', async ({ page }) => {
    //Navigate to Biz Chair site    
        await page.goto('https://www.bizchair.com/?_ab=0&_fd=0&_sc=1');
    //Click Search Icon, Type search, and Close
        const Search = page.locator("//button[@title='search']//span[1]");
        await Search.click();
        const SearchBar = page.locator("//input[@id='autocomplete-0-input']");
        await SearchBar.fill("cha");
        await page.waitForLoadState();
        await page.locator("//body//div//ra-header//div//ra-search-bar//button//span").click();
    //Click Inline Cart
        const Cart = page.getByLabel('cart', { exact: true });
        await Cart.click();
        const FirstLink =  page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Office']");
        expect(FirstLink).toContainText("Office");
        await FirstLink.click();
        expect(page.url()).toContain("/office");
    //Click Account Icon
        const Account = page.locator("(//a[@title='account'])[1]");
        await Account.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("shopify");




    });
