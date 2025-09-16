const {test,expect} = require("@playwright/test");

test("handling frames in a page",async({page})=>{
    await page.goto("https://demoqa.com/frames/",{waitUntil: "domcontentloaded",timeout:3000});

    //switching to first frame using frameLocator
    const frame1 = page.frameLocator("#frame1");
    await expect(frame1.locator("#sampleHeading")).toHaveText("This is a sample page")

    //switching to second frame using frameLocator
    const frame2 = page.frameLocator("#frame2");
    await expect(frame2.locator("#sampleHeading")).toHaveText("This is a sample page")
})