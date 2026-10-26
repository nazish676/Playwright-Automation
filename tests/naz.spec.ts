import{test,expect,Locator} from '@playwright/test';
import { table } from 'node:console';

test('loginRahul page',async({ page }) => {
    await page.goto('https://sdetqa.vercel.app/autoplay');

  const dropdonw= page.locator('#country');
    const options=dropdonw.locator('option');
    const count=await options.count();

    console.log(count);
    const list=await options.allInnerTexts();
    console.log(list);

    if(list.includes('uk'))
    {
        options.selectOption('uk')
    }else
    {
        options.selectOption('USA')
    }
    await page.pause();
    
console.log("adding git");

});
