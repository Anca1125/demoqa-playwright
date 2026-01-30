import { Page } from '@playwright/test';

export class BookStorePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://demoqa.com/books');
  }

  async clickLoginFromMenu() {
    await this.page.locator('.left-pannel').getByText('Login').click() 
  }
}
