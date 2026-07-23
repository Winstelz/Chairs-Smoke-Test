import { expect, type Locator, type Page } from '@playwright/test';

export class CommonUtil {
    readonly page: Page;
    readonly closePopup: Locator;
    readonly closeTeaser: Locator;

    constructor(page: any) {
        this.page = page;
        this.closePopup = page.getByRole('button', { name: 'Close dialog' });
        this.closeTeaser = page.locator('button[aria-label="Close teaser"], button:has(svg[aria-hidden="true"])').first();
    }
}