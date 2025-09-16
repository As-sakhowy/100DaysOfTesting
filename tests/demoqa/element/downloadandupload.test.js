import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Download and upload file', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download', {waitUntil: "domcontentloaded"});

  // Start waiting for the download
  const [download] = await Promise.all([
    page.waitForEvent('download'), // Wait for download event
    page.locator('#downloadButton').click(), // Click the download button
  ]);

  // Save file to a chosen path
  const filePath = 'downloadedFile.png';
  await download.saveAs(filePath);

  console.log(`✅ File downloaded to: ${filePath}`);

    // Upload the same file
    const uploadInput = page.locator('#uploadFile');
    await uploadInput.setInputFiles(filePath);
  
    // Verify upload worked (DemoQA shows the file path after upload)
    const uploadedPath = await page.locator('#uploadedFilePath').textContent();
    expect(uploadedPath).toContain('downloadedFile.png');
  
    console.log(`✅ File uploaded successfully: ${uploadedPath}`);
  });
  