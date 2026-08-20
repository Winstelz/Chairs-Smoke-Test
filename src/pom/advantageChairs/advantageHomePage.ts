import { expect, type Locator, type Page } from '@playwright/test';
import { STORE_URLS } from '../../config/urls';

export class AdvantageHomePage {
    readonly page: Page;

    readonly bannerContainer: Locator;
    readonly shopAll: Locator;
    readonly logo: Locator;
    readonly churchChairs: Locator;
    readonly banquetChairs: Locator;
    readonly foldEvent: Locator;
    readonly dollies: Locator;
    readonly resin: Locator;
    readonly activity: Locator; 
    readonly desks: Locator;
    readonly more: Locator;
    readonly patio: Locator;
    readonly classroom: Locator;
    readonly office: Locator;



constructor(page: any) {
    this.page = page;
    this.bannerContainer = page.locator('#shopify-section-sections--23479412195618__preheader');
    this.shopAll = page.locator("//span[@title='Shop All']//a[normalize-space()='Shop All']");
    this.logo = page.locator("//img[@alt='Advantage Church Chairs Logo']");
    this.churchChairs = page.locator("//span[@title='Church Chairs']");
    this.banquetChairs = page.locator("//span[@title='Banquet Chairs']");
    this.foldEvent = page.locator("//span[@title='Folding & Event']//a[normalize-space()='Folding & Event']");
    this.dollies =page.locator("//a[@class='text-base leading-4 tracking-wider flex flex-col'][normalize-space()='Church & Stack Chair Dollies']");
    this.resin = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Resin Folding Chairs']");
    this.activity = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Activity Sets']");
    this.desks = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Desks']");
    this.more = page.locator("//span[@title='More']//a[@href='#'][normalize-space()='More']");
    this.patio =  page.locator("//a[@class='text-base leading-4 tracking-wider flex flex-col'][normalize-space()='Patio & Outdoor']");
    this.classroom = page.locator("//span[@title='Classroom']//a[normalize-space()='Classroom']");
    this.office = page.locator("//span[@title='Office & Reception']//a[normalize-space()='Office & Reception']");
}  


    async gotoHomePage() {
        console.log({ message: `Clicking Home Page....`});
        await this.page.goto(STORE_URLS.advantage, { waitUntil: 'domcontentloaded' });
        await this.page.waitForTimeout(9000);
    }

    async clickLogo()   {
        console.log({ message: `Clicking Logo....`});
        await this.logo.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage);
        await this.page.waitForTimeout(1200);
    }

    async clickShopAll() {
        console.log({ message: `Clicking Shop All....`});
        await this.shopAll.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(9000);
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/shop-all');
    }
    async clickChurchChairs() {
        console.log({ message: `Clicking Church Chairs....`});
        await this.churchChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);   
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/church-stack-chairs');
    }

    async clickBanquetChairs () {
        console.log({ message: `Clicking Banquet Chairs....`});
        await this.banquetChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(6000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/banquet-stack-chairs');
    }

    async clickFoldEvent () {
        console.log({ message: `Clicking Folding & Event....`});
        await this.foldEvent.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/folding-event');
    }

    async clickClassroom () {
        console.log({ message: `Clicking Classroom....`});
        await this.classroom.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/classroom');
}

    async clickOfficeReception () {
        console.log({ message: `Clicking Office & Reception....`});
        await this.office.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(8000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/office');
}


    async hoverChurchChairs () {
        console.log({ message: `Hovering Church Chairs....`});
        await this.churchChairs.hover();
        await this.dollies.click();
         //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/church-banquet-stack-chair-dollies');
    }
    async hoverFoldEvent () {
        console.log({ message: `Hovering Folding & Event....`});
        await this.foldEvent.hover();
        await this.resin.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(9000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/resin-folding-chairs');
    }
    async hoverClassroom () {
        console.log({ message: `Hovering Classroom....`});
        await this.classroom.hover();
        await this.activity.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(8000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/classroom-activity-table-sets');
    }
    async hoverOffice () {
        console.log({ message: `Hovering Office & Reception....`});
        await this.office.hover();
        await this.desks.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/desks');
    }



}
