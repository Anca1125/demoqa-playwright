import {Page, Locator} from '@playwright/test'

export class MenuPage {
                  readonly page: Page
                  readonly mainItem2: Locator
                  readonly subItem: Locator
                  readonly SubSubList: Locator
                  readonly SubSubItem1: Locator 

                  constructor(page: Page){
                                    this.page=page
                                    this.mainItem2 = page.getByText('Main Item 2')
                                    this.subItem = page.getByText('Sub Item')
                                    this.SubSubList = page.getByText('SUB SUB LIST')
                                    this.SubSubItem1 = page.getByText('Sub Sub Item 1')
                  }
                  async hoverMainItem2(){
                                    await this.mainItem2.hover()
                  }
                  async hoverSubSubList(){
                                    await this.SubSubList.hover()
                  }
}