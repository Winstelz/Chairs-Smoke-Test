import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../pages/AdvantageHomePage';
import { AdvantagePLP }from '../../pages/AdvantagePLP';
import { AdvantagePDP } from '../../pages/AdvantagePDP';
import { AdvantageInlineCart } from '../../pages/AdvantageInlineCart';




test('AdvantageInlineCart', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
    const PLP = new AdvantagePLP(page)
    const PDP = new AdvantagePDP(page)
    const Inline = new AdvantageInlineCart(page)
    //Navigate to Advantage site   
        await HomePage.gotoHomePage(); 
    //Navigate to PLP
        await HomePage.ClickShopAll();
    //Click First Item
        await PLP.ClickFirstItem();
    //Add Item to Cart
        await PDP.AddtoCart()
    //Verify Product is in Cart
        await Inline.VerifyProduct();
    //Increase QTY
        await Inline.QTYIncrease();
    //Decrease QTY
        await Inline.QTYDecrease();
    //Input QTY
        await Inline.QTYInput();
    //You May Also Like Carousel Clicking
       await Inline.YouMayLikeCarousel();
    //Calculate Shipping
        await page.locator("//span[@class='ra-icon']//*[name()='svg']").click();
        const Zip = page.locator("//input[@placeholder='Enter Zip or Postal Code']");
        await Zip.click();
        await Zip.fill("45014");
        const Address = page.locator("//select[@name='addressType']");
        await Address.click();
        await Address.selectOption('Residential');
        await page.locator("//button[normalize-space()='Calculate Shipping']").click();
        await page.waitForTimeout(2000);
    //Click Checkout
        await page.locator("//button[normalize-space()='Proceed to Checkout']").click();
        await page.locator("//header[@class='EAjaz Xx7bI _1fragemr6']//div//div//a[@class='s2kwpi1 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 _1fragemwl']").click();
        await page.waitForLoadState();
        await page.locator("(//a[@title='cart'])[1]").click();
    //Delete Item from Inline Cart
        await page.getByRole('button', { name: 'Remove item' }).click();
        const EmptyLink = await page.locator("//a[@class='ra-button ra-button ra-button--primary ra-button--lg mb-4'][normalize-space()='Church Chairs']");
        await EmptyLink.click();
        expect(page.url()).toContain("/collections/church-stack-chairs");




        


});