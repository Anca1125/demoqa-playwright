import {test, expect} from '@playwright/test'
import path from 'path';


test('practice form', async ({page}) =>{
                  await page.goto('https://demoqa.com/')
                  await page.getByText('Forms').click()
                  await page.getByText('Practice Form').click()
                  await expect(page).toHaveURL('https://demoqa.com/automation-practice-form')
                  
                  const firstName = page.locator('#firstName')
                  const lastName = page.locator('#lastName')

                  await firstName.scrollIntoViewIfNeeded()
                  await firstName.click()
                  await firstName.fill('Iliuta')
                  await lastName.scrollIntoViewIfNeeded()
                  await lastName.click()
                  await lastName.fill('Misu')
                  await expect(firstName).toHaveValue('Iliuta')
                  await expect(lastName).toHaveValue('Misu')

                  const emailAddress = page.locator('#userEmail')

                  await emailAddress.scrollIntoViewIfNeeded()
                  await emailAddress.click()
                  await emailAddress.fill('iliuta@misu.com')
                  await expect(emailAddress).toHaveValue('iliuta@misu.com')
                  


                  const gender = page.getByText('Male', {exact:true})

                  await gender.scrollIntoViewIfNeeded()
                  await gender.click()
                  await expect(page.locator('#gender-radio-1')).toBeChecked()

                const phoneNumber = page.locator('#userNumber')

                await phoneNumber.scrollIntoViewIfNeeded()
                await phoneNumber.click()
                await phoneNumber.fill('0743123123')
                await expect(phoneNumber).toHaveValue('0743123123')

                const dateOfBirth = page.locator('#dateOfBirthInput')
                await dateOfBirth.scrollIntoViewIfNeeded()
                await dateOfBirth.click()
                await page.locator('.react-datepicker__year-select').selectOption('2010')
                await page.locator('.react-datepicker__month-select').selectOption('November')
                //await page.locator('.react-datepicker__day react-datepicker__day--025')
                await page.locator('.react-datepicker__day--025:not(.react-datepicker__day--outside-month)'
).click();
await expect (dateOfBirth).toHaveValue('25 Nov 2010')

                  const subject = page.locator('#subjectsInput')
                  await subject.scrollIntoViewIfNeeded()
                  await subject.click()
                  await subject.fill('Software Tester')
//                   await page.locator('.subjects-auto-complete__menu')
//                   .getByText('Subjects', { exact: true })
//   .click();
//   await expect(
//   page.locator('.subjects-auto-complete__multi-value__label')
// ).toContainText('Software Tester');
                  await expect(subject).toBeVisible()

                const sportsHobbie = page.getByText('Sports')
                const readingHobbie = page.getByText('Reading')
                const musicHobbie = page.getByText('Music')

                await sportsHobbie.check()
                await readingHobbie.check()
                await musicHobbie.check()
                await expect(sportsHobbie).toBeChecked()
                await expect(readingHobbie).toBeChecked()
                await expect(musicHobbie).toBeChecked()

                const uploadInput = page.locator('#uploadPicture')

                await uploadInput.setInputFiles(path.join(__dirname, 'resources/pisica.jpg'))
                await expect(uploadInput).toHaveValue(/pisica\.jpg$/);

                //const currentAdress = page.locator('#currentAddress-wrapper')
                //const currentAdress = page.getByText('Current Address')

                 const currentAdress = page.getByPlaceholder('Current Address')

                 await currentAdress.scrollIntoViewIfNeeded()
                await currentAdress.click()
                await currentAdress.fill('Botosani, Romania')
                await expect(currentAdress).toHaveValue('Botosani, Romania')

                const stateInput = page.locator('#react-select-3-input')
               
await stateInput.scrollIntoViewIfNeeded()
await stateInput.click({force:true})
await stateInput.fill('NCR')
await stateInput.press('Enter')

const cityInput = page.locator('#react-select-4-input');

await cityInput.click({force:true});
await cityInput.fill('Delhi');
await cityInput.press('Enter');

await expect(page.locator('#state')).toContainText('NCR');
await expect(page.locator('#city')).toContainText('Delhi');

const submit = page.locator('#submit')
await submit.click()

const modalTitle = page.locator('#example-modal-sizes-title-lg')
await expect(modalTitle).toBeVisible()
await expect(modalTitle).toHaveText('Thanks for submitting the form')

const modalBody = page.locator('.modal-body')
await expect(modalBody).toContainText('Iliuta')
await expect(modalBody).toContainText('Misu')
await expect(modalBody).toContainText('Male')
//await expect(modalBody).toContainText('25 November,  2010')
await expect(modalBody).toContainText('NCR')
await expect(modalBody).toContainText('Delhi')
         
const closeTab = page.locator('#closeLargeModal')
await closeTab.press('Enter')
await expect(closeTab).toBeHidden()




})