const {test,expect} = require("@playwright/test");

test("Handling sortable list items", async({page})=>{
    await page.goto("https://demoqa.com/sortable");

    //Drag list Item One to Three position
    const itemOne = page.locator("//div[text()='One']");
    const itemThree = page.locator("//div[text()='Three']");

    await itemOne.dragTo(itemThree);

    //Drag grid Item Six to Two position
    await page.click("#demo-tab-grid");

    const gridOne = page.locator("//div[text()='One']");
    const gridThree = page.locator("//div[text()='Three']");

    await gridOne.dragTo(gridThree);
})