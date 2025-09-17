const {test,expect} = require("@playwright/test");

test("Handling progress bar",async({page})=>{
    await page.goto("https://demoqa.com/progress-bar",{waitUntil:"domcontentloaded",timeout:3000});
    await page.click("#startStopButton");
    await page.waitForSelector("#progressBar[aria-valuenow='100']",{timeout:15000});
    await expect(page.locator("#progressBar")).toHaveAttribute("aria-valuenow","100");

    await page.click("#resetButton");
})