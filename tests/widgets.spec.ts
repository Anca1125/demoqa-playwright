import { test, expect } from '@playwright/test'
import { NavigationPage } from '../pages/NavigationPage'
import {AccordionPage} from '../pages/Widgets/AccordianPage'
import {AutoCompletePage} from '../pages/Widgets/AutoCompletePage'
import { DatePickerPage } from '../pages/Widgets/DatePickerPage'
import { SliderPage } from '../pages/Widgets/SliderPage'
import {ProgressBarPage} from '../pages/Widgets/ProgressBarPage'
import {TabsPage} from '../pages/Widgets/TabsPage'
import {ToolTipsPage} from '../pages/Widgets/ToolTipsPage'
import {MenuPage} from '../pages/Widgets/MenuPage'
import {SelectMenuPage} from '../pages/Widgets/SelectMenuPage'


test.describe('Widgets', () => {

  test.beforeEach(async({page})=>{

const navigation =new NavigationPage(page)

await navigation.openDemoQa()
await navigation.goToWidgets()
  })

test.describe('accordian', () => {

  test.beforeEach(async({page})=>{

await page.getByText('Accordian').click()
await expect(page).toHaveURL('https://demoqa.com/accordian')
})

test('accordion - all 3 accordion headers are visible', async ({page})=> {
  
const accordionPage = new  AccordionPage(page)

await expect(accordionPage.accordionTitle).toHaveCount(3)
await expect(accordionPage.accordionTitle.nth(0)).toContainText('What is Lorem Ipsum?')
await expect(accordionPage.accordionTitle.nth(1)).toContainText('Where does it come from?')
await expect(accordionPage.accordionTitle.nth(2)).toContainText('Why do we use it?')
})

test('accordion - when click on section no.2, section no.1 should be collapsed and section no.2 expaned', async ({page})=> {
  
const accordionPage = new  AccordionPage(page)

await expect(accordionPage.accordionContent1).toBeVisible()
await accordionPage.clickHeading2()
await expect(accordionPage.accordionContent1).toBeHidden()
await expect(accordionPage.accordionContent2).toBeVisible()
})

test('accordion - when click on seaction no.3, sections no.1 and no.2 should be collapsed and section no.3 expaned', async ({page})=> {

const accordionPage = new  AccordionPage(page)

await expect(accordionPage.accordionContent1).toBeVisible()
await expect(accordionPage.accordionContent2).toBeHidden()
await accordionPage.clickHeading3()
await expect(accordionPage.accordionContent1).toBeHidden()
await expect(accordionPage.accordionContent2).toBeHidden()
await expect(accordionPage.accordionContent3).toBeVisible()
})
})

test.describe('auto complete', ()=> {

test.beforeEach(async ({page})=>{
await page.getByText('Auto Complete').click()
await expect(page).toHaveURL('https://demoqa.com/auto-complete')
})

test('auto complete - type single color name', async ({page})=> {  

const autoCompletePage = new AutoCompletePage(page)

await autoCompletePage.fillInputSingleColor('Gr')
await page.locator('.auto-complete__option', {hasText:'Green'}).click()
await expect(page.locator('.auto-complete__single-value')).toHaveText('Green')
})
  
test('auto complete - type multiple color names', async ({page})=> {

const autoCompletePage = new AutoCompletePage(page)
   
await autoCompletePage.clickInputMultipleColor()
await autoCompletePage.fillInputMultipleColor("Yellow")
await expect(page.locator('.auto-complete__multi-value__label', {hasText: 'Yellow'})
).toBeVisible()
await autoCompletePage.fillInputMultipleColor('Red')
await expect(page.locator('.auto-complete__multi-value__label', {hasText: 'Red'})
).toBeVisible();
}) 
})
test.describe('date picker', ()=>{

 test.beforeEach(async ({page})=> {
await page.getByText('Date Picker').click()
await expect(page).toHaveURL('https://demoqa.com/date-picker')
})

test("datepicker - select a day from calendar, from current month", async ({page})=> {

const datePickerPage = new DatePickerPage(page)

await datePickerPage.openSelectDate()
await page.locator('.react-datepicker__day').getByText('25').click()

const today = new Date()
const month = String(today.getMonth()+1).padStart(2, '0')
const year = today.getFullYear()

const expectedValue = `${month}/25/${year}`

await expect(datePickerPage.inputSelectDate).toHaveValue('02/25/2026')
})

test("datepicker - select time for a date", async ({page})=> {

const datePickerPage = new DatePickerPage(page)

await datePickerPage.openSelectDateAndTime()
await page.locator('.react-datepicker__day').getByText('15').click()
await page.getByText('01:00').click()
await expect(datePickerPage.inputSelectDateAndTime).toHaveValue(/1:00/)
})
})

test.describe('slider', ()=> {

  test.beforeEach(async({page})=>{
await page.getByText('Slider').click()
await expect(page).toHaveURL('https://demoqa.com/slider')
})

test('slider - value default is 25',async  ({page})=> {

const sliderPage = new SliderPage(page)

await expect(sliderPage.sliderInputValue).toHaveValue('25')
})

test ('slider - change value using keyboard', async ({page})=>{

const sliderPage = new SliderPage(page)

await sliderPage.focusSlider()
await sliderPage.moveRight(4)
await expect(sliderPage.sliderInputValue).toHaveValue('29')
})

test ('sliders - change slider setting a value ', async ({page})=>{

const sliderPage = new SliderPage(page)

await sliderPage.setInputSlider('50')
await expect(sliderPage.sliderInputValue).toHaveValue('50')
})

test ('sliders - should not go below minimum value ', async ({page})=>{

const sliderPage = new SliderPage(page)

await sliderPage.setInputSlider('0')
await sliderPage.moveLeft(4)
await expect(sliderPage.sliderInputValue).toHaveValue('0')
})
test ('sliders - should not go below maximum value ', async ({page})=>{
 
const sliderPage = new SliderPage(page)

await sliderPage.setInputSlider('100')
await sliderPage.moveRight(5)
await expect(sliderPage.sliderInputValue).toHaveValue('100')
})

test ('sliders - the value should not be set from input field', async ({page})=>{

const sliderPage = new SliderPage(page)

await expect(sliderPage.sliderInputValue).toHaveValue('25')
await sliderPage.fillSliderInputValue('50')
await expect(sliderPage.sliderInputValue).toHaveValue('25')
})
})

test.describe('progress bar ', ()=> {

 test.beforeEach(async({page})=>{
await page.getByText('Progress Bar').click()
await expect(page).toHaveURL('https://demoqa.com/progress-bar')
})

test ('progress bar - value after stop ', async ({page})=>{
 
const progressBarPage = new ProgressBarPage(page)

await progressBarPage.clickStartStopButton()
await page.waitForTimeout(2000)
await progressBarPage.clickStartStopButton()

const valueAfterStop = await progressBarPage.progressBar.textContent()

await page.waitForTimeout(1000)
await expect(progressBarPage.progressBar).toHaveText(valueAfterStop!)
})

test ('progress bar - reset progress bar ', async ({page})=>{
 
const progressBarPage = new ProgressBarPage(page)

await progressBarPage.clickStartStopButton()
await expect(progressBarPage.progressBar).toHaveText('100%', {timeout:15000})
await progressBarPage.clickResetButton()
await expect(progressBarPage.progressBar).toHaveText('0%')
})
})

test.describe('tabs', ()=>{

 test.beforeEach(async ({page})=>{
await page.getByText('Tabs').click()
await expect(page).toHaveURL('https://demoqa.com/tabs')
})

test ('tabs - default tab should be What ', async ({page})=>{

const tabsPage = new TabsPage(page)

await tabsPage.clickTabWhat()
await expect(tabsPage.tabWhat).toBeVisible()
})

test ('tabs - should show Origin content when Origin tab is clicked, and should hide What tab content ', async ({page})=>{

const tabsPage = new TabsPage(page)

await tabsPage.clickTabOrigin()
await expect(tabsPage.contentOrigin).toBeVisible()
await expect(tabsPage.contentWhat).not.toBeVisible()
})

test ('tabs - More tab should be disabled ', async ({page})=>{

const tabsPage = new TabsPage(page)

await expect(tabsPage.tabMore).toBeDisabled()
})
})

test.describe('tool tips', ()=> {

 test.beforeEach(async ({page})=>{
await page.getByText('Tool Tips').click()
await expect(page).toHaveURL('https://demoqa.com/tool-tips')
 })

test ('tool tips - hover over the button ', async ({page})=>{

const toolTipPage = new ToolTipsPage(page)

await toolTipPage.hoverToolTipButton()
await expect(toolTipPage.tooltip).toBeVisible() 
await expect(toolTipPage.tooltip).toHaveText('You hovered over the Button')
})

test ('tool tips - hover over the text field ', async ({page})=>{

const toolTipPage = new ToolTipsPage(page)

await toolTipPage.hoverToolTipTextField()
await expect(toolTipPage.tooltip).toBeVisible() 
await expect(toolTipPage.tooltip).toHaveText('You hovered over the text field')
})

test ('tool tips - hover over a link ', async ({page})=>{

const toolTipPage = new ToolTipsPage(page)

await toolTipPage.hoverToolTipLink()
await expect(toolTipPage.tooltip).toBeVisible() 
await expect(toolTipPage.tooltip).toHaveText('You hovered over the Contrary')
})
})
test.describe('menu', ()=>{

  test.beforeEach(async ({page})=> {
await page.getByText('Menu', { exact: true }).click()
await expect(page).toHaveURL('https://demoqa.com/menu')
})

test ('menu - should show submenu on hover ', async ({page})=>{

const menuPage = new MenuPage(page)

await menuPage.hoverMainItem2()
await expect(menuPage.subItem.first()).toBeVisible()
//await expect(mainItem2).toBeVisible()

})

test ('menu - should show sub submenu on hover ', async ({page})=>{

const menuPage = new MenuPage(page)

await menuPage.hoverMainItem2()
await menuPage.hoverSubSubList()
await expect(menuPage.SubSubItem1).toBeVisible()
})
})

test.describe('select menu', ()=> {
  test.beforeEach(async ({page})=>{
 await page.getByText('Select Menu').click()
 await expect(page).toHaveURL('https://demoqa.com/select-menu')
})

test ('select menu - select value', async ({page})=>{

const selectMenuPage = new SelectMenuPage(page)

await selectMenuPage.clickSelectValue()
await page.getByText('A root option').click()
await expect(selectMenuPage.selectValue).toContainText('A root option')
})

test ('select menu - select one', async ({page})=>{

const selectMenuPage = new SelectMenuPage(page)

await selectMenuPage.clickSelectOne()
await page.getByText('Prof.').click()
await expect(selectMenuPage.selectOne).toContainText('Prof.')
})

test ('select menu - old style select menu', async ({page})=>{

const selectMenuPage = new SelectMenuPage(page)

await selectMenuPage.clickOldStyleSelectMenu()
await selectMenuPage.oldStyleSelectMenu.selectOption('Magenta')
await expect(selectMenuPage.oldStyleSelectMenu).toHaveValue('9')
})

test ('select menu - multiselect should allow select multiples values', async ({page})=>{

const selectMenuPage = new SelectMenuPage(page)

await selectMenuPage.fillMultiSelectDropDown('Green')
await selectMenuPage.fillMultiSelectDropDown('Blue')
await selectMenuPage.fillMultiSelectDropDown('Black')
await selectMenuPage.fillMultiSelectDropDown('Red')
await expect(page.getByText('Green').nth(1)).toBeVisible()
await expect(page.getByText('Blue').nth(1)).toBeVisible()
await expect(page.getByText('Black').nth(1)).toBeVisible()
await expect(page.getByText('Red').nth(1)).toBeVisible() 
})

test ('select menu - standard multi select cars', async ({page})=>{

const selectMenuPage = new SelectMenuPage(page)

const cars = selectMenuPage.standardMultiSelect

await cars.selectOption(['volvo', 'saab', 'opel', 'audi'])
await expect(cars).toHaveValues(['volvo','saab', 'opel', 'audi'])
})
})
})
