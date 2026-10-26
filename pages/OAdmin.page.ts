import {Page,Locator, expect} from '@playwright/test';

export class addAdmin
{
private readonly page:Page;
private readonly admintxt:Locator;
private readonly tablelist:Locator;

private readonly headerText:Locator;
private readonly add:Locator;
private readonly userrole:Locator;
private readonly selectadmin:Locator;
private readonly userstatus:Locator;
private readonly title:Locator;



constructor(page:Page)
{
    this.page=page;
    // this.admintxt=  page.locator("//li[1]//a[1]//span[1]");
    // this.headerText=page.getByRole('heading', { name: /User Management/i });
    //  this.add=page.locator("//button[normalize-space()='Add']");
    //  this.userrole=page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
    //  this.selectadmin=page.locator("//div[contains(text(),'Admin')]");
    // this.userstatus=page.getByText('-- Select --', { exact: true });
    // this.tablelist=page.locator('.oxd-table-card');
    this.title=page.getByTitle('OrangeHRM')
}
async Adminpage()
{
    console.log('in the block');
    await this.page.waitForTimeout(2000);
    // await this.admintxt.click();
    // let innertext=await this.headerText.allInnerTexts();
    // console.log(innertext);
// //     await this.add.click();
// //     //await this.page.pause();
// //     await this.userrole.click();
//      await this.selectadmin.selectOption('Admin')
//      await this.page.pause
//      await this.userrole.selectOption('Admin');
// //     await this.userstatus.click();
// //     await this.userstatus.selectOption('Enabled');
//      const tablealllist=await this.tablelist.allInnerTexts();
//       console.log(tablealllist);
console.log(this.title);
       
        

  
}


} 