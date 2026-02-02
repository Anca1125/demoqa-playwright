
import { test, expect } from '@playwright/test'
import { NavigationPage } from '../pages/NavigationPage'
import { BrowserWindowsPage} from '../pages/AlertsFramesWindows/BrowserWindowsPage'
import { AlertsPage } from '../pages/AlertsFramesWindows/AlertsPage'
import {FramesPage} from '../pages/AlertsFramesWindows/FramesPage'
import { NestedFramesPage } from '../pages/AlertsFramesWindows/NestedFramesPage'
import { ModalDialogsPage } from '../pages/AlertsFramesWindows/ModalDialogs'

test.describe('Alerts, Frame & Windows', () => {

  test.beforeEach(async({page})=>{

const navigation =new NavigationPage(page)

await navigation.openDemoQa()
await navigation.goToAlerts()
  })

test.describe('browser windows', ()=>{

test.beforeEach(async ({page}) =>{
await page.getByText('Browser Windows').click();
await expect(page).toHaveURL('https://demoqa.com/browser-windows');
})

test('browser windows - new tab', async ({ page }) => {
   
const browserWindowsPage =new BrowserWindowsPage(page)
   
const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      browserWindowsPage.newTabButton.click(),]);
    
await expect(newTab.getByText('This is a sample page')).toBeVisible();
  });

test('browser windows - new window', async ({ page }) => {

const browserWindowsPage =new BrowserWindowsPage(page)

const [newWindow] = await Promise.all([
      page.waitForEvent('popup'),
      browserWindowsPage.newWindowButton.click(),]);
await expect( newWindow.getByText('This is a sample page')).toBeVisible();
  });

test('browser windows - new window message', async ({ page }) => {

const browserWindowsPage =new BrowserWindowsPage(page)

const [messageWindow] = await Promise.all([
      page.waitForEvent('popup'),
      browserWindowsPage.newWindowMessageButton.click(),])

const content = await messageWindow.content()
    expect(content).toContain('Knowledge increases by sharing but not by saving.')
  })
  })
  
test.describe('alerts', ()=>{
test.beforeEach(async({page})=>{

await page.getByText('Alerts', { exact: true }).click();
await expect(page).toHaveURL('https://demoqa.com/alerts');
})

test('alerts - simple alert', async ({ page }) => {
   
const alerts = new AlertsPage(page)

page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toContain('You clicked a button');
      await dialog.accept();
    });

 await alerts.alertButton.click();
  });

test('alerts - confirm alert (cancel)', async ({ page }) => {

const alerts = new AlertsPage(page)
     
page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.dismiss();
    })

await alerts.confirmButton.click()

await expect(
      page.locator('#confirmResult')
    ).toContainText('Cancel')
  });

test('alerts - confirm alert (OK)', async ({ page }) => {

const alerts = new AlertsPage(page)

page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm')
      await dialog.accept()})

await alerts.confirmButton.click()

await expect( 
      page.locator('#confirmResult')
    ).toContainText('You selected Ok')
  })

test('alerts - alert appears after 5 seconds', async ({ page }) => {

const alerts = new AlertsPage(page)

page.once('dialog', async dialog => {
       expect(dialog.message()).toContain('This alert appeared after 5 seconds')
 await dialog.accept()
    });
 await alerts.timerAlertButton.click()
  })

test('alerts - prompt alert with message', async ({page})=>{

const alerts = new AlertsPage(page)

await Promise.all([page.waitForEvent('dialog').then(async dialog => {expect(dialog.type()).toBe('prompt')
await dialog.accept('Hello Anca!')
  }), alerts.promptButton.click()])
await expect (page.locator('#promptResult')).toContainText('Hello Anca!')
})
})

test.describe('frames', ()=> {

test.beforeEach(async({page})=>{
await page.getByText('Frames', {exact:true}).click()
await expect(page).toHaveURL('https://demoqa.com/frames')
})

test('frames - verify text in frame1', async ({page})=> {
  
const framesPage = new FramesPage(page)
  
await expect(framesPage.frame1.getByText('This is a sample page')).toBeVisible()
})

test('frames - verify text in frame2', async ({page})=> {

const framesPage = new FramesPage(page)
  
 await expect(framesPage.frame2.getByText('This is a sample page')).toBeVisible()
})
})

test.describe('nested frames', ()=>{
test.beforeEach(async({page})=>{
await page.getByText('Nested Frames').click()
await expect(page).toHaveURL('https://demoqa.com/nestedframes')
})

test('nested frames - verify parent frame', async ({page})=> {
 
const nestedFramePage = new NestedFramesPage(page)

await expect(nestedFramePage.frameParent.getByText('Parent Frame')).toBeVisible()
})

test('nested frames - verify child frame', async ({page})=> {

const nestedFramePage = new NestedFramesPage(page)

await expect(nestedFramePage.frameChild.getByText('Child Iframe')).toBeVisible()
})
})
//MODAL DIALOGS
test.describe('modal dialogs',()=>{

test.beforeEach(async({page})=>{
await page.getByText('Modal Dialogs').click();
await expect(page).toHaveURL('https://demoqa.com/modal-dialogs'); 
})

test('Alerts - verify small modal', async ({ page }) => {
  
const modalDialogs = new ModalDialogsPage(page)

await modalDialogs.clickSmallModal()
await expect(modalDialogs.smallModalTitle).toBeVisible()
await modalDialogs.clickCloseSmallModal()
await expect(modalDialogs.smallModalTitle).not.toBeVisible()  
})

test(' modals - verify large modal ', async ({page})=> {

const modalDialogs = new ModalDialogsPage(page)

await modalDialogs.clickLargeModal()
await expect(modalDialogs.largeModalTitle).toBeVisible()
await modalDialogs.clickCloseLargeModal()
await expect(modalDialogs.largeModalTitle).not.toBeVisible()
})
})
})


