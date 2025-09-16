const {test,expect} = require("@playwright/test");

test("handling slider",async({page})=>{
    await page.goto("https://demoqa.com/slider",{waitUntil:"domcontentloaded",timeout:3000});

    //moving slider and checking the range
    const slider =  page.locator("input[type='Range']"); //capturing the range input
    await slider.fill("60"); //change the range to 30
    await expect(page.locator("#sliderValue")).toHaveValue("60");



})