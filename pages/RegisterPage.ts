import { Page } from '@playwright/test'


 export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//   async clickNewUser(){
//     await this.page.getByRole('button', {name:'New User'}).click()

//   }

async fillFirstName(firstName: string){
                  await this.page.getByPlaceholder('First Name').fill(firstName)
}
async fillLastName(lastName: string){
                  await this.page.getByPlaceholder('Last Name').fill(lastName)
}
async fillUserName(userName: string){
                  await this.page.getByPlaceholder('UserName').fill(userName)
}
async fillPassword(password: string){
                  await this.page.getByPlaceholder('Password').fill(password)
}
async clickRegister(){
                  await this.page.locator('#register').click()
}
}

