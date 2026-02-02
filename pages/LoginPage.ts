import { Page } from '@playwright/test'


 export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickNewUser(){
    await this.page.getByRole('button', {name:'New User'}).click()

  }

  async fillUserName(username: string) {
    await this.page.getByPlaceholder('UserName').fill(username);
  }

  async fillPassword(password: string) {
    await this.page.getByPlaceholder('Password').fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
