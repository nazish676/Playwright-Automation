import{test,expect}from'@playwright/test';
import{FormfillPage}from'../pages/FormfillPage';
import{TestConfig}from'../test.config';

    let Config: TestConfig;
    let formfillPage: FormfillPage;

test.beforeEach(async ({ page }) => {
    Config = new TestConfig();
    await page.goto(Config.appUrl4); // Navigate to base URL

    // Initialize page objects
    
formfillPage = new FormfillPage(page);
});
    test.afterEach(async({page})=>{
        await page.close();
    });



test(
    'User details form fill test @master @sanity @regression',async()=>{
    
    // Fill user details form
    await formfillPage.username('John Doe');
    await formfillPage.useremail('nazish.ele@gmail.com');
    await formfillPage.userphone('1234567890');
    await formfillPage.useraddress('123 Main St, Anytown, USA');
    await formfillPage.usergender();
    await formfillPage.userdays();
    await formfillPage.Country();
});