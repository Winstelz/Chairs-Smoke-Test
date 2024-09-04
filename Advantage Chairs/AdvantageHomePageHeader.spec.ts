import { test, expect } from '@playwright/test';
import { AdvantageHomePage }from '../../pages/AdvantageHomePage';



test('AdvantageHomePageHeader', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
//Navigate to Advantage site  
    await HomePage.gotoHomePage()

//Click Logo and verify on homepage
    await HomePage.ClickLogo();
//Click Shop All Menu
    await HomePage.ClickShopAll();
//Click Church Chairs Menu
    await HomePage.ClickChurchChairs();
//Click Banquet Chairs Menu
    await HomePage.ClickBanquetChairs();
//Click Folding & Event Menu
    await HomePage.ClickFoldEvent();
//Click Classroom Menu
    await HomePage.ClickClassroom();
//Click Office & Reception Menu
    await HomePage.ClickOffice();


//Hover Church Chairs Menu & Click Church & Stack Chairs Dollies
    await HomePage.HoverChurchChairs();
//Hover Folding & Event Menu & Click Resin Folding Chairs
    await HomePage.HoverFoldEvent();
//Hover Classroom Menu & Click Activity Set
    await HomePage.HoverClassroom();
//Hover Office Menu & Click Desks
    await HomePage.HoverOffice();
//Hover More Menu & Click Patio & Outdoor
    await HomePage.HoverMore();
    
});