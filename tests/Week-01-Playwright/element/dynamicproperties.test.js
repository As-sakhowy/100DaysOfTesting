import { test, expect } from '@playwright/test';

test('Dynamic properties behavior', async ({ page }) => {
  await page.goto('https://demoqa.com/dynamic-properties');

  // 1. Button becomes enabled after 5 seconds
  const enableBtn = page.locator('#enableAfter');
//   await expect(enableBtn).toBeDisabled(); // initially disabled
  await expect(enableBtn).toBeEnabled({ timeout: 6000 }); // waits until enabled
  await enableBtn.click();

  // 2. Button changes color after 5 seconds
  const colorBtn = page.locator('#colorChange');
  const initialClass = await colorBtn.getAttribute('class');
  await expect(colorBtn).toHaveClass(/text-danger/, { timeout: 6000 });
  const finalClass = await colorBtn.getAttribute('class');
  expect(finalClass).not.toBe(initialClass);

  // 3. Button appears after 5 seconds
  const visibleBtn = page.locator('#visibleAfter');
  await expect(visibleBtn).toBeHidden(); // not visible initially
  await expect(visibleBtn).toBeVisible({ timeout: 6000 }); // waits until visible
  await visibleBtn.click();
});
