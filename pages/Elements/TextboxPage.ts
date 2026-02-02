import {Page, Locator} from '@playwright/test'

export class TextBoxPage {
                  private readonly page: Page
                  private readonly fullNameInput: Locator
                  private readonly emailInput: Locator
                  private readonly currentAddressInput: Locator
                  private readonly permanentAddressInput: Locator
                  private readonly submitButton: Locator 


                  constructor(page: Page)
                   { this.page=page
                   this.fullNameInput = page.locator('#userName')
                   this.emailInput = page.locator('#userEmail')
                   this.currentAddressInput = page.locator('#currentAddress')
                   this.permanentAddressInput = page.locator('#permanentAddress')
                   this.submitButton = page.locator('#submit')

                  }

                  async fillNameInput(value:string){
                                    await this.fullNameInput.fill(value)
                  }
                  async fillEmailInput(value:string){
                                    await this.emailInput.fill(value)
                  }
                  async fillCurrentAddressInput(value:string){
                                    await this.currentAddressInput.fill(value)
                  }
                  async fillPermanentAddressInput (value:string){
                                    await this.permanentAddressInput.fill(value)
                  }
                  async ClickSubmitButton(){
                                    await this.submitButton.click()
                  }
}