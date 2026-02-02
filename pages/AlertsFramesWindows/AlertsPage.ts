import {Page, Locator} from '@playwright/test'

export class AlertsPage {
                  
                  readonly page: Page
                  readonly alertButton: Locator
                  readonly timerAlertButton
                  readonly confirmButton: Locator
                  readonly promptButton: Locator 

                  constructor(page: Page){
                                    this.page = page
                                    this.alertButton = page.locator('#alertButton')
                                    this.timerAlertButton = page.locator('#timerAlertButton')
                                    this.confirmButton =  page.locator('#confirmButton')
                                    this.promptButton = page.locator('#promtButton')
                  }
}