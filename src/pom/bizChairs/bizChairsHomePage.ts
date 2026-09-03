import { expect, type Locator, type Page } from '@playwright/test';
import { STORE_URLS } from '../../config/urls';

export class BizChairsHomePage {
    readonly page: Page;
    readonly bannerContainer: Locator;
    readonly office: Locator;
    readonly logo: Locator;
    readonly executiveOffice: Locator;
    readonly folding: Locator;
    readonly resin: Locator;
    readonly event: Locator;
    readonly foldingChairs: Locator;
    readonly restaurant: Locator; 
    readonly indoorDining: Locator;
    readonly church: Locator;
    readonly churchChairs: Locator;
    readonly classroom: Locator;
    readonly studentDesks: Locator;
    readonly residential: Locator;
    readonly livingRoom: Locator;


constructor(page: any) {
    this.page = page;
    this.bannerContainer = page.locator('#shopify-section-sections--23615860834606__preheader');
    this.office = page.locator("//span[@title='Office']//a[normalize-space()='Office']");
    this.logo = page.locator("//img[@alt='BizChair Logo']");
    this.executiveOffice = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Executive Office Chairs']");
    this.folding = page.locator("//span[@title='Folding']//a[normalize-space()='Folding']");
    this.resin = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Resin Folding Chairs']");
    this.event = page.locator("//span[@title='Event']//a[normalize-space()='Event']");
    this.foldingChairs = page.locator("//ul[@aria-labelledby='event-menu']//a[@title='Folding Chairs'][normalize-space()='Folding Chairs']");
    this.restaurant = page.locator("//span[@title='Restaurant']//a[normalize-space()='Restaurant']");
    this.indoorDining = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Indoor Dining Chairs']");
    this.church = page.locator("//span[@title='Church']//a[normalize-space()='Church']");
    this.churchChairs = page.locator('ul[aria-labelledby="church-menu"] a[href="/collections/18-5-church-chairs"]');
    this.classroom = page.locator("//span[@title='Classroom']//a[normalize-space()='Classroom']");
    this.studentDesks = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Student Desks']");
    this.residential = page.locator("//span[@title='Residential']//a[normalize-space()='Residential']");
    this.livingRoom = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Living Room']");
}  


    async gotoHomePage() {
        console.log({ message: `Navigating to Home Page....`});
        await this.page.goto(STORE_URLS.biz);
        await this.page.waitForTimeout(1400);
    }

    async clickLogo()   {
        console.log({ message: `Clicking Logo....`});
        await this.logo.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.biz);
        await this.page.waitForTimeout(1500);
    }

    async clickOffice() {
        console.log({ message: `Clicking Office...`});
        await this.office.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(9000);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/office');
    }

    async clickFolding() {
        console.log({ message: `Clicking Folding...`});
        await this.folding.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(10000);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/folding');
    }

    async clickEvent () {
        console.log({ message: `Clicking Event...`});
        await this.event.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7000);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/event');
    }

    async clickRestaurant () {
        console.log({ message: `Clicking Restaurant..`});
        await this.restaurant.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7500);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/restaurant');

    }
    async clickChurch () {
        console.log({ message: `Clicking Church...`});
        await this.church.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(9200);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/church');
}


    async clickClassroom () {
        console.log({ message: `Clicking Classroom...`});
        await this.classroom.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(8500);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/classroom');
}

    async clickResidential () {
        console.log( { message: `Clicking Residenetial...`} );
        await this.residential.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(6400);
        await this.page.mouse.click(0, 0); 
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/residential');
}


    async hoverOffice () {
        console.log({ message: `Hovering Office...`});
        await this.office.hover();
        await this.executiveOffice.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7500);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/executive-office-chairs');
    
    }
    async hoverFolding () {
        console.log({ message: `Hovering Folding...`});
        await this.folding.hover();
        await this.resin.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(9000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/resin-folding-chairs');
    }
    async hoverEvent () {
        console.log({ message: `Hovering Event...`});
        await this.event.hover();
        await this.foldingChairs.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(6700);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/folding-chairs');
    }
    async hoverRestaurant () {
        console.log({ message: `Hovering Restaurant...`});
        await this.restaurant.hover();
        await this.indoorDining.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(8000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/indoor-restaurant-dining-chairs');
    }
    async hoverChurch () {
        console.log({ message: `Hovering Church...`});
        await this.church.hover();
        await this.churchChairs.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(10000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/18-5-church-chairs');
    }

    async hoverClassroom () {
        console.log({ message: `Hovering Classroom...`});
        await this.classroom.hover();
        await this.studentDesks.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(8000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/student-desks');
    }

    async hoverResidential () {
        console.log({ message: `Hovering Residential...`});
        await this.residential.hover();
        await this.livingRoom.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.biz + '/collections/living-room-furniture');
    }
}