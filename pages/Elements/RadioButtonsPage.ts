import {Page, Locator} from '@playwright/test'

export class RadioButtonsPage {
                  private readonly page:Page
                  private readonly yesButton: Locator
                  private readonly ImpressiveButton: Locator
                  private readonly noButton: Locator

                  constructor(page:Page){
                                    this.page = page 
                                    this.yesButton = page.getByLabel('Yes')
                                    this.ImpressiveButton =  page.getByText('Impressive')
                                    this.noButton = page.getByLabel('No')
                                    }

      async yesRadio(){
                  await this.yesButton.click({force:true})
      }
      async impressiveRadio(){
                  await this.ImpressiveButton.click()
      }
      getNoRadio() {
    return this.noButton;
  }
}
