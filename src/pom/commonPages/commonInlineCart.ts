import { expect, type Locator, type Page } from '@playwright/test';
import { CommonUtil } from '../commonUtil';

export class CommonInlineCart {
    readonly page: Page;
    readonly commonUtil: CommonUtil;
    readonly emptyHeader: Locator;
    readonly qtyIncrease: Locator;
    readonly qtyDecrease: Locator;
    readonly qty: Locator;
    readonly youMayAlsoLikeRightArrow: Locator;
    readonly youMayAlsoLikeLeftArrow: Locator;

    constructor(page: any) {
    this.page = page;
    this.commonUtil = new CommonUtil(page);
    
    this.emptyHeader = page.locator('h3', {hasText: /Your cart is empty/i });
    this.qtyIncrease = page.locator("#inline_cart_container").getByRole("button", { name: "Increment Quantity" });
    this.qtyDecrease = page.locator("#inline_cart_container").getByRole("button", { name: "Decrement Quantity" });
    this.qty = page.locator("#inline_cart_container").getByRole("spinbutton");
    this.youMayAlsoLikeRightArrow = page.locator('#inline_cart_container').getByRole('button', { name: 'Next slide', exact: true });
    this.youMayAlsoLikeLeftArrow = page.locator('#inline_cart_container').getByRole('button', { name: 'Previous slide', exact: true });

}

async clickCarouselArrows() {
    console.log({ message: `Clicking Inline Cart Carousel Arrows....`});
    try {
        await this.youMayAlsoLikeRightArrow.click();
        await this.commonUtil.guardAgainstChallenge();
    } catch (e) {
        console.log({ message: 'Inline right arrow blocked, retrying with force', error: String(e) });
        await this.youMayAlsoLikeRightArrow.click({ force: true });
        await this.commonUtil.guardAgainstChallenge();
    }
    try {
        await this.youMayAlsoLikeLeftArrow.click();
        await this.commonUtil.guardAgainstChallenge();
    } catch (e) {
        console.log({ message: 'Inline left arrow blocked, retrying with force', error: String(e) });
        await this.youMayAlsoLikeLeftArrow.click({ force: true });
        await this.commonUtil.guardAgainstChallenge();
    }
}

async assertEmptyCartHeader() {
    console.log({ message: `Asserting Empty Cart Header....`});
    await expect(this.emptyHeader).toBeVisible();
    await expect(this.emptyHeader).toHaveText(/Your Cart is Empty/i);
    await this.commonUtil.guardAgainstChallenge();
}

async assertProduct (product: Locator, productName: string) {
console.log({ message: `Asserting Product in Cart....`});
    await product.isVisible();
    expect(product).toHaveText(productName);
}


}