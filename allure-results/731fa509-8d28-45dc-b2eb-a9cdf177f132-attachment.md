# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> logintest
- Location: tests\OLogin.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[contains(text(),\'Admin\')]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Bilol Abdurasul
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e168]:
              - generic [ref=e169] [cursor=pointer]:
                - generic [active] [ref=e170]: "-- Select --"
                - generic [ref=e172]: 
              - listbox [ref=e173]:
                - option "-- Select --" [ref=e174] [cursor=pointer]
                - option "Admin" [ref=e175] [cursor=pointer]:
                  - generic [ref=e176]: Admin
                - option "ESS" [ref=e177] [cursor=pointer]:
                  - generic [ref=e178]: ESS
          - generic [ref=e180]:
            - generic [ref=e182]: Employee Name*
            - textbox "Type for hints..." [ref=e186]
          - generic [ref=e188]:
            - generic [ref=e190]: Status*
            - generic [ref=e193] [cursor=pointer]:
              - generic [ref=e194]: "-- Select --"
              - generic [ref=e196]: 
          - generic [ref=e198]:
            - generic [ref=e200]: Username*
            - textbox [ref=e202]
        - generic [ref=e204]:
          - generic [ref=e205]:
            - generic [ref=e206]:
              - generic [ref=e208]: Password*
              - textbox [ref=e210]
            - paragraph [ref=e211]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e213]:
            - generic [ref=e215]: Confirm Password*
            - textbox [ref=e217]
        - separator [ref=e218]
        - generic [ref=e219]:
          - paragraph [ref=e220]: "* Required"
          - button "Cancel" [ref=e221] [cursor=pointer]
          - button "Save" [ref=e222] [cursor=pointer]
    - generic [ref=e223]:
      - paragraph [ref=e224]: OrangeHRM OS 5.9
      - paragraph [ref=e225]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e226] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  8  | private readonly headerText:Locator;
  9  | private readonly add:Locator;
  10 | private readonly userrole:Locator;
  11 | private readonly selectadmin:Locator;
  12 | private readonly userstatus:Locator;
  13 | 
  14 | 
  15 | 
  16 | 
  17 | constructor(page:Page)
  18 | {
  19 |     this.page=page;
  20 |     this.admintxt=  page.locator("//li[1]//a[1]//span[1]");
  21 |     this.headerText=page.getByRole('heading', { name: /User Management/i });
  22 |     this.add=page.locator("//button[normalize-space()='Add']");
  23 |     this.userrole=page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
  24 |     this.selectadmin=page.locator("//div[contains(text(),'Admin')]");
  25 |     this.userstatus=page.getByText('-- Select --', { exact: true });
  26 |     
  27 | }
  28 | async Adminpage()
  29 | {
  30 |     console.log('in the block');
  31 |     await this.page.waitForTimeout(2000);
  32 |     await this.admintxt.click();
  33 |     let innertext=await this.headerText.allInnerTexts();
  34 |     console.log(innertext);
  35 |     await this.add.click();
  36 |     //await this.page.pause();
  37 |     await this.userrole.click();
> 38 |     await this.selectadmin.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  39 | //    await this.userrole.selectOption('Admin');
  40 |     await this.userstatus.click();
  41 |     await this.userstatus.selectOption('Enabled');
  42 | 
  43 | 
  44 | 
  45 |   
  46 | }
  47 | 
  48 | 
  49 | } 
```