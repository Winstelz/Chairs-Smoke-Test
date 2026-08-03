import { expect, type Locator, type Page } from '@playwright/test';
import { STORE_URLS } from '../config/urls';

export class CommonUtil {
    readonly page: Page;

    readonly closePopup: Locator;
    readonly closeTeaser: Locator;

    constructor(page: any) {
        this.page = page;

        this.closePopup = page.getByRole('button', { name: 'Close dialog' });
        this.closeTeaser = page.locator('button[aria-label="Close teaser"], button:has(svg[aria-hidden="true"])').first();
    }



async clickEmptyCartLink (emptyLink: Locator, url: string) {
    console.log({ message: `Clicking Empty Cart Link....`});
    await expect(emptyLink).toBeVisible();
    await emptyLink.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain(url);
}
}