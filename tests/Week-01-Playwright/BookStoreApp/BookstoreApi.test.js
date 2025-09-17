const {test,expect} = require("@playwright/test");

test("Handling adding biik to collection",async({page})=>{
    await page.goto("https://demoqa.com/login",{waituntil:
"networkidle",timeout:3000});

//login first
await page.locator("#userName").fill("yourUsername");
await page.locator("#password").fill("yourPassword");
await page.locator("#login").click();

//Go to books
await page.goto("https://demoqa.com/books");

//Open book and add
await page.locator("a").filter({hasText:"Git Pocket Guide"}).click();
await page.locator("button").filter({hasText:"Add To Your Collection"}).click();

//Alert confirmation
page.once("dialog",async(dialog)=>{
    expect(dialog.message()).toContain("Book added");
    await dialog.accept();
})
})
