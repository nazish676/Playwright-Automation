# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OForgetPassword.spec.ts >> should display reset password confirmation message
- Location: tests\OForgetPassword.spec.ts:14:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "dialog"
============================================================
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { OForgetPasswordPage } from '../pages/OForgetPasswordPage';
  3  | import { TestConfig } from '../test.config';
  4  | 
  5  | let forgetPasswordPage: OForgetPasswordPage;
  6  | let config: TestConfig;
  7  | 
  8  | test.beforeEach('launch url',async ({ page }) => {
  9  |     config = new TestConfig();
  10 |     await page.goto(config.appUrl5);    
  11 |     forgetPasswordPage = new OForgetPasswordPage(page);
  12 | }); 
  13 | 
  14 | test('should display reset password confirmation message', async ({ page }) => {
  15 |     await forgetPasswordPage.clickForgetPasswordInput();
  16 |     await forgetPasswordPage.setUsernameInput(config.ousername);
  17 |     await forgetPasswordPage.clickResetPassword();
> 18 |     const dialog = await page.waitForEvent('dialog');
     |                               ^ Error: page.waitForEvent: Target page, context or browser has been closed
  19 |     const message = dialog.message();
  20 |     expect(message).toBe('A reset password link has been sent to you via email.');
  21 |         const isVisible = await forgetPasswordPage.isTextVisible();
  22 |     expect(isVisible).toBe(false);
  23 | }       );
  24 | test.afterEach(async ({ page }) => {
  25 | 
  26 |     await page.waitForTimeout(3000);
  27 |     await page.close();
  28 | 
  29 | })
```