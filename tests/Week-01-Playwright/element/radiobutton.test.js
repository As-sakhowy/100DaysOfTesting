const {test,expect} = require("@playwright/test");

test("clicking the radio buttons",async({page})=>{
    await page.goto("https://demoqa.com/", { waitUntil: "domcontentloaded" });
    await page.getByText("Elements").click();
    await page.getByText("Radio Button").click();
    await page.getByText("Yes").click();
    await expect(page.getByLabel("yesRadio")).toContainText("Yes");
    await page.getByText("Impressive").click();
    await expect(page.locator("impressiveRadio")).toContainText("Impressive");
})