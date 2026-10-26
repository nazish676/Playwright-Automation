import{test,expect} from '@playwright/test';

import { LoginPageVerify } from '../pages/OLoginPage';
import { TestConfig } from '../test.config';
import { addAdmin } from '../pages/OAdmin.page';
let loginverifypage:LoginPageVerify;

let config:TestConfig;
let addmin:addAdmin;

test('logintest',async({page})=>
{

config=new TestConfig();
await page.goto(config.appUrl2);

loginverifypage= new LoginPageVerify(page);

await loginverifypage.LoginPage();
// addmin=new addAdmin(page);
// await addmin.Adminpage();

await expect(page).toHaveURL(config.appUrl2);

})