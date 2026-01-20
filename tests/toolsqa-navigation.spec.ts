import {test, expect} from '@playwright/test'

test('navigate from toolsqa to demoqa', async ({page})=>{
                  await page.goto('https://www.toolsqa.com/');
                  await page.goto('https://demoqa.com/');
                  //await expect(page.locator('img[alt="ToolsQA"]')).toBeVisible();
                   await expect(page).toHaveURL('https://demoqa.com/');

})