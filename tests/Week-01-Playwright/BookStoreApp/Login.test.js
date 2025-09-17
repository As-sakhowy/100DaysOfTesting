const {test,expect} =require("@playwright/test");

test("Handling login and logout flow",async({page})=>{
    await page.goto("https://demoqa.com/login",{waitUntil:"networkidle",timeout:3000});

    await page.locator("#userName").fill("yourUsername");
    await page.locator("#password").fill("yourPassword");
    await page.locator("#login").click();

    await expect(page.locator("#userName-value")).toBeVisible();

    await page.locator("button").filter({hasText:"Log out"}).click();
    await expect(page).toHaveURL("https://demoqa.com/login");
})