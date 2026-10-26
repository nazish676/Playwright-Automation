# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Rahultest.spec.ts >> loginRahul page
- Location: tests\Rahultest.spec.ts:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.text-center text-white')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e5]:
    - link "ProtoCommerce" [ref=e6] [cursor=pointer]:
      - /url: "#"
    - list [ref=e7]:
      - listitem [ref=e8]:
        - link "Home" [ref=e9] [cursor=pointer]:
          - /url: /angularpractice
      - listitem [ref=e10]:
        - link "Shop" [ref=e11] [cursor=pointer]:
          - /url: /angularpractice/shop
  - generic [ref=e12]:
    - navigation [ref=e13]:
      - generic [ref=e14]:
        - link "ProtoCommerce Home" [ref=e15] [cursor=pointer]:
          - /url: "#"
        - list [ref=e17]:
          - listitem [ref=e18]:
            - generic [ref=e19] [cursor=pointer]:
              - text: Checkout ( 0 )
              - generic [ref=e20]: (current)
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "Shop Name" [level=1] [ref=e24]
        - generic [ref=e25]:
          - link "Category 1" [ref=e26] [cursor=pointer]:
            - /url: "#"
          - link "Category 2" [ref=e27] [cursor=pointer]:
            - /url: "#"
          - link "Category 3" [ref=e28] [cursor=pointer]:
            - /url: "#"
      - generic [ref=e29]:
        - generic [ref=e30]:
          - list [ref=e31]:
            - listitem [ref=e32]
            - listitem [ref=e33]
            - listitem [ref=e34]
          - listbox [ref=e35]:
            - img "First slide" [ref=e37]
          - button "Previous" [ref=e38] [cursor=pointer]:
            - generic [ref=e40]: Previous
          - button "Next" [ref=e41] [cursor=pointer]:
            - generic [ref=e43]: Next
        - generic [ref=e44]:
          - generic [ref=e46]:
            - link [ref=e47] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e48]:
              - heading "iphone X" [level=4] [ref=e49]:
                - link "iphone X" [ref=e50] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e51]
              - paragraph [ref=e52]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e53]:
              - button "Add " [ref=e54] [cursor=pointer]:
                - text: Add
                - generic [ref=e55]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e57]:
            - link [ref=e58] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e59]:
              - heading "Samsung Note 8" [level=4] [ref=e60]:
                - link "Samsung Note 8" [ref=e61] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e62]
              - paragraph [ref=e63]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e64]:
              - button "Add " [ref=e65] [cursor=pointer]:
                - text: Add
                - generic [ref=e66]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e68]:
            - link [ref=e69] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e70]:
              - heading "Nokia Edge" [level=4] [ref=e71]:
                - link "Nokia Edge" [ref=e72] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e73]
              - paragraph [ref=e74]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e75]:
              - button "Add " [ref=e76] [cursor=pointer]:
                - text: Add
                - generic [ref=e77]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e79]:
            - link [ref=e80] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e81]:
              - heading "Blackberry" [level=4] [ref=e82]:
                - link "Blackberry" [ref=e83] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e84]
              - paragraph [ref=e85]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e86]:
              - button "Add " [ref=e87] [cursor=pointer]:
                - text: Add
                - generic [ref=e88]: 
              - text: ★ ★ ★ ★ ☆
    - contentinfo [ref=e89]:
      - paragraph [ref=e91]: Copyright © ProtoCommerce 2018
```

# Test source

```ts
  1  | import{test,Page,Locator} from '@playwright/test';
  2  | 
  3  | export class RahulLoginPage {
  4  |     private readonly page:Page;
  5  |     private readonly Userid:Locator;
  6  |     private readonly Passworduser:Locator;
  7  |     private readonly selectadmin:Locator;
  8  |     private readonly selectdropdown :Locator;
  9  |     private readonly checkbox:Locator;
  10 |     private readonly SingInclick:Locator;
  11 |     private readonly gettext:Locator;
  12 | 
  13 |     constructor(page:Page){
  14 |         this.page=page;
  15 |         this.Userid=page.locator('#username');
  16 |         this.Passworduser=page.locator('#password');
  17 |         this.selectadmin=page.getByText('Admin');
  18 |         this.selectdropdown=page.locator("//select[@class='form-control']");
  19 |         this.checkbox=page.locator('#terms');
  20 |         this.SingInclick=page.locator('#signInBtn');
  21 |         this.gettext=page.locator('.text-center text-white');
  22 |     }
  23 | 
  24 |        async setUsernameInput(username:string){
  25 |         await this.Userid.clear();
  26 |         await this.Userid.fill(username);
  27 |     }
  28 | 
  29 |     async setPasswordInput(password:string){
  30 |         await this.Passworduser.clear();
  31 |         await this.Passworduser.fill(password);
  32 |     }
  33 |         
  34 |     async selectAdminOption(){
  35 |         await this.selectadmin.click();
  36 |     }
  37 | 
  38 |     async selectDropdownOption(){
  39 |         await this.page.waitForTimeout(3000);
  40 |         await this.selectdropdown.selectOption('Teacher')
  41 |     }
  42 | 
  43 |     async clickCheckbox(){
  44 |         await this.checkbox.check();
  45 |     }
  46 | 
  47 |     async clickSignInButton(){
  48 |         await this.SingInclick.click();
  49 |     }
  50 |     async getText(){
> 51 |         return await this.gettext.textContent();
     |                                   ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  52 |     }
  53 | }
```