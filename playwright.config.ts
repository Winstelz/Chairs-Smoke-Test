import { defineConfig } from '@playwright/test';

   export default defineConfig({
     testDir: './tests',
     timeout: 180000, // 3 mins per test
     expect: {
       timeout: 5000, // default timeout for expect() assertions
     },
     use: {
       headless: false,
     },
   });