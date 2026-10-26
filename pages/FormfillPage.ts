import {Page,Locator} from '@playwright/test';

export class FormfillPage{
    private readonly page: Page;
    private readonly txtName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtphone: Locator;
    private readonly txtAddress: Locator;
    private readonly clickGender: Locator;
    private readonly clickDays: Locator;
    private readonly clickCountry: Locator;


    constructor(page: Page){
        this.page=page;
        this.txtName=page.locator('#name');
        this.txtEmail=page.locator('#email');
        this.txtphone=page.locator('#phone');
        this.txtAddress=page.locator('#textarea');
        this.clickGender=page.locator('#male');
        this.clickDays=page.locator('#monday');
        this.clickCountry=page.locator('#country');
    }

    async username(name:string){
        await this.txtName.fill(name);
    
    }
    async useremail(email:string){
        await this.txtEmail.fill(email);
    }
    async userphone(phone:string){
        await this.txtphone.fill(phone);
    }
    async useraddress(address:string){
        await this.txtAddress.fill(address);
    }
    async usergender(){
        await this.clickGender.click();
    }
    async userdays(){
        await this.clickDays.click();
    }
    async Country(){
        await this.clickCountry.selectOption('India');
    }   

}