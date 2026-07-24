import { expect, type Locator, type Page } from '@playwright/test';
import { CommonUtil } from '../../commonUtil';
import { STORE_URLS } from '../../config/urls';

export class AdvantageHomePage {
    readonly page: Page;
    readonly commonUtil: CommonUtil;

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
    readonly popUp: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly accountIcon: Locator;


constructor(page: any) {
    this.page = page;
    this.commonUtil = new CommonUtil(page);
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
    this.popUp = page.locator('form[data-testid="klaviyo-form-SMG4ZK"]').getByPlaceholder('Email');
    this.searchIcon = page.getByRole('button', { name: 'search' });
    this.searchInput = page.locator("//input[@id='autocomplete-0-input']");
    this.accountIcon = page.getByRole('link', { name: 'account' });
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
        await this.shopAll.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/shop-all');
    }
    async clickChurchChairs() {
        console.log({ message: `Clicking Church Chairs....`});
        await this.churchChairs.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/church-stack-chairs');
    }

    async clickBanquetChairs () {
        console.log({ message: `Clicking Banquet Chairs....`});
        await this.banquetChairs.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/banquet-stack-chairs');
    }

    async clickFoldEvent () {
        console.log({ message: `Clicking Fold Event....`});
        await this.foldEvent.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/folding-event');
    }

    async clickClassroom () {
        console.log({ message: `Clicking Classroom....`});
        await this.classroom.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/classroom');
}

    async clickOfficeReception () {
        console.log({ message: `Clicking Office & Reception....`});
        await this.office.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/office');
}


    async hoverChurchChairs () {
        await this.churchChairs.hover();
        await this.dollies.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/church-banquet-stack-chair-dollies');
    }
    async hoverFoldEvent () {
        await this.foldEvent.hover();
        await this.resin.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/resin-folding-chairs');
    }
    async hoverClassroom () {
        await this.classroom.hover();
        await this.activity.click();
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/classroom-activity-table-sets');
    }
    async hoverOffice () {
        await this.office.hover();
        await this.desks.click();
        await this.page.waitForLoadState('load', { timeout: 60000 });
        expect(this.page.url()).toContain(STORE_URLS.advantage + '/collections/desks');
    }
    async hoverMore () {
        await this.more.hover();
        await this.patio.click();
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

async clickSearchIcon() {
    console.log({ message: `Clicking Search Icon....`});
    await this.searchIcon.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain(STORE_URLS.advantage);
}

async searchForItem(item: string) {
    console.log({ message: `Searching for item: ${item}....`});
    await this.searchInput.fill(item);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('load');
}

async clickAccountIcon() {
    console.log({ message: `Clicking Account Icon....`});
    await this.accountIcon.click();
    await this.page.waitForURL(/shopify\.com/);
}
}
