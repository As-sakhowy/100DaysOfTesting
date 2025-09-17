const {test,expect} = require("@playwright/test");

test("handling modal dialogs on a page",async({page})=>{
    await page.goto("https://demoqa.com/modal-dialogs",{waitUntil:"domcontentloaded",timeout:4000});

    //opening small modal
    await page.click("#showSmallModal");
    await expect(page.locator("#example-modal-sizes-title-sm")).toHaveText("Small Modal");
    await expect(page.locator(".modal-body")).toHaveText("This is a small modal. It has very less content");
    await page.click("#closeSmallModal")

    //opening large modal
    await page.click("#showLargeModal");
    await expect(page.locator("#example-modal-sizes-title-lg")).toHaveText("Large Modal");
    await expect(page.locator("p")).toHaveText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
    await page.click(".close");
})