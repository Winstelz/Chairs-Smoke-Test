import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  // Keep the overall test budget generous so one slow suite does not fail unrelated cases.
  timeout: 600000,

  // 1 worker locally on the Chromebook, more in CI where resources are plentiful
  workers: isCI ? undefined : 1,

  expect: {
    timeout: 10000,
  },

  // Only cap failures locally so a bad local run doesn't burn your Chromebook;
  // let CI run everything so you get the full picture in Allure
  maxFailures: isCI ? undefined : 3,

  use: {
    headless: isCI ? true : false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000,

    // Chromebook-only performance flags — omitted entirely in CI
    launchOptions: isCI
      ? {}
      : {
          args: [
            '--disable-gpu',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--single-process',
            '--js-flags=--max-old-space-size=512',
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