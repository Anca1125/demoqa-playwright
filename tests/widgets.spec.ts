import { test, expect } from '@playwright/test';

test.describe('Widgets', () => {

  test.beforeEach(async({page})=>{
await page.goto('https://demoqa.com/',
{
  waitUntil: 'domcontentloaded',
    timeout: 60000,
})

    await page.locator('.card-body')
      .filter({ hasText: 'Widgets' })
      .click();
  })

  test('accordian', async ({page})=> {
    await page.getByText('Accordian').click()
  })
})