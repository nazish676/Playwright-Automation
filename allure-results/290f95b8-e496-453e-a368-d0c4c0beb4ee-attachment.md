# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> logintest
- Location: tests\OLogin.spec.ts:11:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Admin', { exact: true })

```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class addAdmin
  4  | {
  5  | private readonly page:Page;
  6  | private readonly admintxt:Locator;
  7  | 
  8  | 
  9  | 
  10 | constructor(page:Page)
  11 | {
  12 |     this.page=page;
  13 |     this.admintxt=page.getByText('Admin', { exact: true })
  14 | }
  15 | 
  16 | async Adminpage()
  17 | {
> 18 |     await this.admintxt.click();
     |                         ^ Error: locator.click: Test ended.
  19 |     await this.page.waitForTimeout(2000);
  20 | }
  21 | 
  22 | 
  23 | }
```