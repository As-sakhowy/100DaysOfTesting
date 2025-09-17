const {test,expect} = require("@playwright/test");

test("fill and submit text box form",async({page})=>{
 await page.goto("https://demoqa.com");
 await page.getByText("Elements").click();
 await page.getByText("Text Box").click();
 await page.getByPlaceholder("Full Name").fill("Toyyib Sharafudeen");
 await page.getByPlaceholder("name@example.com").fill("toyyibbayo@gmail.com");
 await page.getByPlaceholder("Current Address").fill("no 31 bello street, yaba lagos");
 await page.locator("#permanentAddress").fill("no 41 alabede street, yaba lagos");
 page.getByRole("button", { name: "Submit" });

 //assertions
//  await expect(page.locator("#name")).toContainText("Toyyib Sharafudeen");
//  await expect(page.locator("#email")).toContainText("toyyibbayo@gmail.com");
//  await expect(page.locator("#currentAddress")).toContainText("no 31 bello street, yaba lagos");
//  await expect(page.locator("#permanentAddress")).toContainText("no 41 alabede street, yaba lagos");

 //creating screenshot
 await page.screenshot({path:"textbox.png",fullPage: true});
})
test.only('test', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('.card-up').first().click();
    await page.getByText('Text Box').click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill("Toyyib Sharafudeen");;
    await page.getByRole('textbox', { name: 'name@example.com' }).fill("toyyibbayo@gmail.com");
    await page.getByRole('textbox', { name: 'Current Address' }).fill("no 31 bello street, yaba lagos");
    await page.locator('#permanentAddress').fill("no 41 alabede street, yaba lagos");
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.locator('.col-12 > div:nth-child(4)').waitFor("visible");
    await expect(page.locator('.col-12 > div:nth-child(1)')).toContainText("Toyyib Sharafudeen");
 await expect(page.locator('.col-12 > div:nth-child(2)')).toContainText("toyyibbayo@gmail.com");
 await expect(page.locator('.col-12 > div:nth-child(3)')).toContainText("no 31 bello street, yaba lagos");
 await expect(page.locator('.col-12 > div:nth-child(4)')).toContainText("no 41 alabede street, yaba lagos");
    await page.locator('[id="google_ads_iframe_/21849154601,22343295815/Ad.Plus-970x250-2_0"]').contentFrame().locator('html').click();
  });