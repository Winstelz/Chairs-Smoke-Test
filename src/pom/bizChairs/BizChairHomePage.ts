import { expect, type Locator, type Page } from '@playwright/test';

export class BizChairHomePage {
    readonly page: Page;
    readonly Office: Locator;
    readonly Logo: Locator;
    readonly ExecutiveOffice: Locator;
    readonly Folding: Locator;
    readonly Resin: Locator;
    readonly Event: Locator;
    readonly FoldingChair: Locator;
    readonly Restaurant: Locator; 
    readonly IndoorDining: Locator;
    readonly Church: Locator;
    readonly Banquet: Locator;
    readonly Classroom: Locator;
    readonly StudentDesks: Locator;
    readonly Residential: Locator;
    readonly LivingRoom: Locator;


constructor(page) {
    this.page = page;
    this.Office = page.locator("//span[@title='Office']//a[normalize-space()='Office']");
    this.Logo = page.locator("//img[@alt='BizChair Logo']");
    this.ExecutiveOffice = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Executive Office Chairs']");
    this.Folding = page.locator("//span[@title='Folding']//a[normalize-space()='Folding']");
    this.Resin = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Resin Folding Chairs']");
    this.Event = page.locator("//span[@title='Event']//a[normalize-space()='Event']");
    this.FoldingChairs = page.locator("//ul[@aria-labelledby='event-menu']//a[@title='Folding Chairs'][normalize-space()='Folding Chairs']");
    this.Restaurant = page.locator("//span[@title='Restaurant']//a[normalize-space()='Restaurant']");
    this.IndoorDining = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Indoor Dining Chairs']");
    this.Church = page.locator("//span[@title='Church']//a[normalize-space()='Church']");
    this.Banquet = page.locator("//ul[@aria-labelledby='church-menu']//a[@title='Banquet Stack Chairs'][normalize-space()='Banquet Stack Chairs']");
    this.Classroom = page.locator("//span[@title='Classroom']//a[normalize-space()='Classroom']");
    this.StudentDesks = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Student Desks']");
    this.Residential = page.locator("//span[@title='Residential']//a[normalize-space()='Residential']");
    this.LivingRoom = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Living Room']");
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
    async ClickFolding() {
        await this.Folding.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/folding');
    }

    async ClickEvent () {
        await this.Event.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/event');
    }

    async ClickRestaurant () {
        await this.Restaurant.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/restaurant');
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

    async ClickResidential () {
        await this.Residential.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/collections/residential');
}


    async HoverOffice () {
        await this.Office.hover();
        await this.ExecutiveOffice.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/executive-office-chairs');
    }
    async HoverFolding () {
        await this.Folding.hover();
        await this.Resin.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/resin-folding-chairs');
    }
    async HoverEvent () {
        await this.Event.hover();
        await this.FoldingChairs.click();
        expect(this.page.url()).toContain('/collections/folding-chairs');
    }
    async HoverRestaurant () {
        await this.Restaurant.hover();
        await this.IndoorDining.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/indoor-restaurant-dining-chairs');
    }
    async HoverChurch () {
        await this.Church.hover();
        await this.Banquet.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/banquet-stack-chairs');
    }
    async HoverClassroom () {
        await this.Classroom.hover();
        await this.StudentDesks.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/student-desks');
    }
    async HoverResidential () {
        await this.Residential.hover();
        await this.LivingRoom.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain('/collections/living-room-furniture');
    }
}