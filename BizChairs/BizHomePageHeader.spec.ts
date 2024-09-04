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
    await HomePage.ClickClassroom();
//Click Residential Menu
    await HomePage.ClickResidential();


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
    await HomePage.HoverClassroom();
//Hover Residential Menu & Click Student Desk
    await HomePage.HoverResidential();

});