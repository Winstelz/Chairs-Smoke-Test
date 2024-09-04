import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantageHomePage {
    readonly page: Page;
    readonly ShopAll: Locator;
    readonly Logo: Locator;
    readonly ChurchChairs: Locator;
    readonly BanquetChairs: Locator;
    readonly FoldEvent: Locator;
    readonly Dollies: Locator;
    readonly Resin: Locator;
    readonly Activity: Locator; 
    readonly Desks: Locator;
    readonly More: Locator;
    readonly Patio: Locator;
    readonly Classroom: Locator;
    readonly StudentDesks: Locator;
    readonly Office: Locator;
    readonly LivingRoom: Locator;


constructor(page) {
    this.page = page;
    this.ShopAll = page.locator("//span[@title='Shop All']//a[normalize-space()='Shop All']");
    this.Logo = page.locator("//img[@alt='Advantage Church Chairs Logo']");
    this.ChurchChairs = page.locator("//span[@title='Church Chairs']");
    this.BanquetChairs = page.locator("//span[@title='Banquet Chairs']");
    this.FoldEvent = page.locator("//span[@title='Folding & Event']//a[normalize-space()='Folding & Event']");
    this.Dollies =page.locator("//a[@class='text-base leading-4 tracking-wider flex flex-col'][normalize-space()='Church & Stack Chair Dollies']");
    this.Resin = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Resin Folding Chairs']");
    this.Activity = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Activity Sets']");
    this.Desks = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Desks']");
    this.More = page.locator("//span[@title='More']//a[@href='#'][normalize-space()='More']");
    this.Patio =  page.locator("//a[@class='text-base leading-4 tracking-wider flex flex-col'][normalize-space()='Patio & Outdoor']");
    this.Classroom = page.locator("//span[@title='Classroom']//a[normalize-space()='Classroom']");
    this.Office = page.locator("//span[@title='Office & Reception']//a[normalize-space()='Office & Reception']");

}  


    async gotoHomePage() {
        await this.page.goto('https://www.advantagechurchchairs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=164106633506');
    }

    async ClickLogo()   {
        await this.Logo.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('https://www.advantagechurchchairs.com/');
    }

    async ClickShopAll() {
        await this.ShopAll.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/shop-all');
    }
    async ClickChurchChairs() {
        await this.ChurchChairs.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/church-stack-chairs');
    }

    async ClickBanquetChairs () {
        await this.BanquetChairs.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/banquet-stack-chairs');
    }

    async ClickFoldEvent () {
        await this.FoldEvent.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/folding-event');
    }
    async ClickChurch () {
        await this.Church.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/church');
    }


    async ClickClassroom () {
        await this.Classroom.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/classroom');
}

    async ClickOffice () {
        await this.Office.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/office');
}


    async HoverChurchChairs () {
        await this.ChurchChairs.hover();
        await this.Dollies.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/church-banquet-stack-chair-dollies');
    }
    async HoverFoldEvent () {
        await this.FoldEvent.hover();
        await this.Resin.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/resin-folding-chairs');
    }
    async HoverClassroom () {
        await this.Classroom.hover();
        await this.Activity.click();
        expect(this.page.url()).toContain('/collections/classroom-activity-table-sets');
    }
    async HoverOffice () {
        await this.Office.hover();
        await this.Desks.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/desks');
    }
    async HoverMore () {
        await this.More.hover();
        await this.Patio.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/patio-outdoor');
    }
    

}