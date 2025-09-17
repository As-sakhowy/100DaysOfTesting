const {test,expect} = require("@playwright/test");

// import { test, expect } from '@playwright/test';

test('Check all links on page', async ({ page, request }) => {
  await page.goto('https://demoqa.com/');

  // Get all links
  const links = await page.$$eval('a', anchors => anchors.map(a => a.href));

  for (const link of links) {
    if (link && (link.startsWith('http') || link.startsWith('https'))) {
      const response = await request.get(link);
      const status = response.status();

      console.log(`Checked: ${link} => Status: ${status}`);
      expect(status).toBeLessThan(400); // Fail if 400 or higher
    }
  }
});




test('Check all images on page', async ({ page, request }) => {
  await page.goto('https://demoqa.com/');

  // Get all image sources
  const images = await page.$$eval('img', imgs => imgs.map(img => img.src));

  for (const img of images) {
    if (img && (img.startsWith('http') || img.startsWith('https'))) {
      const response = await request.get(img);
      const status = response.status();

      console.log(`Checked: ${img} => Status: ${status}`);
      expect(status).toBeLessThan(400); // Broken if >=400
    }
  }
});
