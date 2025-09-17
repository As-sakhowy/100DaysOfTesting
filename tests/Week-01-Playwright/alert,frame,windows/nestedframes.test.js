const {test,expect} = require("@playwright/test");
test("handling nested frames in a page", async({page})=>{
   await  page.goto("https://demoqa.com/nestedframes",{waitUntil:"domcontentloaded",timeout:3000});
   //accessing the parent frame
   const parentFrame = page.frameLocator("#frame1");
   await expect(parentFrame.locator("body")).toContainText("Parent frame");

    //accessing the child frame inside the parent frame
    const childFrame = parentFrame.frameLocator("iframe");
    await expect(childFrame.locator("p")).toHaveText("Child Iframe")

    
})