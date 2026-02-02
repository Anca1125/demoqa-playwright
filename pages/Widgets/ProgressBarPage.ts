import {Page, Locator} from '@playwright/test'

export class ProgressBarPage {
                  readonly page: Page
                  readonly progressBar: Locator
                  readonly startStopButton: Locator
                  readonly resetButton: Locator 


                  constructor(page: Page){
                                    this.page = page
                                    this.progressBar = page.locator('#progressBar')
                                    this.startStopButton = page.locator('#startStopButton')
                                    this.resetButton = page.locator('#resetButton')
                  }

                  async clickStartStopButton() {
                                    await this.startStopButton.click()
                  }
                  async clickResetButton() {
                                    await this.resetButton.click()
                  }
}