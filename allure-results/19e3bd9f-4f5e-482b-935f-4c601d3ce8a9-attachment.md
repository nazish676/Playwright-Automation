# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Rahultest.spec.ts >> loginRahul page
- Location: tests\Rahultest.spec.ts:9:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://rahulshettyacademy.com/loginpagePractise/
Call log:
  - navigating to "https://rahulshettyacademy.com/loginpagePractise/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: rahulshettyacademy.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | import{test,expect,Locator} from '@playwright/test';
  2  | 
  3  | import { TestConfig } from '../test.config';
  4  | import { RahulLoginPage } from '../pages/RahulLoginPage';
  5  | 
  6  | let rahulLoginPage: RahulLoginPage;
  7  | let config: TestConfig;
  8  | 
  9  | test('loginRahul page',async({ page }) => {
  10 | 
  11 | config =new TestConfig();
  12 | 
> 13 | await page.goto(config.appUrl5);
     |            ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://rahulshettyacademy.com/loginpagePractise/
  14 | 
  15 | rahulLoginPage = new RahulLoginPage(page);
  16 | await rahulLoginPage.setUsernameInput(config.ousername);
  17 | await rahulLoginPage.setPasswordInput(config.opassword);
  18 | await rahulLoginPage.selectAdminOption();
  19 | await rahulLoginPage.selectDropdownOption();
  20 | await rahulLoginPage.clickCheckbox();
  21 | await rahulLoginPage.clickSignInButton();
  22 | console.log("Login sucessfully")
  23 | 
  24 | 
  25 | 
  26 | });
  27 | 
  28 | 
```