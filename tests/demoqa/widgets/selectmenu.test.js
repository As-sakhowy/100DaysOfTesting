const {test,expect} = require("@playwright/test");

test("handling dropdown selections",async({page})=>{
    await page.goto("https://demoqa.com/select-menu/",{waitUntil:"domcontentloaded",timeout:30000});

    //old style select
    await page.selectOption("#SelectMenu",{label:"Green"});
    await expect(page.locator("#SelectMenu")).toHaveText("3");

    //Multi selecting
    await page.selectOption("#cars",["volvo","audi"]);
    await expect(page.locator("#cars")).toHaveText(["volvo","audi"]);

    //modern react dropdown 
    await page.locator("#withOptGroup").click();
    await page.getByText("Group 1, option 1").click();
})