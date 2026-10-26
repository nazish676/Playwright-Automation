# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> logintest
- Location: tests\OLogin.spec.ts:11:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class LoginPageVerify
  4  | {
  5  | private readonly page:Page;
  6  | private readonly username:Locator;
  7  | private readonly password:Locator;
  8  | private readonly Loginbtn:Locator;
  9  | 
  10 | constructor(page:Page)
  11 | {
  12 |     this.page=page;
  13 | 
  14 |     this.username=page.getByPlaceholder('Username');
  15 |     this.password=page.getByPlaceholder('Password');
  16 |     this.Loginbtn=page.getByRole('button', { name: 'Login' });
  17 | 
  18 | }
  19 | 
  20 | async LoginPage()
  21 | {
> 22 |     await this.username.fill('Admin');
     |                         ^ Error: locator.fill: Target page, context or browser has been closed
  23 |     await this.password.fill('admin123');
  24 |     await this.Loginbtn.click();
  25 | }
  26 | 
  27 | 
  28 | 
  29 | }
```