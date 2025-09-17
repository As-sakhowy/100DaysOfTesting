const {test,expect} = require("@playwright/test");

test("handling the tooltips",async({page})=>{
    await page.goto("https://demoqa.com/tool-tips",{waitUntil:"domcontentloaded",timeout:3000});

    //Looking for button to hover on
    const button = page.locator("#toolTipButton");
    await button.hover();
    await expect(page.locator("[aria-describedby='buttonToolTip']")).toContainText("You hovered over the Button");

    //hovering over text field
    await page.locator("#texFieldToolTopContainer").hover();
    await expect(page.locator("[aria-describedby='textFieldToolTip']")).toContainText("You hovered over the text field");

    //hovering over text 
    await page.locator("[href='javascript:void(0)']").first().hover();
    await expect(page.locator("[aria-describedby='contraryTexToolTip']")).toContainText("You hovered over the Contrary")

    //hovering over the last text 
    await page.locator("[href='javascript:void(0)']").last().hover();
    await expect(page.locator("[aria-describedby='sectionToolTip']")).toContainText("You hovered over the Contrary")


})