# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> OrangeHRM login test @master @sanity @regression
- Location: tests\OLogin.spec.ts:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Logout' })

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
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Daniel Martin
              - generic [ref=e128]: 
            - menu [ref=e129]:
              - listitem [ref=e130]:
                - menuitem "About" [ref=e131] [cursor=pointer]
              - listitem [ref=e132]:
                - menuitem "Support" [ref=e133] [cursor=pointer]
              - listitem [ref=e134]:
                - menuitem "Change Password" [ref=e135] [cursor=pointer]
              - listitem [ref=e136]:
                - menuitem "Logout" [ref=e137] [cursor=pointer]
      - navigation "Topbar Menu" [ref=e139]:
        - list [ref=e140]:
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e148]:
        - generic [ref=e150]:
          - generic [ref=e151]: 
          - paragraph [ref=e152]: Time at Work
        - separator [ref=e153]
        - generic [ref=e155]:
          - generic [ref=e156]:
            - img "profile picture" [ref=e158]
            - generic [ref=e159]:
              - paragraph [ref=e160]: Punched Out
              - paragraph [ref=e161]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=e162]:
            - generic [ref=e163]: 0h 0m Today
            - button "" [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: 
          - separator [ref=e166]
          - generic [ref=e167]:
            - generic [ref=e168]:
              - paragraph [ref=e169]: This Week
              - paragraph [ref=e170]: Sep 28 - Oct 04
            - generic [ref=e171]:
              - generic [ref=e172]: 
              - paragraph [ref=e173]: 0h 0m
      - generic [ref=e177]:
        - generic [ref=e179]:
          - generic [ref=e180]: 
          - paragraph [ref=e181]: My Actions
        - separator [ref=e182]
        - generic [ref=e184]:
          - generic [ref=e185]:
            - button [ref=e186] [cursor=pointer]
            - paragraph [ref=e192] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e193]:
            - button [ref=e194] [cursor=pointer]
            - paragraph [ref=e203] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e205]:
        - generic [ref=e207]:
          - generic [ref=e208]: 
          - paragraph [ref=e209]: Quick Launch
        - separator [ref=e210]
        - generic [ref=e212]:
          - generic [ref=e213]:
            - button "Assign Leave" [ref=e214] [cursor=pointer]
            - generic "Assign Leave" [ref=e217]:
              - paragraph [ref=e218]: Assign Leave
          - generic [ref=e219]:
            - button "Leave List" [ref=e220] [cursor=pointer]
            - generic "Leave List" [ref=e227]:
              - paragraph [ref=e228]: Leave List
          - generic [ref=e229]:
            - button "Timesheets" [ref=e230] [cursor=pointer]
            - generic "Timesheets" [ref=e236]:
              - paragraph [ref=e237]: Timesheets
          - generic [ref=e238]:
            - button "Apply Leave" [ref=e239] [cursor=pointer]
            - generic "Apply Leave" [ref=e242]:
              - paragraph [ref=e243]: Apply Leave
          - generic [ref=e244]:
            - button "My Leave" [ref=e245] [cursor=pointer]
            - generic "My Leave" [ref=e250]:
              - paragraph [ref=e251]: My Leave
          - generic [ref=e252]:
            - button "My Timesheet" [ref=e253] [cursor=pointer]
            - generic "My Timesheet" [ref=e256]:
              - paragraph [ref=e257]: My Timesheet
      - generic [ref=e259]:
        - generic [ref=e261]:
          - generic [ref=e262]: 
          - paragraph [ref=e263]: Buzz Latest Posts
        - separator [ref=e264]
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268] [cursor=pointer]:
              - img "profile picture" [ref=e270]
              - generic [ref=e271]:
                - paragraph [ref=e272]: Daniel Shirley Martin
                - paragraph [ref=e273]: 2026-30-09 03:49 PM
            - separator [ref=e274]
            - paragraph [ref=e275]: QA IS THE FUTURE 1790763551822
          - generic [ref=e276]:
            - generic [ref=e277] [cursor=pointer]:
              - img "profile picture" [ref=e279]
              - generic [ref=e280]:
                - paragraph [ref=e281]: Rebecca Harmony
                - paragraph [ref=e282]: 2020-08-10 09:04 AM
            - separator [ref=e283]
            - paragraph [ref=e284]: Throwback Thursdays!!
            - img
          - generic [ref=e285]:
            - generic [ref=e286] [cursor=pointer]:
              - img "profile picture" [ref=e288]
              - generic [ref=e289]:
                - paragraph [ref=e290]: Russel Hamilton
                - paragraph [ref=e291]: 2020-08-10 09:03 AM
            - separator [ref=e292]
            - paragraph [ref=e293]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
      - generic [ref=e295]:
        - generic [ref=e296]:
          - paragraph [ref=e301]: Employees on Leave Today
          - generic [ref=e302] [cursor=pointer]: 
        - separator [ref=e303]
        - generic [ref=e305]:
          - img "No Content" [ref=e306]
          - paragraph [ref=e307]: No Employees are on Leave Today
      - generic [ref=e309]:
        - generic [ref=e311]:
          - generic [ref=e312]: 
          - paragraph [ref=e313]: Employee Distribution by Sub Unit
        - separator [ref=e314]
        - list [ref=e319]:
          - listitem [ref=e320] [cursor=pointer]:
            - generic "Engineering" [ref=e322]
          - listitem [ref=e323] [cursor=pointer]:
            - generic "Human Resources" [ref=e325]
          - listitem [ref=e326] [cursor=pointer]:
            - generic "Administration" [ref=e328]
          - listitem [ref=e329] [cursor=pointer]:
            - generic "Client Services" [ref=e331]
          - listitem [ref=e332] [cursor=pointer]:
            - generic "Unassigned" [ref=e334]
      - generic [ref=e336]:
        - generic [ref=e338]:
          - generic [ref=e339]: 
          - paragraph [ref=e340]: Employee Distribution by Location
        - separator [ref=e341]
    - generic [ref=e344]:
      - paragraph [ref=e345]: OrangeHRM OS 5.9
      - paragraph [ref=e346]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e347] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  15 |         await this.profile.click();
  16 |     }   
  17 | 
  18 |     async clickLogout(){
> 19 |         await this.logout.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |     }
  21 | }   
```