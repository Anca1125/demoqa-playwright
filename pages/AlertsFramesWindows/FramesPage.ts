import {Page, Locator, FrameLocator} from '@playwright/test'

export class FramesPage { 
                  readonly page: Page
                  readonly frame1: FrameLocator
                  readonly frame2:FrameLocator
                  

                  constructor (page:Page){
                                    this.page = page

                                    this.frame1= page.frameLocator('#frame1')
                                    this.frame2 =  page.frameLocator('#frame2')

                  }
                  

}