const {test,expect} = require("@playwright/test");

test("testing a browser window : tabs & windows",async({page,context})=>{
   await  page.goto("https://demoqa.com/browser-windows", {waitUntil: "domcontentloaded", timeout: 60000});
    // await page.getByText("Browser Windows").click();

    //--new tab --
    const newTabPromise = context.waitForEvent("page");
    await page.locator("#tabButton").click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();
    expect(await newTab.url()).toContain("sample");
    await newTab.close();

    //--new window--
    const newWindowPromise = context.waitForEvent("page");
    await page.locator("#windowButton").click();
    const newWindow = await newWindowPromise;
    await newWindow.waitForLoadState();
    expect(await newWindow.url()).toContain("sample")
    await newTab.close();

    //--new window message
    const messageWindowPromise = context.waitForEvent("page");
    await page.locator("#messageWindowButton").click();
    const messageWindow = await messageWindowPromise;
    await messageWindow.waitForLoadState();


    //--For "New Window Message"
    const messageText  = messageWindow.locator("body").innerText();
    console.log("Message in the window text is:", messageText);
    await expect(messageText).toContain("Please share this");
    await messageWindowPromise.close();

    
})