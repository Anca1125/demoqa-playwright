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

test('radio buttons - select Yes', async({page}) => {
 await page.getByText('Radio Button').click()
 await expect(page).toHaveURL('https://demoqa.com/radio-button')
 await page.getByText('Yes').click()
 await expect(page.locator('.text-success')).toBeVisible()
 await expect(page.locator('.text-success')).toHaveText('Yes')
})

test('radio buttons - select Impressive', async({page}) => {
 await page.getByText('Radio Button').click()
 await expect(page).toHaveURL('https://demoqa.com/radio-button')
 await page.getByText('Impressive').click()
 await expect(page.locator('.text-success')).toBeVisible()
 await expect(page.locator('.text-success')).toHaveText('Impressive')
})   

test('radio buttons - No option is disable', async({page}) => {
 await page.getByText('Radio Button').click()
 await expect(page).toHaveURL('https://demoqa.com/radio-button')
 const noRadio = await page.getByLabel('No')
 await expect(noRadio).toBeDisabled()
})

test('web tables - tabele is visible', async({page}) => {
 await page.getByText('Web Tables').click()
 await expect(page).toHaveURL('https://demoqa.com/webtables')
 await expect(page.locator('.rt-table')).toBeVisible()
})

test('web tables - add data to the table', async({page}) => {
 await page.getByText('Web Tables').click()
 await expect(page).toHaveURL('https://demoqa.com/webtables')
 await page.getByRole('button', { name: 'Add' }).click()
 await expect(page.getByText('Registration Form')).toBeVisible()
 await page.locator('#firstName').fill('Misu')
 await page.locator('#lastName').fill('Iliuta')
 await page.locator('#userEmail').fill('iliuta@misu.com')
 await page.locator('#age').fill('18')
 await page.locator('#salary').fill('2500')
 await page.locator('#department').fill('QA')
 await page.getByRole('button', {name: 'Submit'}).click()
await expect(page.locator('.rt-table')).toContainText('Misu')
await expect(page.locator('.rt-table')).toContainText('Iliuta')
})

test('web tables - edit data in the table', async({page}) => {
 await page.getByText('Web Tables').click()
 await expect(page).toHaveURL('https://demoqa.com/webtables')
 await page.getByTitle('Edit').first().click()
 await expect(page.getByText('Registration Form')).toBeVisible()
 await page.locator('#firstName').fill('Cierra Leone')
 await page.getByRole('button', {name: 'Submit'}).click()
 await expect(page.locator('.rt-table')).toContainText('Cierra Leone')
})

test('web tables - delete data from the table', async({page}) => {
 await page.getByText('Web Tables').click()
 await expect(page).toHaveURL('https://demoqa.com/webtables')
 await page.getByTitle('Delete').first().click()
 //await expect(page.getByText('Registration Form')).toBeVisible()
 await expect(page.locator('.rt-table')).not.toContainText('Cierra Leone')
})

test('web tables - search data in the table', async({page}) => {
 await page.getByText('Web Tables').click()
 await expect(page).toHaveURL('https://demoqa.com/webtables')

 const searchInput = page.getByRole('textbox', {name: 'Type to search'})

 await searchInput.click()
 await searchInput.fill('Alden')
 await expect(page.locator('.rt-table')).toContainText('Alden')
})

test('buttons - doubleclick', async({page}) => {
 await page.getByText('Buttons').click()
 await expect(page).toHaveURL('https://demoqa.com/buttons')
await page.getByText('Double Click Me').dblclick()
await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
})

test('buttons - right click', async({page}) => {
 await page.getByText('Buttons').click()
 await expect(page).toHaveURL('https://demoqa.com/buttons')
await page.getByText('Right Click Me').click({button: 'right'})
await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
})

test('buttons - simple click', async({page}) => {
 await page.getByText('Buttons').click()
 await expect(page).toHaveURL('https://demoqa.com/buttons')
await page.getByText('Click Me').last().click()
await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click')
})

test('links - home opens in new tab', async({page, context}) => {
 await page.getByText('Links', { exact: true }).click()
 await expect(page).toHaveURL('https://demoqa.com/links')
 const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('link', { name: 'Home', exact: true }).click(),
]);
await newPage.waitForLoadState()
await expect(newPage).toHaveURL('https://demoqa.com/')


})
test('links - dynamic home opens in new tab', async({page, context}) => {
 await page.getByText('Links', { exact: true }).click()
 await expect(page).toHaveURL('https://demoqa.com/links')
 const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('link', { name: 'Home', exact: true }).click(),
]);
await newPage.waitForLoadState()
await expect(newPage).toHaveURL('https://demoqa.com/')


})

test('links - created return 201', async({page, context}) => {
 await page.getByText('Links', { exact: true }).click()
 await expect(page).toHaveURL('https://demoqa.com/links')
 await page.getByText('Created').click()
await expect(page.locator('#linkResponse')).toContainText('Created')
})

})
