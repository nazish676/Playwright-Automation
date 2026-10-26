# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> logintest
- Location: tests\OLogin.spec.ts:10:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText(' Login ') resolved to 2 elements:
    1) <h5 data-v-7b563373="" data-v-0af708be="" class="oxd-text oxd-text--h5 orangehrm-login-title">Login</h5> aka getByRole('heading', { name: 'Login' })
    2) <button type="submit" data-v-10d463b7="" data-v-0af708be="" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button">…</button> aka getByRole('button', { name: 'Login' })

Call log:
  - waiting for getByText(' Login ')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [active] [ref=e30]: admin123
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
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
  16 |     this.Loginbtn=page.getByText(' Login ');
  17 | 
  18 | }
  19 | 
  20 | async LoginPage()
  21 | {
  22 |     await this.username.fill('Admin');
  23 |     await this.password.fill('admin123');
> 24 |     await this.Loginbtn.click();
     |                         ^ Error: locator.click: Error: strict mode violation: getByText(' Login ') resolved to 2 elements:
  25 | }
  26 | 
  27 | 
  28 | }
```