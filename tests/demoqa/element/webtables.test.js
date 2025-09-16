import { test, expect } from '@playwright/test';

test('Web tables search and add records', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables',{waitUntil:"domcontentloaded",timeout:3000});

  // 1. Search for an existing record
  await page.locator('#searchBox').fill('Cantrell');
  await expect(page.locator('.rt-tbody')).toContainText('Cantrell');

  // 2. Clear search
  await page.locator('#searchBox').fill('');

  // 3. Add a new record
  await page.locator('#addNewRecordButton').click();
  await page.locator('#firstName').fill('Toyyib');
  await page.locator('#lastName').fill('Sharafudeen');
  await page.locator('#userEmail').fill('toy@test.com');
  await page.locator('#age').fill('25');
  await page.locator('#salary').fill('5000');
  await page.locator('#department').fill('QA');
  await page.locator('#submit').click();

//   // 4. Verify the new record is added
  await expect(page.locator('.rt-tbody')).toContainText('Toyyib');
  await expect(page.locator('.rt-tbody')).toContainText('Sharafudeen');

  // 5. Search for the new record
  await page.locator('#searchBox').fill('Toyyib');
  await expect(page.locator('.rt-tbody')).toContainText('Sharafudeen');
});
