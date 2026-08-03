import { expect, type Locator, type Page } from '@playwright/test';
import { CommonUtil } from '../commonUtil';
import { STORE_URLS } from '../../config/urls';

export class BestChiavariHomePage {
    readonly page: Page;
    readonly commonUtil: CommonUtil;

    readonly bannerContainer: Locator;
    readonly shopAll: Locator;
    readonly logo: Locator;
    readonly chiavariChairs: Locator;
    readonly woodChiavariChairs: Locator;
    readonly tables: Locator;
    readonly woodFoldingTables: Locator;
    readonly foldingChairs: Locator;
    readonly resinFoldingChairs: Locator;
    readonly crossBackChairs: Locator;
    readonly banquetChairs: Locator;
    readonly ghostChairs: Locator; 
    readonly dolliesCarts: Locator;
    readonly moreForYourVenue: Locator;

    readonly popUp: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly accountIcon: Locator;
    readonly cartIcon: Locator;


constructor(page: any) {
    this.page = page;
    this.commonUtil = new CommonUtil(page);
    this.bannerContainer = page.locator('#shopify-section-sections--21362195661088__preheader');
    this.shopAll = page.locator("//span[@title='Shop All']//a[normalize-space()='Shop All']");
    this.logo = page.locator("//img[@alt='Best Chiavari Chairs Logo']");
    this.chiavariChairs = page.locator("//span[@title='Chiavari Chairs']");
    this.woodChiavariChairs = page.getByRole('link', { name: 'Wood Chiavari Chairs' });
    this.tables = page.locator("//span[@title='Tables']");
    this.woodFoldingTables = page.getByRole('link', { name: 'Wood Folding Tables' });
    this.foldingChairs = page.locator("//span[@title='Folding Chairs']");
    this.resinFoldingChairs = page.getByRole('link', { name: 'Resin Folding Chairs' });
    this.crossBackChairs =page.locator("//span[@title='Cross Back Chairs']");
    this.banquetChairs = page.locator("//span[@title='Banquet Chairs']");
    this.ghostChairs = page.locator("//span[@title='Ghost Chairs']");
    this.dolliesCarts = page.locator("//span[@title='Dollies & Carts']");
    this.moreForYourVenue = page.locator("//span[@title='More For Your Venue']");
 
    this.popUp = page.locator('form[data-testid="klaviyo-form-SMG4ZK"]').getByPlaceholder('Email');
    this.searchIcon = page.getByRole('button', { name: 'search' });
    this.searchInput = page.locator("//input[@id='autocomplete-0-input']");
    this.accountIcon = page.getByRole('link', { name: 'account' });
    this.cartIcon = page.getByRole('link', { name: 'cart' });
}  


    async gotoHomePage() {
        console.log({ message: `Navigating to Home Page....`});
        await this.page.goto(STORE_URLS.bestChiavari);
    }

    async clickLogo()   {
        console.log({ message: `Clicking Logo....`});
        await this.logo.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari);
    }

    async clickChiavariChairs() {
        console.log({ message: `Clicking Chiavari Chairs....`});
        await this.chiavariChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(9000);
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/chiavari-chairs');
    }
    async clickTables() {
        console.log({ message: `Clicking Tables....`});
        await this.tables.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);   
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/banquet-cocktail-and-dining-tables');
    }

    async clickFoldingChairs () {
        console.log({ message: `Clicking Folding Chairs....`});
        await this.foldingChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(6000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/folding-chairs');
    }

    async clickCrossBackChairs () {
        console.log({ message: `Clicking Cross Back Chairs....`});
        await this.crossBackChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(7000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/cross-back-dining-event-chairs');
    }

    async clickBanquetChairs () {
        console.log({ message: `Clicking Banquet Chairs....`});
        await this.banquetChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/banquet-stack-chairs');
}

    async clickGhostChairs () {
        console.log({ message: `Clicking Ghost Chairs....`});
        await this.ghostChairs.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/ghost-chairs-stools');
}

async clickDolliesCarts () {
        console.log({ message: `Clicking Dollies & Carts....`});
        await this.dolliesCarts.click();
        await this.page.waitForLoadState();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/dollies-carts');
}

async clickMoreForYourVenue () {
        console.log({ message: `Clicking More For Your Venue....`});
        await this.moreForYourVenue.click();
        await this.page.waitForLoadState();
}


    async hoverChiavariChairs () {
        console.log({ message: `Hovering Chiavari Chairs....`});
        await this.chiavariChairs.hover();
        await this.woodChiavariChairs.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/wood-chiavari-chairs');
    }
    async hoverTables () {
        console.log({ message: `Hovering Tables....`});
        await this.tables.hover();
        await this.woodFoldingTables.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/wood-folding-tables');
    }
    async hoverFoldingChairs () {
        console.log({ message: `Hovering Folding Chairs....`});
        await this.foldingChairs.hover();
        await this.resinFoldingChairs.click();
        //wait so it does not put up are you a robot prompt
        await this.page.waitForTimeout(5000);
        await this.page.mouse.click(0, 0);  
        expect(this.page.url()).toContain(STORE_URLS.bestChiavari + '/collections/resin-folding-chairs');
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

async clickCartIcon() {
    console.log({ message: `Clicking Cart Icon....`});
    await this.cartIcon.click();
}
}
