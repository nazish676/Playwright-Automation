# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> logintest
- Location: tests\OLogin.spec.ts:10:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://rahulshettyacademy.com/loginpagePractise/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | import { LoginPageVerify } from '../pages/OLoginPage';
  4  | import { TestConfig } from '../test.config';
  5  | 
  6  | let loginverifypage:LoginPageVerify;
  7  | 
  8  | let config:TestConfig;
  9  | 
  10 | test('logintest',async({page})=>
  11 | {
  12 | 
  13 | config=new TestConfig();
> 14 | await page.goto(config.appUrl2);
     |            ^ Error: page.goto: Target page, context or browser has been closed
  15 | 
  16 | loginverifypage= new LoginPageVerify(page);
  17 | 
  18 | await loginverifypage.LoginPage();
  19 | 
  20 | })
```