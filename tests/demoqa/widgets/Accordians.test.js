const {test,expect} = require("@playwright/test");

test("handling accordians", async({page})=>{
    await page.goto("https://demoqa.com/accordian");

    //3 sections in accordian
    //expanding section one
    await page.click("#section1Heading");
    await expect(page.locator("#section1Content")).toBeVisible();

    //expanding section two
    await page.click("#section2Heading");
    await expect(page.locator("#section2Content")).toBeVisible();

    //expanding section three
    await page.click("#section3Heading");
    await expect(page.locator("#section3Content")).toBeVisible();
})