//tests/demoqa/form.test.js
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test.only("fill and submit text box form", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form/", {waitUntil: "domcontentloaded" ,timeout:60000});


  // Fill basic details
  await page.locator("#firstName").fill("Toyyib");
  await page.locator("#lastName").fill("Sharafudeen");
  await page.locator("#userEmail").fill("toyyibbayo@gmail.com");
//   await page.getByLabel("Male").click();
  await page.locator("#userNumber").fill("2349072900665");

  // Date of Birth (simplest way = click + type + Enter)
  await page.locator("#dateOfBirthInput").click();
  await page.locator("#dateOfBirthInput").pressSequentially("06 Sep 2005"); // adjust year
  await page.keyboard.press("Enter");

  // Subjects
  await page.locator('#subjectsInput').fill('Physics');
  await page.keyboard.press('Enter');
  await page.locator('#subjectsInput').fill('Biology');
  await page.keyboard.press('Enter');
  await page.locator('#subjectsInput').fill('Chemistry');
  await page.keyboard.press('Enter');

  // Hobbies
  await page.getByLabel("Reading").click();

  // File upload
  await page.locator("#uploadPicture").setInputFiles("C:/Users/Administrator/Downloads/sampleFile.jpeg");
  await expect(page.locator('#uploadPicture')).toHaveValue(/sampleFile\.jpeg$/);

  // Address
  await page.locator("#currentAddress").fill("no 14, ilupeju lagos");

  // State & City dropdowns
  await page.locator('#state').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator('#city').click();
  await page.getByText('Delhi', { exact: true }).click();

  // Submit
  await page.getByRole("button", { name: "Submit" }).click();

  // ✅ Verify submission modal
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText("Thanks for submitting the form");
});




test('Searchable dropdown in Practice Form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  // Scroll to the State dropdown (in case it’s hidden)
  await page.locator('#state').scrollIntoViewIfNeeded();

  // 1. Open the State dropdown
  await page.locator('#state').click();

  // 2. Type into the search box
  await page.locator('#react-select-3-input').fill('NCR');

  // 3. Press Enter to select
  await page.keyboard.press('Enter');

  // ✅ Verify "NCR" is selected
  await expect(page.locator('#state')).toContainText('NCR');

  // 4. Open the City dropdown
  await page.locator('#city').click();

  // 5. Type into the search box
  await page.locator('#react-select-4-input').fill('Delhi');
  await page.keyboard.press('Enter');

  // ✅ Verify "Delhi" is selected
  await expect(page.locator('#city')).toContainText('Delhi');
});
