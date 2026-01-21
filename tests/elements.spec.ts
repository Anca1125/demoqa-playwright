import {test, expect} from '@playwright/test'

test.describe('elements section', ()=>{

test.beforeEach(async({page})=>{
await page.goto('https://demoqa.com/')
await page.getByText('Elements').click()
await expect(page).toHaveURL('https://demoqa.com/elements')
})


test(' text box in elements section', async ({page})=> {

                   await page.getByText('Text Box').click()
                   await expect(page).toHaveURL('https://demoqa.com/text-box')



                   const fullNameInput = page.locator('#userName')
                  
                   await fullNameInput.scrollIntoViewIfNeeded()
                   await fullNameInput.click()
                   await fullNameInput.fill('Iliuta Misu', {force:true})
                   await expect(fullNameInput).toHaveValue('Iliuta Misu')

                   const emailInput = page.locator('#userEmail')

                   await emailInput.scrollIntoViewIfNeeded()
                   await emailInput.click()
                   await emailInput.fill('test@test.com')
                   await expect(emailInput).toHaveValue('test@test.com')

                   const currentAddressInput = page.locator('#currentAddress')

                   await currentAddressInput.scrollIntoViewIfNeeded()
                   await currentAddressInput.click()
                   await currentAddressInput.fill('Botosani, Romania')
                   await expect(currentAddressInput).toHaveValue('Botosani, Romania')

                   const permanentAdressInput = page.locator('#permanentAddress')

                   await permanentAdressInput.click()
                   await permanentAdressInput.fill("Marchian, Botosani, Romania")
                   await expect(permanentAdressInput).toHaveValue("Marchian, Botosani, Romania")

                   const submitButton = page.locator('#submit')
                   await submitButton.click()
                   await expect(submitButton).toBeVisible()
                   await expect(submitButton).toBeEnabled()
   
})






test('checkbox in elements section - toogle Home', async ({page})=> {
await page.getByText('Check Box').click()
 await expect(page).toHaveURL('https://demoqa.com/checkbox')
 await expect (page.getByText('Home')).toBeVisible()
 //expand
 await page.locator('.rct-icon-expand-close').click()
 await expect(page.getByText('Desktop')).toBeVisible()
 //colapse
 await page.locator('.rct-icon-expand-open').click()
 await expect(page.getByText('Desktop')).toBeHidden()





})
test('checkbox in elements section - expand all', async ({page})=> {
await page.getByText('Check Box').click()
 await expect(page).toHaveURL('https://demoqa.com/checkbox')
await expect (page.getByText('Home')).toBeVisible()
await page.locator('.rct-icon-expand-all').click()
await expect(page.getByText('Notes')).toBeVisible()


})

test('checkbox in elements section - collapse all', async ({page})=> {
await page.getByText('Check Box').click()
 await expect(page).toHaveURL('https://demoqa.com/checkbox')
await expect (page.getByText('Home')).toBeVisible()
await page.locator('.rct-icon-collapse-all').click()
await expect(page.getByText('Notes')).toBeHidden()


})

test('checkbox in elements section - select all via Home', async ({page})=> {
await page.getByText('Check Box').click()
 await page.locator('.rct-icon-expand-close').click();
  await page.getByText('Home').click();

  await expect(page.locator('#result')).toBeVisible();
  await expect(page.locator('#result')).toContainText('home');
  await expect(page.locator('#result')).toContainText('desktop');
  await expect(page.locator('#result')).toContainText('documents');


})
                 

})
