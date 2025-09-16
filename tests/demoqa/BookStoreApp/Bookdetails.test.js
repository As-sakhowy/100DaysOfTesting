const {test,expect} = require("@playwright/test");

test("Handling open book detais",async({page})=>{
    await page.goto("https://demoqa.com",{waitUntil:"load",timeout:3000});

    await page.locator("a").filter({hasText:"Git Pocket Guide"}).click();

    await expect(page.locator(".profile-wrapper")).toContainText("Git Pocket Guide");
})