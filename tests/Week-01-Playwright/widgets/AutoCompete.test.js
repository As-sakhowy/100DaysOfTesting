const {test,expect} = require("@playwright/test");

test("handling auto complete",async({page})=>{
    await page.goto("https://demoqa.com/auto-complete/",{waitUntil:"domcontentloaded",timeout:4000});
    
    //typing multiple color names in a multiple color names
    await page.locator("#autoCompleteMultipleInput").fill("purple");
    await page.keyboard.press("Enter");
    await page.locator("#autoCompleteMultipleInput").fill("red");
    await page.keyboard.press("Enter");
    await expect(page.locator(".auto-complete__multi-value__label")).toContainText(["Purple","Red"])

    //typing single color name in a single color names
    await page.locator("#autoCompleteSingleInput").fill("white");
    await page.keyboard.press("Enter");
    await expect(page.locator(".auto-complete__single-value")).toContainText("White");

    
})