import {Page, Locator} from '@playwright/test'

export class BrokenLinksPage{
                   readonly page: Page
                   readonly validImage: Locator
                   readonly brokenImage: Locator
                   readonly validLink: Locator
                   readonly brokenLink: Locator

                  constructor(page: Page){
                                     this.page = page
                                     this.validImage = page.locator('img').first()
                                     this.brokenImage =  page.locator('img').nth(1)
                                     this.validLink =  page.getByText('Click Here for Valid Link')
                                     this.brokenLink = page.getByText('Click Here for Broken Link')

                  }
                  async getValidLinkHref(){
                                    return await this.validLink.getAttribute('href')
                  }
                   async getBrokenLinkHref(){
                                    return await this.brokenLink.getAttribute('href')
                  }
                 
}