import {Page, Locator} from '@playwright/test'

export class CheckboxPage{
                  private readonly page: Page
                  private readonly expandHomeButton: Locator
                  private readonly collapseHomeButton: Locator
                  private readonly expandAllButtons: Locator
                  private readonly collapseAllButtons:Locator
                  private readonly homeCheckbox: Locator 
 

                  constructor (page:Page){
                                    this.page= page

                                    this.expandHomeButton = page.locator('.rct-icon-expand-close')
                                    this.collapseHomeButton = page.locator('.rct-icon-expand-open')
                                    this.expandAllButtons = page.locator('.rct-icon-expand-all')
                                    this.collapseAllButtons = page.locator('.rct-icon-collapse-all')
                                    this.homeCheckbox = page.getByText('Home')
                                    
                  }
                  async expandHome(){
                                    await this.expandHomeButton.click()
                  }
                  async collapseHome(){
                                    await this.collapseHomeButton.click()
                  }
                  async expandAll(){
                                    await this.expandAllButtons.click()
                  }
                  async collapseAll(){
                                    await this.collapseAllButtons.click()
                  }
                  async selectHome(){
                                    await this.homeCheckbox.click()
                  }

} 