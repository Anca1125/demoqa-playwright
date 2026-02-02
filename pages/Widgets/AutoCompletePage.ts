import {Page, Locator} from '@playwright/test'

export class AutoCompletePage { 

                  readonly page: Page
                  readonly singleColorInput: Locator
                  readonly multipleColorInput: Locator

                  constructor(page: Page){
                                    this.page = page
                                    this.singleColorInput = page.locator('#autoCompleteSingleContainer input')
                                    this.multipleColorInput = page.locator('#autoCompleteMultipleContainer input')

                  }
                  async clickInputSingleColor(){
                                    await this.singleColorInput.click()
                  }
                  async fillInputSingleColor(value: string){
                                    await this.singleColorInput.fill(value)
                  }
                   
                  async clickInputMultipleColor(){
                                    await this.multipleColorInput.click()
                  }
                  async fillInputMultipleColor(value: string){
                                    await this.multipleColorInput.fill(value)
                                    await this.multipleColorInput.press('Enter')
                  }

}