const {test,expect} = require("@playwright/test");

test("Selectable list items",async({page})=>{
    await page.goto("https://demoqa.com/selectable",{waitUntil:"domcontentloaded",timeout:3000});

    //select multiple items
    await page.locator("//li[text()='Cras justo odio']").click();
    await page.locator("//li[text()='Morbi leo risus']").click();

    //Verify selected state (has 'active' class)
    const selected = await page.locator("//li[conatains(@class, 'active')]").count();
    expect(selected).toBe(2)

     //select multiple items grid
     await page.locator("//li[text()='One']").click();
     await page.locator("//li[text()='Six']").click();
 
     //Verify selected state (has 'active' class)
     const select = await page.locator("//li[conatains(@class, 'active')]").count();
     expect(select).toBe(2)
})