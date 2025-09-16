const { test, expect } = require("@playwright/test");

test("handling the MENU", async ({ page }) => {
  await page.goto("https://demoqa.com/menu/", {
    waitUntil: "domcontentloaded",
    timeout: 4000,
  });

  //clicking item 1
  const mainItem1 = page.locator("//a[text()='Main Item 1']");
  await mainItem1.hover();

  //clicking item 2
  const mainItem2 = page.locator("//a[text()='Main Item 2']");
  await mainItem2.hover();
  await page.locator("//a[text()='SUB SUB LIST »']").hover();
  await expect(page.locator("//a[text()='Sub Sub Item 1']")).toBeVisible();

  //clicking item 3
  const mainItem3 = page.locator("//a[text()='Main Item 3']");
  await mainItem3.hover();
});
