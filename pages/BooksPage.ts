import { Page } from '@playwright/test'

export class BooksPage {
                  readonly page: Page
                  constructor(page: Page) {
    this.page = page;
  }
   async searchAbook (text: string){
    await this.page.locator('#searchBox').fill(text)
}
   async clickBookByTitle (title: string){
   //await this.page.getByRole('link').filter({ hasText: /^$/ }) .click()
   await this.page.getByRole('link', { name: title }).click();

 }

}