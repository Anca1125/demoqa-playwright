import {Page, Locator} from '@playwright/test'

export class DynamicPropertiesPage{
                  
                  readonly page: Page
                  readonly enableAfterButton: Locator
                  readonly colorChangeButton: Locator
                  readonly visibleAfterButton: Locator
                  constructor(page:Page){
                                    this.page = page
                                    this.enableAfterButton = page.locator('#enableAfter')
                                    this.colorChangeButton = page.locator('#colorChange')
                                    this.visibleAfterButton = page.locator('#visibleAfter')
                  }



                  

}