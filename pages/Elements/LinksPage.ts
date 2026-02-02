import {Page, Locator} from '@playwright/test'

export class LinksPage{
                  private readonly page: Page

                  private readonly staticHomeLink: Locator
                  private readonly dynamicHomeLink: Locator
                  private readonly createdLink: Locator
                

                  constructor (page:Page){
                                    this.page = page
                                    this.staticHomeLink = page.getByRole('link', { name: 'Home', exact: true })
                                    this.dynamicHomeLink = page.locator('#dynamicLink')
                                    this.createdLink = page.getByText('Created')


                  }
                  async clickStaticHome(){ 
                                    await this.staticHomeLink.click()

                  }
                   async clickDynamicHome(){ 
                                    await this.dynamicHomeLink.click()

                  }

                  async clickCreated(){
                                    await this.createdLink.click()

                  }
}