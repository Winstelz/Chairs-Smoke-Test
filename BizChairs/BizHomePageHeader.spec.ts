import { test, expect } from '@playwright/test';
import { BizChairHomePage }from '../../pages/BizChairHomePage';


test('BizHomePageHeader', async ({ page }) => {

    const HomePage = new BizChairHomePage(page)

//Navigate to BizChair site    
   HomePage.gotoHomePage();
//Click Logo and verify on homepage
    await HomePage.ClickLogo();
//Click Office Menu
    await HomePage.ClickOffice();
//Click Folding Menu
    await HomePage.ClickFolding();
//Click Event Menu
    const Event = page.locator("//span[@title='Event']//a[normalize-space()='Event']");
    await Event.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/event');
//Click Restaurant Menu
    const Restaurant = page.locator("//span[@title='Restaurant']//a[normalize-space()='Restaurant']");
    await Restaurant.click();
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('/collections/restaurant');
//Click Church Menu
    const Church = page.locator("//span[@title='Church']//a[normalize-space()='Church']");
    await Church.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/church');
//Click Classroom Menu
    const Classroom = page.locator("//span[@title='Classroom']//a[normalize-space()='Classroom']");
    await Classroom.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/classroom');
//Click Residential Menu
    const Residential = page.locator("//span[@title='Residential']//a[normalize-space()='Residential']");
    await Residential.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/residential');


//Hover Office Menu & Click Executive Office Chairs
    await HomePage.HoverOffice();
//Hover Folding Menu & Click Resin Folding Chairs
    await HomePage.HoverFolding();
//Hover Event Menu & Click Folding Chairs
    await Event.hover();
    const FoldingChairs = page.locator("//ul[@aria-labelledby='event-menu']//a[@title='Folding Chairs'][normalize-space()='Folding Chairs']");
    await FoldingChairs.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/folding-chairs');
//Hover Restaurant Menu & Click Indoor Dining Chairs
    await Restaurant.hover();
    const IndoorDining = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Indoor Dining Chairs']");
    await IndoorDining.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/indoor-restaurant-dining-chairs');
//Hover Church Menu & Click Banquet Stack Chairs
    await Church.hover();
    const Banquet = page.locator("//ul[@aria-labelledby='church-menu']//a[@title='Banquet Stack Chairs'][normalize-space()='Banquet Stack Chairs']");
    await Banquet.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/banquet-stack-chairs');
//Hover Classroom Menu & Click Student Desk
    await Classroom.hover();
    const StudentDesks = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Student Desks']");
    await StudentDesks.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/student-desks');
//Hover Residential Menu & Click Student Desk
    await Residential.hover();
    const LivingRoom = page.locator("//a[@class='flex flex-col font-normal text-e14 leading-e150'][normalize-space()='Living Room']");
    await LivingRoom.click();
    await page.waitForLoadState();
    expect(page.url()).toContain('/collections/living-room-furniture');

});