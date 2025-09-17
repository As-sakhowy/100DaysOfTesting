const {test,expect} = require("@playwright/test");

test("testing all links", async({page})=>{
    await page.goto("https://demoqa.com/", { waitUntil: "domcontentloaded" });
    await page.locator(".card-up").first().click();
    await page.getByText("Links").click();
    
})




test('click link and verify navigation', async ({ page }) => {
    await page.goto('https://demoqa.com/links');
  
    await page.getByRole('link', { name: 'Home' }).click();
  
    await expect(page).toHaveURL('https://demoqa.com/');
  });
  



test.only('Links page test', async ({ page, context }) => {
  await page.goto('https://demoqa.com/links');

  // 1. Simple link - opens in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#simpleLink')  // ID for "Home" link
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://demoqa.com/'); // verify it opened
  await newPage.close();

  // 2. Dynamic link (also opens new tab)
  const [newPage2] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#dynamicLink')
  ]);

  await newPage2.waitForLoadState();
  await expect(newPage2).toHaveURL('https://demoqa.com/');
  await newPage2.close();

  // 3. API call links (stay in same page, show response message)
  await page.click('#created');
  await expect(page.locator('#linkResponse')).toContainText('201');

  await page.click('#no-content');
  await expect(page.locator('#linkResponse')).toContainText('204');

  await page.click('#moved');
  await expect(page.locator('#linkResponse')).toContainText('301');

  await page.click('#bad-request');
  await expect(page.locator('#linkResponse')).toContainText('400');

  await page.click('#unauthorized');
  await expect(page.locator('#linkResponse')).toContainText('401');

  await page.click('#forbidden');
  await expect(page.locator('#linkResponse')).toContainText('403');

  await page.click('#invalid-url');
  await expect(page.locator('#linkResponse')).toContainText('404');
});
