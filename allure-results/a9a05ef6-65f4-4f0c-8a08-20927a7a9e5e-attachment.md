# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: naz.spec.ts >> loginRahul page
- Location: tests\naz.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  locator('#female')
Expected: checked
Received: unchecked
Timeout:  5000ms

Call log:
  - Expect "toBeChecked" with timeout 5000ms
  - waiting for locator('#female')
    14 × locator resolved to <input id="female" type="radio" name="gender" value="Female"/>
       - unexpected value "unchecked"

```

```yaml
- radio "Female"
```

# Test source

```ts
  1  | import{test,expect,Locator} from '@playwright/test';
  2  | import { table } from 'node:console';
  3  | 
  4  | test('loginRahul page',async({ page }) => {
  5  |     await page.goto('https://sdetqa.vercel.app/autoplay');
  6  |    const radiomale=page.locator('#male');
  7  | 
  8  |    await radiomale.check();
  9  |    await expect(radiomale).toBeChecked();
  10 | 
  11 |    const fradio=page.locator('#female');
  12 |    await expect(fradio).toBeVisible();
> 13 |    await expect(fradio).toBeChecked();
     |                         ^ Error: expect(locator).toBeChecked() failed
  14 |    await expect(fradio).not.toBeChecked();
  15 | 
  16 | });
  17 | 
```