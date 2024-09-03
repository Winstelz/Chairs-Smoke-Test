import { test, expect } from '@playwright/test';
import { BizChairHomePage }from '../../pages/BizChairHomePage';


test('BizHomePageHeader', async ({ page }) => {

    const HomePage = new BizChairHomePage(page)

//Navigate to BizChair site    
    await HomePage.gotoHomePage();
//Click Logo and verify on homepage
    await HomePage.ClickLogo();
//Click Office Menu
    await HomePage.ClickOffice();
//Click Folding Menu
    await HomePage.ClickFolding();
//Click Event Menu
    await HomePage.ClickEvent();
//Click Restaurant Menu
    await HomePage.ClickRestaurant();
//Click Church Menu
    await HomePage.ClickChurch();
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
    await HomePage.HoverEvent();
//Hover Restaurant Menu & Click Indoor Dining Chairs
    await HomePage.HoverRestaurant();
//Hover Church Menu & Click Banquet Stack Chairs
    await HomePage.HoverChurch();
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