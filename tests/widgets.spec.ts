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

  test('accordian - all 3 accordian headers are visible', async ({page})=> {
    await page.getByText('Accordian').click()
    
    const acordianTitle = page.locator('.card-header')

    await expect(acordianTitle).toHaveCount(3)
    await expect(acordianTitle.nth(0)).toContainText('What is Lorem Ipsum?')
    await expect(acordianTitle.nth(1)).toContainText('Where does it come from?')
    await expect(acordianTitle.nth(2)).toContainText('Why do we use it?')
  })

  test('accordian - when click on seaction no.2, section no.1 should be collapsed and section no.2 expaned', async ({page})=> {
    await page.getByText('Accordian').click()

    await expect(page.locator('#section1Content')).toBeVisible()
    await page.locator('#section2Heading').click()
    await expect(page.locator('#section1Content')).toBeHidden()
    await expect(page.locator('#section2Content')).toBeVisible()

  })

  test('accordian - when click on seaction no.3, section no.1 should be collapsed and section no.3 expaned', async ({page})=> {
    await page.getByText('Accordian').click()

    await expect(page.locator('#section1Content')).toBeVisible()
    await expect(page.locator('#section2Content')).toBeHidden()
    await page.locator('#section3Heading').click()
    await expect(page.locator('#section1Content')).toBeHidden()
    await expect(page.locator('#section3Content')).toBeVisible()

  })
test.skip('auto complete - type single color name', async ({page})=> {
    await page.getByText('Auto Complete').click()
    
const inputSingleColor = page.locator('#autoCompleteSingleContainer input')
await inputSingleColor.fill('Gr')
await page.locator('.auto-complete__option', {hasText:'Green'}).click()
await expect(inputSingleColor).toHaveValue('Green')

//  await page.getByText('Type single color name').click()
//  expect(page.getByText('Type single color name')).toBeVisible()
//await inputSingleColor.press('Enter')
//await page.getByRole('option', {name: 'Green'}).click()
//await page.getByText('Green').click()
// await expect(inputSingleColor).toBeVisible()
// await expect(inputSingleColor).toBeEnabled()
//  expect(page.getByText('Type single color name')).toBeEnabled()
//  expect(page.getByText('Type single color name')).toBeEditable()
//  await page.getByText('Type single color name').fill('green')
//await expect(page.getByText("Green")).toBeVisible()
  })
  

  test('auto complete - type multiple color names', async ({page})=> {
    await page.getByText('Auto Complete').click()
   

 const inputMultipleColors = page.locator('#autoCompleteMultipleContainer input')
 await inputMultipleColors.click()
 await inputMultipleColors.fill('Ye')
 await inputMultipleColors.press('Enter')
await expect(
  page.locator('.auto-complete__multi-value__label', { hasText: 'Yellow' })
).toBeVisible();
await inputMultipleColors.fill('Re')
 await inputMultipleColors.press('Enter')
await expect(
  page.locator('.auto-complete__multi-value__label', { hasText: 'Red' })
).toBeVisible();
  
})

test("datepicker - select a day from calendar", async ({page})=> {
await page.getByText('Date Picker').click()

const calendarInputField = page.locator('#datePickerMonthYearInput')
await calendarInputField.click()
await page.locator('.react-datepicker__day').getByText('25').click()
await expect(calendarInputField).toHaveValue('01/25/2026')
})

test("datepicker - select the 1st day from calendar", async ({page})=> {
await page.getByText('Date Picker').click()

const calendarInputField = page.locator('#datePickerMonthYearInput')
await calendarInputField.click()
await page.getByRole('option', {
    name: 'Choose Thursday, January 1st, 2026'
  }).click()
await expect(calendarInputField).toHaveValue('01/01/2026')
})

test("datepicker - change month and select a day", async ({page})=> {
await page.getByText('Date Picker').click()

const calendarInputField = page.locator('#datePickerMonthYearInput')
await calendarInputField.click()

await page.locator('.react-datepicker__month-select').selectOption('1')
await page.getByRole('option', {
    name: 'Choose Wednesday, February 4th, 2026'
  }).click()
await expect(calendarInputField).toHaveValue('02/04/2026')
})

test("datepicker - select an hour", async ({page})=> {
await page.getByText('Date Picker').click()

const dateTime = page.locator('#dateAndTimePickerInput')
await dateTime.click()
await page.getByText('01:00').click()
await expect(dateTime).toContainText('01:00')
})
test("datepicker - change automaticly day and month", async ({page})=> {
await page.getByText('Date Picker').click()

})

test('date picker - select tomorrow dynamically', async ({page})=> {
await page.getByText('Date Picker').click()

const dateCalendar = page.locator('#datePickerMonthYearInput')
await dateCalendar.click()


 let tomorrow = new Date()
 tomorrow.setDate(tomorrow.getDate() + 1)

 
 const month = String(tomorrow.getMonth()+1).padStart(2, '0')
 const day = String(tomorrow.getDate()).padStart(2, '0')
 const year = tomorrow.getFullYear()

 const expectedValue = `${month}/${day}/${year}`

//  const ariaLabel = `Choose ${tomorrow.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year:'numeric'})}`
//  await page.getByRole('option', {name: ariaLabel}).click()
await page
    .locator(
      '.react-datepicker__day:not(.react-datepicker__day--outside-month)',
      { hasText: tomorrow.getDate().toString() }
    )
    .click();
 await expect(dateCalendar).toHaveValue(expectedValue)
})

test('datepicker - select an hour and the day after tomorroy dynamically', async ({page}) =>
{
  await page.getByText('Date Picker').click()

  const dayAndHour = page.locator('#dateAndTimePickerInput')
  await dayAndHour.click()

  const dayAfterTomorrow = new Date()
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
  const dayText = dayAfterTomorrow.getDate().toString()

   await page.locator('.react-datepicker__day:not(.react-datepicker__day--outside-month)', {hasText:dayText}).click()

  await page.getByText('12:00').click()
  await expect(dayAndHour).toHaveValue('January 29, 2026 12:00 PM')
})
test ('sliders - change value using keyboard', async ({page})=>{
 await page.getByText('Slider').click()

 const slider = page.locator('input[type="range"]')
 const inputValue = page.locator('#sliderValue')

 await slider.focus()
 await slider.press('ArrowRight')
  await slider.press('ArrowRight')
await slider.press('ArrowRight')
  await slider.press('ArrowRight')
  await expect(inputValue).toHaveValue('29')
})
test ('sliders - change slider setting a value ', async ({page})=>{
 await page.getByText('Slider').click()

 const slider = page.locator('input[type="range"]')
 const inputValue = page.locator('#sliderValue')
//await inputValue.click()
 await slider.fill('50')
 
  await expect(inputValue).toHaveValue('50')
})

test ('sliders - should not go below minimum value ', async ({page})=>{
 await page.getByText('Slider').click()

 const slider = page.locator('input[type="range"]')
 const inputValue = page.locator('#sliderValue')
//await inputValue.click()
 await slider.fill('0')

 await slider.focus()
 await slider.press('ArrowLeft')
 await slider.press('ArrowLeft')
  await expect(inputValue).toHaveValue('0')
})
test ('sliders - should not go below maximum value ', async ({page})=>{
 await page.getByText('Slider').click()

 const slider = page.locator('input[type="range"]')
 const inputValue = page.locator('#sliderValue')
//await inputValue.click()
 await slider.fill('100')

 await slider.focus()
 await slider.press('ArrowRight')
 await slider.press('ArrowRight')
  await expect(inputValue).toHaveValue('100')
})

test ('sliders - the value should not be set from input field', async ({page})=>{
 await page.getByText('Slider').click()

 const slider = page.locator('input[type="range"]')
 const inputValue = page.locator('#sliderValue')

 await expect(inputValue).toHaveValue('25')
 await inputValue.click()
 await inputValue.fill('50')

 
  await expect(inputValue).toHaveValue('25')
})
test ('sliders - the default value is 25', async ({page})=>{
 await page.getByText('Slider').click()


 const inputValue = page.locator('#sliderValue')
 
  await expect(inputValue).toHaveValue('25')
})
test ('progress bar ', async ({page})=>{
 await page.getByText('Progress Bar').click()

 const progressBar = page.locator('#progressBar')
 const startStopButton = page.locator('#startStopButton')


 await startStopButton.click()
 await page.waitForTimeout(2000)
 await startStopButton.click()

 const valueAfterStop = await progressBar.textContent()
  await page.waitForTimeout(1000)
  await expect(progressBar).toHaveText(valueAfterStop!)

})

test ('progress bar - reset progress bar ', async ({page})=>{
 await page.getByText('Progress Bar').click()

 const progressBar = page.locator('#progressBar')
 const startStopButton = page.locator('#startStopButton')


 await startStopButton.click()
 await expect(progressBar).toHaveText('100%', {timeout:15000})
 await startStopButton.click()
 await expect(progressBar).toHaveText('0%')
})
test ('tabs - default tab should be What ', async ({page})=>{
 await page.getByText('Tabs').click()

 await page.getByRole('tab').click()

 const tabWhat = page.locator('#demo-tab-what')
 await expect(tabWhat).toBeVisible()
})

test ('tabs - should show Origin content when Origin tab is clicked ', async ({page})=>{
 await page.getByText('Tabs').click()

 await page.getByRole('tab', {name: 'Origin'}).click()

 const whatContent = page.locator('#demo-tabpane-what')
 const originContent = page.locator('#demo-tabpane-origin')

 await expect(originContent).toBeVisible()
 await expect(whatContent).not.toBeVisible()

})
test ('tabs - More tab should be disabled ', async ({page})=>{
 await page.getByText('Tabs').click()

 await page.getByRole('tab', {name: 'More'})

 const moreTab = page.getByRole('tab', {name: 'More'})

 await expect(moreTab).toBeDisabled()

})

test ('tool tips ', async ({page})=>{
 await page.getByText('Tool Tips').click()

 const toolTipButton = page.locator('#toolTipButton')
 
 await toolTipButton.hover()

 const tooltip = page.locator('.tooltip-inner')

 await expect(tooltip).toBeVisible() 
 await expect(tooltip).toHaveText('You hovered over the Button')

})

test ('tool tips - hover over the button ', async ({page})=>{
 await page.getByText('Tool Tips').click()

 const toolTipButton = page.getByRole('button', {name:'Hover me to see'})
 
 await toolTipButton.hover()

 const tooltip = page.locator('.tooltip-inner')

 await expect(tooltip).toBeVisible() 
 await expect(tooltip).toHaveText('You hovered over the Button')

})

test ('tool tips - hover over the text field ', async ({page})=>{
 await page.getByText('Tool Tips').click()

 const toolTiptextField = page.getByPlaceholder('Hover me to see')
 
 await toolTiptextField.hover()

 const tooltip = page.locator('.tooltip-inner')

 await expect(tooltip).toBeVisible() 
 await expect(tooltip).toHaveText('You hovered over the text field')

})

test ('tool tips - hover over a link ', async ({page})=>{
 await page.getByText('Tool Tips').click()

 const toolTipLinkContrary = page.getByText('Contrary')
 
 await toolTipLinkContrary.hover()

 const tooltip = page.locator('.tooltip-inner')

 await expect(tooltip).toBeVisible() 
 await expect(tooltip).toHaveText('You hovered over the Contrary')

})

test ('menu - should show submenu on hover ', async ({page})=>{
 await page.getByText('Menu', { exact: true }).click()

 const mainItem2 = page.getByText('Main Item 2')
 const subItem = page.getByRole('link', { name: 'Sub Item' }).first()

 await mainItem2.hover()

 await expect(subItem).toBeVisible()
await expect(mainItem2).toBeVisible()

})

test ('menu - should show sub submenu on hover ', async ({page})=>{
 await page.getByText('Menu', { exact: true }).click()

 const mainItem2 = page.getByText('Main Item 2')
 const subItem1 = page.getByRole('link', { name: 'Sub Item' }).first()
  const subItem2 = page.getByRole('link', { name: 'Sub Item' })
const subSubList = page.getByRole ('link', {name:'SUB SUB LIST'})
const subSubItem1 = page.getByRole('link', {name:'Sub Sub Item 1'})
const subSubItem2 = page.getByText('Sub Sub Item 2')

 await mainItem2.hover()
 await subItem1.hover()
 await subSubList.hover()


await expect(subSubItem1).toBeVisible()
await expect(subSubItem2).toBeVisible()

})

test ('select menu - select value', async ({page})=>{
 await page.getByText('Select Menu').click()

 
 const selectValue= page.locator('#withOptGroup')
 await selectValue.click()

 await page.getByText('A root option').click()
 await expect(selectValue).toContainText('A root option')


})

test ('select menu - select one', async ({page})=>{
 await page.getByText('Select Menu').click()

 const selectOne = page.locator('#selectOne')
 await selectOne.click()
 await page.getByText('Prof.').click()
 await expect(selectOne).toContainText('Prof.')
})

test ('select menu - old style select menu', async ({page})=>{
 await page.getByText('Select Menu').click()

 const selectOldStyle = page.locator('#oldSelectMenu')
 await selectOldStyle.click()
 await selectOldStyle.selectOption('Magenta')
 await expect(selectOldStyle).toHaveValue('9')
})

test ('select menu - multiselect should allow select multiples values', async ({page})=>{
 await page.getByText('Select Menu').click()

 const selectMultiple = page.locator('#react-select-4-input')

 await selectMultiple.fill('Green')
 await selectMultiple.press('Enter')

 await selectMultiple.fill('Blue')
 await selectMultiple.press('Enter')

 await selectMultiple.fill('Black')
 await selectMultiple.press('Enter')

 await selectMultiple.fill('Red')
 await selectMultiple.press('Enter')

 await expect(page.getByText('Green').nth(1)).toBeVisible()
 await expect(page.getByText('Blue').nth(1)).toBeVisible()
 await expect(page.getByText('Black').nth(1)).toBeVisible()
 await expect(page.getByText('Red').nth(1)).toBeVisible()
 
})
test ('select menu - standard multi select cars', async ({page})=>{
 await page.getByText('Select Menu').click()

 const cars = page.locator('#cars')
 const selectedCars = ['Volvo', 'Saab', 'Opel', 'Audi']
 await cars.selectOption(selectedCars)
 await expect(cars).toHaveValues(['volvo','saab', 'opel', 'audi'])
})

})