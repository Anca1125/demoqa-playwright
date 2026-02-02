import {Page, Locator} from '@playwright/test'

export class TabsPage {
                  readonly page:Page
                  readonly tabWhat: Locator
                  readonly tabOrigin: Locator
                  readonly tabUse: Locator
                  readonly tabMore: Locator
                  readonly contentWhat: Locator
                  readonly contentOrigin: Locator
                  readonly contentUse: Locator
                  



                  constructor(page: Page){
                                    this.page = page
                                    this.tabWhat = page.locator('#demo-tab-what')
                                    this.tabOrigin = page.locator('#demo-tab-origin')
                                    this.tabUse = page.locator('#demo-tab-use')
                                    this.tabMore = page.locator('#demo-tab-more')
                                    this.contentWhat = page.locator('#demo-tabpane-what')
                                    this.contentOrigin = page.locator('#demo-tabpane-origin')
                                    this.contentUse = page.locator('#demo-tabpane-use')
                  }                 

                  async clickTabWhat(){
                                    await this.tabWhat.click()
                  }
                  async clickTabOrigin(){
                                    await this.tabOrigin.click()
                  }
                  async clickTabUse(){
                                    await this.tabUse.click()
                  }
                  async clickTabMore(){
                                    await this.tabMore.click()
                  }
}