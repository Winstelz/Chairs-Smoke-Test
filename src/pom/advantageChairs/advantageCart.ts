import { expect, type Locator, type Page} from '@playwright/test';
import { CommonUtil } from '../commonUtil';
import { AdvantageHomePage } from './advantageHomePage';

export class AdvantageCart {
    readonly page: Page;
    readonly commonUtil: CommonUtil;
    readonly homePage: AdvantageHomePage;
 

    


    constructor(page: any) {
        this.page = page;
        this.commonUtil = new CommonUtil(page);
        this.homePage = new AdvantageHomePage(page);
    }
  
}
