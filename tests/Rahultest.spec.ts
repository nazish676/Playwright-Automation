import{test,expect,Locator} from '@playwright/test';

import { TestConfig } from '../test.config';
import { RahulLoginPage } from '../pages/RahulLoginPage';



let rahulLoginPage: RahulLoginPage;
let config: TestConfig;

test('loginRahul page',async({ page }) => {

config =new TestConfig();

await page.goto(config.appUrl5); 

rahulLoginPage = new RahulLoginPage(page);
await rahulLoginPage.setUsernameInput(config.ousername);
await rahulLoginPage.setPasswordInput(config.opassword);
await rahulLoginPage.selectAdminOption();
await rahulLoginPage.selectDropdownOption();
await rahulLoginPage.clickCheckbox();

console.log("Login sucessfully")

const getText1 = await rahulLoginPage.getText();
console.log("Text is: "+getText1);

await rahulLoginPage.clickSignInButton();

});

