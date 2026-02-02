import {Page, Locator} from '@playwright/test'

export class AccordionPage {
                  readonly page: Page
                  readonly accordionTitle: Locator
                  readonly accordionContent1: Locator
                  readonly accordionContent2:Locator
                  readonly accordionContent3: Locator
                  readonly accordionHeading1: Locator
                  readonly accordionHeading2: Locator
                  readonly accordionHeading3: Locator

                  constructor(page: Page){
                                    this.page = page
                                    this.accordionTitle =  page.locator('.card-header')
                                    this.accordionContent1 = page.locator('#section1Content')
                                    this.accordionContent2 = page.locator('#section2Content')
                                    this.accordionContent3 = page.locator('#section3Content')
                                    this.accordionHeading1 = page.locator('#section1Heading')
                                    this.accordionHeading2 = page.locator('#section2Heading')
                                    this.accordionHeading3 = page.locator('#section3Heading')

                  }

                  async clickHeading2() {
                                    await this.accordionHeading2.click()
                  }
                   async clickHeading3() {
                                    await this.accordionHeading3.click()
                  }
}