import {Page, Locator, FrameLocator} from '@playwright/test'

export class NestedFramesPage{
                  readonly page: Page
                  readonly frameParent: FrameLocator
                  readonly frameChild: FrameLocator
                  constructor (page: Page){
                                    this.page = page
                                    this.frameParent = page.frameLocator('#frame1')
                                    this.frameChild = this.frameParent.frameLocator('iframe')
                  }
}