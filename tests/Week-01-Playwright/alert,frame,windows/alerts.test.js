const {test,expect} = require("@playwright/test");


test("test handle all types of alerts", async({page})=>{
    await page.goto("https://demoqa.com/alerts",{waitUntil:"domcontentloaded",timeout:30000});

    // --1.Simple Alert--
    page.once("dialog", async (dialog)=>{
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("You clicked a button");
        await dialog.accept();
    });
    await page.click("#alertButton");

    //--2. timed alert-- (after 5 sec)

    page.once("dialog",async(dialog)=>{
        expect(dialog.message()).toBe("This alert appeared after 5 seconds");
        await dialog.accept();
    })
    await page.click("#timerAlertButton");

    //--3.confirm box--
    page.once("dialog",async(dialog)=>{
        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Do you confirm action?");
        await dialog.dismiss();//or dialog.accept();
    });
    await page.click("#confirmButton");

    //--4.prompt box--
    page.once("dialog",async (dialog)=>{
        expect(dialog.type()).toBe("prompt");
        await dialog.accept("Playwright Test");
    })
    await page.click("#promtButton");

    //Check and verify prompt result
    await expect(page.locator("#promptResult")).toContainText("Playwright Test");

});