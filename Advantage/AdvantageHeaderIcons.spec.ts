import { test, expect } from '@playwright/test';



test('AdvantageHeaderIcons', async ({ page }) => {
    //Navigate to Advantage site    
        await page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');
    //Click Search Icon, Type search, and Close
        const Search = page.locator("//button[@title='search']");
        await Search.click();
        const SearchBar = page.locator("//input[@id='autocomplete-0-input']");
        await SearchBar.fill("cha");
        await page.waitForLoadState();
        await page.locator("//ra-search-bar[@class='header__search w-full justify-center grid-cols-5 py-12 bg-tertiary-800 fixed top-0 left-0 right-0 max-md:!hidden grid']//span[1]").click();
    //Click Inline Cart
        const Cart = page.locator("//body/div[@id='shopify-section-sections--21855799083298__header']/ra-header[@class='header flex items-center justify-center fixed w-full left-0 transition-all duration-300 z-10 flex-col max-md:py-4 border-b !border-grey-200']/div[@class='header__wrapper flex h-full flex-wrap justify-between md:justify-start w-full container max-md:!px-3']/div[@class='header__inner w-full justify-between items-center flex-col md:pt-5 max-md:!flex flex']/div[@class='flex items-center w-full max-md:justify-between']/div[@class='m-0 md:ml-auto']/div[@class='flex flex-row gap-6']/ul[@class='flex justify-center items-center h-full']/li[@class='header__action-item flex justify-center items-center h-full mr-4 last:mr-0 leading-[0] relative']/ra-cart-toggle/a[@title='cart']/span[1]//*[name()='svg']");
        await Cart.click();
        const FirstLink =  page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
        expect(FirstLink).toContainText("Church Chairs");
        await page.locator("//span[@class='ra-icon p-1 cursor-pointer']").click();
    //Click Account Icon
        const Account = page.locator("(//a[@title='account'])[1]");
        await Account.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("shopify");




    });
