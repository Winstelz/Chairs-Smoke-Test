import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 180000,
  workers: 4, // run up to 4 test files in parallel
  expect: {
    timeout: 5000,
  },
  use: {
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],
  outputDir: 'test-results',
});