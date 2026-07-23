import { expect, type Locator, type Page } from '@playwright/test';
import { CommonUtil } from '../../commonUtil';
import { STORE_URLS } from '../../config/urls';

export class AdvantageHomePage {
    readonly page: Page;
    readonly commonUtil: CommonUtil;

    readonly ShopAll: Locator;
    readonly logo: Locator;
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
    readonly Office: Locator;
    readonly popUp: Locator;


constructor(page: any) {
    this.page = page;
    this.commonUtil = new CommonUtil(page);
    this.ShopAll = page.locator("//span[@title='Shop All']//a[normalize-space()='Shop All']");
    this.logo = page.locator("//img[@alt='Advantage Church Chairs Logo']");
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
    this.popUp = page.locator('form[data-testid="klaviyo-form-SMG4ZK"]').getByPlaceholder('Email');

}  


    async gotoHomePage() {
        console.log({ message: `Clicking Home Page....`});
        await this.page.goto(STORE_URLS.advantage);
    }

    async clickLogo()   {
        console.log({ message: `Clicking Logo....`});
        await this.logo.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage);
    }

    async clickShopAll() {
        console.log({ message: `Clicking Shop All....`});
        await this.ShopAll.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/shop-all');
    }
    async clickChurchChairs() {
        console.log({ message: `Clicking Church Chairs....`});
        await this.ChurchChairs.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/church-stack-chairs');
    }

    async clickBanquetChairs () {
        console.log({ message: `Clicking Banquet Chairs....`});
        await this.BanquetChairs.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/banquet-stack-chairs');
    }

    async clickFoldEvent () {
        console.log({ message: `Clicking Fold Event....`});
        await this.FoldEvent.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/folding-event');
    }

    async clickClassroom () {
        console.log({ message: `Clicking Classroom....`});
        await this.Classroom.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/classroom');
}

    async clickOfficeReception () {
        console.log({ message: `Clicking Office & Reception....`});
        await this.Office.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/office');
}


    async hoverChurchChairs () {
        await this.ChurchChairs.hover();
        await this.Dollies.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/church-banquet-stack-chair-dollies');
    }
    async hoverFoldEvent () {
        await this.FoldEvent.hover();
        await this.Resin.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/resin-folding-chairs');
    }
    async hoverClassroom () {
        await this.Classroom.hover();
        await this.Activity.click();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/classroom-activity-table-sets');
    }
    async hoverOffice () {
        await this.Office.hover();
        await this.Desks.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/desks');
    }
    async hoverMore () {
        await this.More.hover();
        await this.Patio.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/patio-outdoor');
    }
    
    async popUpClose() {
        console.log({ message: `Awaiting Pop Up....`});
        const popup = this.popUp;
    try {
        await popup.waitFor({ state: 'visible', timeout: 15000 });
        console.log({ message: 'Klaviyo popup appeared — closing it' });
        await this.commonUtil.closePopup.click();
    } catch {
        console.log({ message: 'Klaviyo popup did not appear — skipping close step' });
    }
}
}