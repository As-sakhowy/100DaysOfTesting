const {test,expect} = require("@playwright/test");

test("test all kinds of buttons",async({page})=>{
    await page.goto("https://demoqa.com/", { waitUntil: "domcontentloaded" });
    await page.locator(".card-up").first().click();
    await page.getByText("Buttons").click();
    await page.getByRole("button",{name: "Double Click Me"}).dblclick();
    await page.getByRole("button",{name:"Right Click Me"}).click({button: "right"});
    await page.locator("#E0gln").click();
})

// import { test, expect } from '@playwright/test';

test.only('Buttons page clicks', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  // 1. Double click
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await expect(page.locator('#doubleClickMessage'))
    .toHaveText('You have done a double click');

  // 2. Right click
  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  await expect(page.locator('#rightClickMessage'))
    .toHaveText('You have done a right click');

  // 3. Single click
   await page.locator("#E0gln").click();
  await expect(page.locator('#dynamicClickMessage'))
    .toHaveText('You have done a dynamic click');
});
