const {test,expect} =require("@playwright/test");

test("Handling Droppable",async({page})=>{
    await page.goto("https://demoqa.com/droppable",{waitUntil:"domcontentloaded",timeout:3000});

    const drag = page.locator("#draggable");
    const drop = page.locator("#droppable");

    await drag.dragTo(drop);

    await expect(drop).toHaveText("Dropped!");
    
})