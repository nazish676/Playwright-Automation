# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mylogin.spec.ts >> verify l;ogin
- Location: tests\mylogin.spec.ts:17:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at http://tutorialsninja.com/demo/
Call log:
  - navigating to "http://tutorialsninja.com/demo/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: tutorialsninja.com
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
  1  | import{test,expect} from '@playwright/test'
  2  | import { LoginPage1 } from '../pages/Loginpage1'    
  3  | import { TestConfig } from '../test.config';
  4  | 
  5  | let config:TestConfig;
  6  | let Lpage:LoginPage1;
  7  | 
  8  | test.beforeEach(async ({page}) =>{
  9  | config=new TestConfig();
  10 | 
> 11 | await page.goto(config.appUrl3);
     |            ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at http://tutorialsninja.com/demo/
  12 | 
  13 |     Lpage=new LoginPage1(page);
  14 | 
  15 | })
  16 | 
  17 | test('verify l;ogin',async()=>{
  18 | 
  19 | 
  20 | 
  21 | await Lpage.loginmyaccount
  22 | })
```