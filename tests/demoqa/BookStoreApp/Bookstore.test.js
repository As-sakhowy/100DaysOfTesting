const {test,expect} =require("@playwright/test");

test("Handling searches for a book",async({page})=>{
    await page.goto("https://demoqa.com/books",{waitUntil:"networkidle",timeout:3000});

    await page.locator("#searchBox").fill("Git");
    const book = page.locator(".mr-2").first();

    await expect(book).toContainText("Git");
});