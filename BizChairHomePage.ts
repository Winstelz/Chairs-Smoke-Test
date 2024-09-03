import { expect, type Locator, type Page } from '@playwright/test';

export class BizChairHomePage {
    readonly page: Page;
    readonly Office: Locator;
    readonly Logo: Locator;
    readonly ExecutiveOffice: Locator;


constructor(page) {
    this.page = page;
    this.Office = page.locator("//span[@title='Office']//a[normalize-space()='Office']");
    this.Logo = page.locator("//img[@alt='BizChair Logo']");
    this.ExecutiveOffice = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Executive Office Chairs']");

}

    async gotoHomePage() {
        await this.page.goto('https://www.bizchair.com/?_ab=0&_fd=0&_sc=1');
    }

    async ClickLogo()   {
        await this.Logo.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('https://www.bizchair.com');
    }

    async ClickOffice() {
        await this.Office.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/office');
    }

    async HoverOffice () {
        await this.Office.hover();
        await this.ExecutiveOffice.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/executive-office-chairs');
    }
}