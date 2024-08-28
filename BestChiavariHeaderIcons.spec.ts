import { test, expect } from '@playwright/test';



test('BestChiavariHeaderIcons', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.bestchiavarichairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=161761132832');
    //Click Search Icon, Type search, and Close
        const Search = page.locator("//button[@title='search']//span[1]");
        await Search.click();
        const SearchBar = page.locator("//input[@id='autocomplete-0-input']");
        await SearchBar.fill("cha");
        await page.waitForLoadState();
        await page.locator("//ra-search-bar[@class='header__search w-full justify-center grid-cols-5 py-12 bg-secondary-900 fixed top-0 left-0 right-0 max-md:!hidden grid']//span[1]").click();
    //Click Inline Cart
        const Cart = page.getByLabel('cart', { exact: true });
        await Cart.click();
        const FirstLink =  page.locator("//a[normalize-space()='Shop Chiavari Chairs']");
        expect(FirstLink).toContainText("Shop Chiavari Chairs");
        await page.locator("//span[@class='ra-icon p-1 cursor-pointer']").click();
    //Click Account Icon
        const Account = page.locator("(//a[@title='account'])[1]");
        await Account.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("shopify");




    });
