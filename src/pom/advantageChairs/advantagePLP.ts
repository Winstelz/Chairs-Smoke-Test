import { expect, type Locator, type Page } from '@playwright/test';

export class AdvantagePLP {
    readonly page: Page;
  
    readonly firstItem: Locator
    readonly pdpItem: Locator;
    


    constructor(page: any) {
        this.page = page;
   
        this.firstItem = page.locator("//a[contains(text(),'Advantage Multipurpose Church Chairs - 18.5 in. Wi')]");
        this.pdpItem = page.getByRole('img', { name: /HERCULES Series 21"W Stacking Wood Accent Arm Church Chair - View 2/i });
    
    }


}