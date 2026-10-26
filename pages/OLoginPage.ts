import {Page,Locator} from '@playwright/test';

export class LoginPageVerify
{
private readonly page:Page;
private readonly username:Locator;
private readonly password:Locator;
private readonly Loginbtn:Locator;

constructor(page:Page)
{
    this.page=page;

    this.username=page.getByPlaceholder('Username');
    this.password=page.getByPlaceholder('Password');
    this.Loginbtn=page.getByRole('button', { name: 'Login' });

}

async LoginPage()
{
    await this.username.fill('Admin');
    await this.password.fill('admin123');
    await this.Loginbtn.click();
}



}