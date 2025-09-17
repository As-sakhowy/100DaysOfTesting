const{test,expect} = require("@playwright/test");

test("handling date picker",async({page})=>{
    await page.goto("https://demoqa.com/date-picker",{waitUntil:"domcontentloaded",timeout:3000});

    //select date
    await page.locator("#datePickerMonthYearInput").click();
    await page.locator(".react-datepicker__day--013").click(); //13th day

    //selecting date and time

    await page.locator("##dateAndTimePickerInput").click()
    await page.locator("react-datepicker__day--014").click() //14th day
    await page.locator(".react-datepicker__time-list-item").nth(20).click()// pick a date
});