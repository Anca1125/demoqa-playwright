import { test, expect } from '@playwright/test'
import { BookStorePage } from '../pages/BookStorePage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { BooksPage } from '../pages/BooksPage'
import { NavigationPage } from '../pages/NavigationPage'

// test.describe('Alerts, Frame & Windows', () => {

//   test.beforeEach(async({page})=>{

// const navigation =new NavigationPage(page)

// await navigation.openDemoQa()
// await navigation.goToAlerts()
//   })


test.describe('Book Store Application', () => {

  test.beforeEach(async({page})=>{

const navigation =new NavigationPage(page)

await navigation.openDemoQa()
await navigation.goToBookStore()

})

test('register - register user', async ({page})=> {

const bookStorePage = new BookStorePage(page)
const loginPage = new LoginPage(page)
const registerPage = new RegisterPage(page)
  
await bookStorePage.open()
await bookStorePage.clickLoginFromMenu()
await loginPage.clickNewUser()
await registerPage.fillFirstName('Misu')
await registerPage.fillLastName('Iliuta')
await registerPage.fillUserName('misu_iliuta')
await registerPage.fillPassword('P@ssw0rd')
await registerPage.clickRegister()
await expect(page.getByText('Please verify reCaptcha to register!')).toBeVisible()
})

test('login - login with invalid credentials', async ({page})=> {

const bookStorePage = new BookStorePage(page)
const loginPage = new LoginPage(page)

await bookStorePage.open()
await bookStorePage.clickLoginFromMenu()
await loginPage.fillUserName('test@test.com')
await loginPage.fillPassword('Passw0rd')
await loginPage.clickLogin()
await expect(page.getByText('Invalid username or password!')).toBeVisible()
})

 test('bookstore - search for a book in the list', async ({page})=>{

const bookStorePage = new BookStorePage(page)
const booksPage = new BooksPage(page)

await bookStorePage.open()
await booksPage.searchAbook('Git Pocket Guide')
await expect(page.getByText('Git Pocket Guide')).toBeVisible();
})

test('bookstore - cannot open book details without login', async ({page})=>{

const bookStorePage = new BookStorePage(page)
const booksPage = new BooksPage(page)

await bookStorePage.open()
await booksPage.clickBookByTitle('Git Pocket Guide')
await expect(page).toHaveURL('https://demoqa.com/books?book=9781449325862')
})
})