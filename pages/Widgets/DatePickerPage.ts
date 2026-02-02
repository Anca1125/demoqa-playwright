import {Page, Locator} from '@playwright/test'

export class DatePickerPage{
                  readonly page: Page
                  readonly inputSelectDate: Locator
                  readonly inputSelectDateAndTime: Locator

                  constructor(page: Page){
                                    this.page = page
                                    this.inputSelectDate = page.locator('#datePickerMonthYearInput')
                                    this.inputSelectDateAndTime = page.locator('#dateAndTimePickerInput')
                  }

                  async openSelectDate(){
                                    await this.inputSelectDate.click()
                  }

                  async openSelectDateAndTime(){
                                    await this.inputSelectDateAndTime.click()
                  }
}