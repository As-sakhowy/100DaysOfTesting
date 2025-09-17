const { test, expect } = require("@playwright/test");

test("checking and unchecking all the boxes", async ({ page }) => {
  await page.goto("https://demoqa.com/", { waitUntil: "domcontentloaded" });
    
  await page.locator(".card-up").first().click();
  await page.getByText("Check Box").click();
  //expanding all the dropdown button
  const toggles = page.locator("[aria-label*='Toggle']");
  const count = await toggles.count();
  if(count > 0){
    for(let i =0; i>count; i++){
        await toggles.nth(i).click();
    }
  }
//   await page.locator("[aria-label*='Toggle']").first().click();
//   await page.locator("[aria-label*='Toggle']").nth(1).click();
//   await page.locator("[aria-label*='Toggle']").nth(2).click();
//   await page.locator("[aria-label*='Toggle']").nth(3).click();
//   await page.locator("[aria-label*='Toggle']").nth(4).click();
//   await page.locator("[aria-label*='Toggle']").nth(5).click();
  
//   await page.waitForLoadState();
//expanding all check boxes
// await page.getByText("Expand All").click();
  //checking all the boxes
  await page.locator("#tree-node-notes").click();
  await page.locator("#tree-node-commands").check();
//   await page.locator("#tree-node-workspace").check();
//   await page.locator("#tree-node-react").check();
//   await page.locator("#tree-node-angular").check();
//   await page.locator("#tree-node-veu").check();
//   await page.locator("#tree-node-office").check();
//   await page.locator("#tree-node-public").check();
//   await page.locator("#tree-node-classified").check();
//   await page.locator("#tree-node-private").check();
  
//   await page.locator("#tree-node-general").check();
//   await page.locator("#tree-node-downloads").check();
//   await page.locator("#tree-node-wordFile").check();
//   await page.locator("#tree-node-excelFile").check();

//   await page.pause()
});
