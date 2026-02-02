import {test, expect} from '@playwright/test'
import path from 'path'
import { NavigationPage } from '../pages/NavigationPage'
import { TextBoxPage } from '../pages/Elements/TextboxPage'
import { CheckboxPage } from '../pages/Elements/CheckboxPage'
import { RadioButtonsPage } from '../pages/Elements/RadioButtonsPage'
import { WebTablePage } from '../pages/Elements/WebtablesPage'
import { ButtonsPage } from '../pages/Elements/ButtonsPage'
import {LinksPage} from '../pages/Elements/LinksPage'
import {BrokenLinksPage} from '../pages/Elements/BrokenLinks'
import {UploadAndDownloadPage} from '../pages/Elements/UploadAndDownload'
import {DynamicPropertiesPage} from '../pages/Elements/DiniamicProprieties'


test.describe('Elements section', () => {

    test.beforeEach(async ({ page }) => {

      const navigation =new NavigationPage(page)
      await navigation.openDemoQa()
      await navigation.goToElements()
    })

test('element section - fill inputs from textbox', async ({page})=> {

await page.getByText('Text Box').click()
await expect(page).toHaveURL('https://demoqa.com/text-box')

const textBoxPage = new TextBoxPage(page)

await textBoxPage.fillNameInput('Misu Iliuta')
await textBoxPage.fillEmailInput('test@test.com')
await textBoxPage.fillCurrentAddressInput('Botosani, Romania')
await textBoxPage.fillPermanentAddressInput('Marchian, Botosani, Romania')
await textBoxPage.ClickSubmitButton()

const output = page.locator('#output')

await expect(output).toContainText('Misu Iliuta')
await expect(output).toContainText('test@test.com')
await expect(output).toContainText('Botosani, Romania')
await expect(output).toContainText('Marchian, Botosani, Romania')

// the same test without POM

// test(' text box in elements section', async ({page})=> {

//                    await page.getByText('Text Box').click()
//                    await expect(page).toHaveURL('https://demoqa.com/text-box')

//                    const fullNameInput = page.locator('#userName')
                  
//                    await fullNameInput.scrollIntoViewIfNeeded()
//                    await fullNameInput.click()
//                    await fullNameInput.fill('Iliuta Misu', {force:true})
//                    await expect(fullNameInput).toHaveValue('Iliuta Misu')

//                    const emailInput = page.locator('#userEmail')

//                    await emailInput.scrollIntoViewIfNeeded()
//                    await emailInput.click()
//                    await emailInput.fill('test@test.com')
//                    await expect(emailInput).toHaveValue('test@test.com')

//                    const currentAddressInput = page.locator('#currentAddress')

//                    await currentAddressInput.scrollIntoViewIfNeeded()
//                    await currentAddressInput.click()
//                    await currentAddressInput.fill('Botosani, Romania')
//                    await expect(currentAddressInput).toHaveValue('Botosani, Romania')

//                    const permanentAdressInput = page.locator('#permanentAddress')

//                    await permanentAdressInput.click()
//                    await permanentAdressInput.fill("Marchian, Botosani, Romania")
//                    await expect(permanentAdressInput).toHaveValue("Marchian, Botosani, Romania")

//                    const submitButton = page.locator('#submit')
//                    await submitButton.click()
//                    await expect(submitButton).toBeVisible()
//                    await expect(submitButton).toBeEnabled()
   
// })
})

test.describe('Check Box',() => {

test.beforeEach(async ({ page }) => {
await page.getByText('Check Box').click();
await expect(page).toHaveURL('https://demoqa.com/checkbox');
await expect(page.getByText('Home')).toBeVisible();
});

test('checkbox in elements section - toogle Home', async ({page})=> {
 
const checkbox = new CheckboxPage(page)
 
await checkbox.expandHome()
await expect(page.getByText('Desktop')).toBeVisible()

await checkbox.collapseHome()
await expect(page.getByText('Desktop')).toBeHidden()
})

test('checkbox in elements section - expand all', async ({page})=> {

const checkbox = new CheckboxPage(page)

await checkbox.expandAll ()
await expect(page.getByText('Notes')).toBeVisible()
})

test('checkbox in elements section - collapse all', async ({page})=> {

const checkbox = new CheckboxPage(page)

await checkbox.collapseAll()
await expect(page.getByText('Notes')).toBeHidden()
})

test('checkbox in elements section - select all via Home', async ({page})=> {

const checkbox = new CheckboxPage(page)

await checkbox.selectHome()
await expect(page.locator('#result')).toBeVisible();
await expect(page.locator('#result')).toContainText('home');
await expect(page.locator('#result')).toContainText('desktop');
await expect(page.locator('#result')).toContainText('documents');
})
})

test.describe('Radio buttons', ()=>{

test.beforeEach(async({page})=>{
 await page.getByText('Radio Button').click()
 await expect(page).toHaveURL('https://demoqa.com/radio-button')
})

test('radio buttons - select Yes', async({page}) => {

const radioButtons = new RadioButtonsPage(page)

await radioButtons.yesRadio()
await expect(page.locator('.text-success')).toBeVisible()
await expect(page.locator('.text-success')).toHaveText('Yes')
})

test('radio buttons - select Impressive', async({page}) => {

const radioButtons = new RadioButtonsPage(page)

await radioButtons.impressiveRadio()
await expect(page.locator('.text-success')).toBeVisible()
await expect(page.locator('.text-success')).toHaveText('Impressive')
})   

test('radio buttons - No option is disable', async({page}) => {

const radioButtons = new RadioButtonsPage(page)

await expect(radioButtons.getNoRadio()).toBeDisabled()
})
})

test.describe('web tables', ()=>{

test.beforeEach(async({page})=>{
await page.getByText('Web Tables').click()
await expect(page).toHaveURL('https://demoqa.com/webtables')
await expect(page.locator('.rt-table')).toBeVisible()
})

test('web tables - add data to the table', async({page}) => {

const webtable = new WebTablePage(page)

await webtable.addNameinTabel()
await expect(page.getByText('Registration Form')).toBeVisible()
await webtable.fillFirstName('Misu')
await webtable.fillLastName('Iliuta')
await webtable.fillEmail('test@test.com')
await webtable.fillAge('25')
await webtable.fillSalary('2500')
await webtable.fillDepartament('QA')
await webtable.clickSubmitButton()
await expect(page.locator('.rt-table')).toContainText('Misu')
await expect(page.locator('.rt-table')).toContainText('Iliuta')
})

test('web tables - edit data in the table', async({page}) => {

const webtable = new WebTablePage(page)

await webtable.clickEditButton()
await expect(page.getByText('Registration Form')).toBeVisible()
await webtable.fillFirstName('Cierra Leone')
await webtable.clickSubmitButton()
await expect(page.locator('.rt-table')).toContainText('Cierra Leone')
})

test('web tables - delete data from the table', async({page}) => {

const webtable = new WebTablePage(page)

await webtable.clickDeleteButton()
await expect(page.locator('.rt-table')).not.toContainText('Cierra Leone')
})

test('web tables - search data in the table', async({page}) => {

const webtable = new WebTablePage(page)

await webtable.typeAnameInSearchInput('Alden')
await expect(page.locator('.rt-table')).toContainText('Alden')
})
})

test.describe('buttons', ()=> {

test.beforeEach(async({page})=>{
await page.getByText('Buttons').click()
await expect(page).toHaveURL('https://demoqa.com/buttons')
})

test('buttons - doubleclick', async({page}) => {

const buttons = new ButtonsPage(page)
 
await buttons.pressDoubleClickButton()
await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')//
})

test('buttons - right click', async({page}) => { 

const buttons = new ButtonsPage(page)

await buttons.pressRightClickButton()
await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
})

test('buttons - simple click', async({page}) => {

const buttons = new ButtonsPage(page)
 
await buttons.pressClickMeButton()
await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click')
})
})

test.describe('links',()=>{

test.beforeEach(async({page})=>{
await page.getByText('Links', { exact: true }).click()
await expect(page).toHaveURL('https://demoqa.com/links')
})

test('links - static home opens in new tab', async({page, context}) => {

const linksPage = new LinksPage(page)

const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  linksPage.clickStaticHome(),]);

await newPage.waitForLoadState()
await expect(newPage).toHaveURL('https://demoqa.com/')
})

test('links - dynamic home opens in new tab', async({page, context}) => {
 
const linksPage = new LinksPage(page)

const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  linksPage.clickDynamicHome(),]);

await newPage.waitForLoadState()
await expect(newPage).toHaveURL('https://demoqa.com/')
})

test('links - created return 201', async({page, context}) => {
 
const linksPage = new LinksPage(page)

linksPage.clickCreated()
await expect(page.locator('#linkResponse')).toContainText('Created')
})
})

test.describe('broken links', ()=> {
  test.beforeEach(async({page}) =>{

await page.getByText('Broken Links - Images').click()
await expect(page).toHaveURL('https://demoqa.com/broken')
})

test('broken links - valid image is displayed', async({page, context}) => {

const brokenLinks = new BrokenLinksPage(page)

await expect(brokenLinks.validImage).toBeVisible()
})

test('broken links - broken image', async({page, context}) => {

const brokenLinks = new BrokenLinksPage(page)

await expect(brokenLinks.brokenImage).toBeVisible()})

test('broken links - valid link', async({page, context, request}) => {

const brokenLinks = new BrokenLinksPage(page)
const href = await brokenLinks.getValidLinkHref()
const response = await request.get(href!)
expect(response.status()).toBe(200)})

test('broken links - broken link', async({page, context, request}) => {

const brokenLinks = new BrokenLinksPage(page)
const href = await brokenLinks.getBrokenLinkHref()
const response = await request.get(href!)
expect(response.status()).toBe(500)
})
})

test.describe('upload and downoald', ()=>{

test.beforeEach(async({page})=>{
await page.getByText('Upload and Download').click()
await expect(page).toHaveURL('https://demoqa.com/upload-download')
})
test('upload and download - download', async({page, context, request}) => {

const uploadAndDownload = new UploadAndDownloadPage(page)
const downloadPromise = page.waitForEvent('download')

await uploadAndDownload.downloadButton.click()

const downlod = await downloadPromise

expect(downlod.suggestedFilename()).toBeTruthy()
})

test('upload and download - upload', async({page, context, request}) => {

const uploadAndDownload = new UploadAndDownloadPage(page)
const filePath = (path.join(__dirname,'resources', 'test-file.txt'))

await uploadAndDownload.uploadFile(filePath)
 
await expect(uploadAndDownload.uploadFilePath).toContainText('test-file.txt')
})
})

test.describe('dynamic properties', () =>{

test.beforeEach(async({page})=>{
await page.getByText('Dynamic Properties').click()
await expect(page).toHaveURL('https://demoqa.com/dynamic-properties')
})

test.skip('dynamic properties - enable button(flaky on demo site) ', async({page, context, request}) => {

const dynamicProperties = new DynamicPropertiesPage(page)

await expect(dynamicProperties.enableAfterButton).toBeEnabled()
})

test.fixme('dynamic properties - change color ', async({page, context, request}) => {
  //flaky due to timing differences across browsers

const dynamicProperties = new DynamicPropertiesPage(page)

await expect(dynamicProperties.colorChangeButton).toHaveClass(/text-danger/);
})

test('dynamic properties - button becomes visible ', async({page, context, request}) => {

const dynamicProperties = new DynamicPropertiesPage(page)

await expect(dynamicProperties.visibleAfterButton).toBeVisible()
})
})
})

