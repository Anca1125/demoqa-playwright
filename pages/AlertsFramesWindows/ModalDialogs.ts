import {Page, Locator, FrameLocator} from '@playwright/test'

export class ModalDialogsPage{
                  readonly page:Page
                  readonly smallModalButton: Locator
                  readonly largeModalButton: Locator
                  readonly closeSmallModal: Locator
                  readonly closeLargeModal: Locator
                  readonly smallModalTitle: Locator
                  readonly largeModalTitle: Locator



                  constructor(page: Page){
                                    this.page = page
                                    this.smallModalButton = page.locator('#showSmallModal')
                                    this.largeModalButton = page.locator('#showLargeModal')
                                    this.closeSmallModal = page.locator('#closeSmallModal')
                                    this.closeLargeModal = page.locator('#closeLargeModal')
                                    this.smallModalTitle = page.locator('#example-modal-sizes-title-sm')
                                    this.largeModalTitle = page.locator('#example-modal-sizes-title-lg')
                  }

                  async clickSmallModal(){
                                    await this.smallModalButton.click()
                  }
                  async clickLargeModal(){
                                    await this.largeModalButton.click()
                  }
                  async clickCloseSmallModal(){
                                    await this.closeSmallModal.click()
                  }
                  async clickCloseLargeModal(){
                                    await this.closeLargeModal.click()
                  }
}