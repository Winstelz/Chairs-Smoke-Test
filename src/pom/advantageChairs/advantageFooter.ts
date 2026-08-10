import { expect, type Locator, type Page } from '@playwright/test';


export class AdvantageFooter {
    readonly page: Page;

    readonly returnsInformations: Locator;

constructor(page: any) {
    this.page = page;
    this.returnsInformations = page.locator("//a[@class='text-e14 leading-e150 py-1'][normalize-space()='Returns Informations']");

}

}
