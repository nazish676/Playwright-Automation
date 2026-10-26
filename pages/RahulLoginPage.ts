import{test,Page,Locator} from '@playwright/test';

export class RahulLoginPage {
    private readonly page:Page;
    private readonly Userid:Locator;
    private readonly Passworduser:Locator;
    private readonly selectadmin:Locator;
    private readonly selectdropdown :Locator;
    private readonly checkbox:Locator;
    private readonly SingInclick:Locator;
    private readonly gettext:Locator;

    constructor(page:Page){
        this.page=page;
        this.Userid=page.locator('#username');
        this.Passworduser=page.locator('#password');
        this.selectadmin=page.getByText('Admin');
        this.selectdropdown=page.locator("//select[@class='form-control']");
        this.checkbox=page.locator('#terms');
        this.SingInclick=page.locator('#signInBtn');
        this.gettext=page.locator('.text-center text-white');
    }

       async setUsernameInput(username:string){
        await this.Userid.clear();
        await this.Userid.fill(username);
    }

    async setPasswordInput(password:string){
        await this.Passworduser.clear();
        await this.Passworduser.fill(password);
    }
        
    async selectAdminOption(){
        await this.selectadmin.click();
    }

    async selectDropdownOption(){
        await this.page.waitForTimeout(3000);
        await this.selectdropdown.selectOption('Teacher')
    }

    async clickCheckbox(){
        await this.checkbox.check();
    }

    async clickSignInButton(){
        await this.SingInclick.click();
    }
    async getText(){
       
     this.gettext.textContent();
    }
}