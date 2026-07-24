import { test, expect } from '@playwright/test';
import { AdvantageHomePage } from '../../src/pom/AdvantageChairs/AdvantageHomePage';



test('AdvantageHomePageHeader', async ({ page }) => {

    const HomePage = new AdvantageHomePage(page)
//Navigate to Advantage site  
    await HomePage.gotoHomePage()

//Click Logo and verify on homepage
    await HomePage.clickLogo();
//Click Shop All Menu
    await HomePage.clickShopAll();
//Click Church Chairs Menu
    await HomePage.clickChurchChairs();
//Click Banquet Chairs Menu
    await HomePage.clickBanquetChairs();
//Click Folding & Event Menu
    await HomePage.clickFoldEvent();
//Click Classroom Menu
    await HomePage.clickClassroom();
//Click Office & Reception Menu
    await HomePage.clickOfficeReception();


//Hover Church Chairs Menu & Click Church & Stack Chairs Dollies
    await HomePage.hoverChurchChairs();
//Hover Folding & Event Menu & Click Resin Folding Chairs
    await HomePage.hoverFoldEvent();
//Hover Classroom Menu & Click Activity Set
    await HomePage.hoverClassroom();
//Hover Office Menu & Click Desks
    await HomePage.hoverOffice();
//Hover More Menu & Click Patio & Outdoor
    await HomePage.hoverMore();
    
});