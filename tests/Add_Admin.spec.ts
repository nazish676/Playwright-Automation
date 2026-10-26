import { test,expect } from "@playwright/test"; 
import {OrangeLoginPage} from '../pages/OLoginPage'

import { TestConfig } from "../test.config";
import { OrangeAddAdmin } from "../pages/OaddAdmin";
let orangeLogin:OrangeLoginPage;
let config:TestConfig;
let addadmin:OrangeAddAdmin;

test('add admin',async({page})=>{

    orangeLogin =new OrangeLoginPage(page);
    await orangeLogin.setUsername('Admin');
    await orangeLogin.setPassword('admin123');
    await orangeLogin.clickLogin();

    admin= new OrangeAddAdmin();
    




})
