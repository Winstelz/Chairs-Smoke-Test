import { test, expect, type Locator, type Page } from '@playwright/test';
import { STORE_URLS } from '../config/urls';

export class CommonUtil {
    readonly page: Page;

    readonly closePopup: Locator;
    readonly closeTeaser: Locator;
    readonly popUp: Locator;

constructor(page: any) {
    this.page = page;

    this.closePopup = page.getByRole('button', { name: 'Close dialog' });
    this.closeTeaser = page.locator('button[aria-label="Close teaser"], button:has(svg[aria-hidden="true"])').first();
    this.popUp = page.locator('form[data-testid^="klaviyo-form-"]').getByPlaceholder('Email');
}



async clickEmptyCartLink (emptyLink: Locator, url: string) {
    console.log({ message: `Clicking Empty Cart Link....`});
    await expect(emptyLink).toBeVisible();
    await emptyLink.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain(url);
}

async popUpClose() {
        console.log({ message: `Awaiting Pop Up....`});
        const popup = this.popUp;
    try {
        await popup.waitFor({ state: 'visible', timeout: 15000 });
        console.log({ message: 'Klaviyo popup appeared — closing it' });
        await this.closePopup.click();
    } catch {
        console.log({ message: 'Klaviyo popup did not appear — skipping close step' });
    }
}
async guardAgainstChallenge() {
  const challenge = this.page.getByText(/verify you are human|are you human|cloudflare/i).first();
  if (await challenge.isVisible().catch(() => false)) {
    test.skip(true, 'Challenge appeared mid-navigation');
  }
}
}