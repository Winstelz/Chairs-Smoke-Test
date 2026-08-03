import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 180000,
  
  // CRITICAL: Change 4 to 1. Chromebooks cannot handle 4 parallel browsers.
  workers: 1, 
  
  expect: {
    timeout: 5000,
  },
  maxFailures: 3, 
  
  use: {
    // Keeps your original screenshot and trace settings
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    
    // Injects the Chromebook performance flags into the browser launch step
    launchOptions: {
      args: [
        '--disable-gpu',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage', 
        '--single-process',
        '--js-flags="--max-old-space-size=512"'        
      ],
    },
  },
  
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],
  outputDir: 'test-results',
});