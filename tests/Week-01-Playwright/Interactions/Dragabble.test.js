const {test,expect} =require("@playwright/test");

test("Handling draggable text",async({page})=>{
    await page.goto("https://demoqa.com/dragabble",{waitUntil:"domcontentloaded",timeout:3000});

    const drag = page.locator("#dragBox");
    const box = await drag.boundingBox();
    await page.mouse.move(box.x + box.width/2, box.y+box.height/2);
    await page.mouse.down();
    await page.mouse.move(box.x + 200, box.y +150); //drag offset
    await page.mouse.up();

})