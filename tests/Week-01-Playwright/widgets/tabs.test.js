const {test,expect} = require("@playwright/test");

test("handling tabs",async({page})=>{
    await page.goto("https://demoqa.com/tabs",{waitUntil:"domcontentloaded",timeout:3000});
    
    //clicking on the "What" tabs
    await page.click("#demo-tab-what");
    await expect(page.locator("#demo-tabpane-what")).toBeVisible();

    //clicking on the "Origin" tabs
    await page.click("#demo-tab-origin");
    await expect(page.locator("#demo-tabpane-origin")).toBeVisible();

    //clicking on the "Use" tabs
    await page.click("#demo-tab-use");
    await expect(page.locator("#demo-tabpane-use")).toBeVisible();



})