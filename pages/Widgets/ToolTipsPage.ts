import {Page, Locator} from '@playwright/test'

export class ToolTipsPage {
                  readonly page: Page
                  readonly toolTipButton: Locator
                  readonly toolTipTextField: Locator
                  readonly toolTipLink: Locator
                  readonly tooltip: Locator


                  constructor(page: Page){
                                    this.page = page
                                    this.toolTipButton = page.locator('#toolTipButton')
                                    this.toolTipTextField = page.locator('#toolTipTextField')
                                    this.toolTipLink = page.getByText('Contrary')
                                    this.tooltip = page.locator('.tooltip-inner')
                  }
                  async hoverToolTipButton(){
                                    await this.toolTipButton.hover()
                  }
                  async hoverToolTipTextField(){
                                    await this.toolTipTextField.hover()
                  }
                  async hoverToolTipLink(){
                                    await this.toolTipLink.hover()
                  }
}
