# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OForgetPassword.spec.ts >> should display reset password confirmation message
- Location: tests\OForgetPassword.spec.ts:14:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{test,Page,Locator} from '@playwright/test';
  2  | 
  3  | export class OForgetPasswordPage {
  4  |     private readonly page:Page;
  5  |     private readonly ForgetPasswordInput:Locator;
  6  |     private readonly usernameInput:Locator;
  7  |     private readonly resetpassword:Locator;
  8  |     private readonly text:Locator;
  9  | 
  10 |     constructor(page:Page){
  11 |         this.page=page;
  12 |         this.ForgetPasswordInput=page.getByText('Forgot your password?');
  13 |         this.usernameInput=page.getByPlaceholder('Username')    ;
  14 |         this.resetpassword=page.getByText('Reset Password');
  15 |         this.text=page.getByText('A reset password link has been sent to you via email.');
  16 |     }
  17 | 
  18 |     async clickForgetPasswordInput():Promise<void>{
> 19 |         await this.ForgetPasswordInput.click();
     |                                        ^ Error: locator.click: Target page, context or browser has been closed
  20 |     }
  21 | 
  22 |     async setUsernameInput(username:string):Promise<void>{
  23 |         await this.usernameInput.fill(username);
  24 |     }   
  25 | 
  26 |     async clickResetPassword():Promise<void>{
  27 |         await this.resetpassword.click();
  28 |     }   
  29 | 
  30 |    async isTextVisible():Promise<boolean>{
  31 |         return await this.text.isVisible();
  32 |     }
  33 | }
```