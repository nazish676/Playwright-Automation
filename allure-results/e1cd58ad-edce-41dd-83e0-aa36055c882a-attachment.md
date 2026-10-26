# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> OrangeHRM logout test @master @sanity @regression
- Location: tests\OLogin.spec.ts:31:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.oxd-userdropdown-name')

```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class OLogoutPage{
  4  |     private readonly page: Page;
  5  |     private readonly profile: Locator;
  6  |     private readonly logout: Locator;
  7  | 
  8  |     constructor(page: Page){
  9  |         this.page=page;
  10 |         this.profile=page.locator('.oxd-userdropdown-name');
  11 |         this.logout=page.getByRole('link', { name: 'Logout' });
  12 |     }
  13 | 
  14 |     async clickProfile(){
> 15 |         await this.profile.click();
     |                            ^ Error: locator.click: Target page, context or browser has been closed
  16 |     }   
  17 | 
  18 |     async clickLogout(){
  19 |         await this.logout.click();
  20 |     }
  21 | }   
```