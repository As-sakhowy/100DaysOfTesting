const {test,expect} = require("@playwright/test");

test("Handling Resizable box",async({page})=>{
    await page.goto("https://demoqa.com/resizable",{waitUntil:"domcontentloaded",timeout:3000});

    const resizable = page.locator(".react-resizable-handle");

    //Resize by dragging 100px right and 50px down
    await resizable.hover();
    await page.mouse.down();
    await page.mouse.move(100,50); //offset movement
    await page.mouse.up();
    
})