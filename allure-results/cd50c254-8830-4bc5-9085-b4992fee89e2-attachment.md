# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Rahultest.spec.ts >> loginRahul page
- Location: tests\Rahultest.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/loginpagePractise/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e4] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]:
      - img [ref=e8]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - text: "Username:"
        - textbox "Username:" [ref=e16]
      - generic [ref=e17]:
        - text: "Password:"
        - textbox "Password:" [ref=e18]
      - generic [ref=e20]:
        - generic [ref=e21] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e22]
        - generic [ref=e24] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e25]
      - combobox [ref=e28]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e29]:
        - generic [ref=e30]:
          - checkbox "I Agree to the terms and conditions" [ref=e32]
          - generic [ref=e33]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e34] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e35]
      - paragraph [ref=e37]:
        - text: (username is
        - generic [ref=e38]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e39]: Learning@830$3mK2
        - text: )
  - generic [ref=e42]:
    - paragraph [ref=e44]: You will be limited to only fewer functionalities of the app. Proceed?
    - generic [ref=e45]:
      - button "Cancel" [ref=e46]
      - button "Okay" [active] [ref=e47]
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
> 12 | await page.goto(config.appUrl5);
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  13 | 
  14 | rahulLoginPage = new RahulLoginPage(page);
  15 | await rahulLoginPage.setUsernameInput(config.ousername);
  16 | await rahulLoginPage.setPasswordInput(config.opassword);
  17 | await rahulLoginPage.selectAdminOption();
  18 | await rahulLoginPage.selectDropdownOption();
  19 | await rahulLoginPage.clickCheckbox();
  20 | await rahulLoginPage.clickSignInButton();
  21 | console.log("Login sucessfully")
  22 | 
  23 | 
  24 | 
  25 | });
  26 | 
  27 | 
```