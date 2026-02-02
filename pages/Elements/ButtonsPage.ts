import {Page, Locator} from '@playwright/test'

export class ButtonsPage {
                  private readonly page:Page
                  private readonly doubleClickMeButton: Locator
                  private readonly rightClickMeButton: Locator
                  private readonly clickMeButton: Locator

                  constructor(page: Page){
                                    this.page = page
                                    this.doubleClickMeButton = page.getByText('Double Click Me')
                                    this.rightClickMeButton = page.getByText('Right Click Me')
                                    this.clickMeButton = page.getByText('Click Me').last()
                  }
                  async pressDoubleClickButton(){
                                    await this.doubleClickMeButton.dblclick()
                                    
                  }
                  async pressRightClickButton(){
                                    await this.rightClickMeButton.click({button: 'right'})
                  }
                  async pressClickMeButton(){
                                    await this.clickMeButton.click()
                  }

} 