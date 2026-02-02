import {Page, Locator} from '@playwright/test'

export class SelectMenuPage {
                  readonly page: Page
                  readonly selectValue: Locator
                  readonly selectOne: Locator
                  readonly oldStyleSelectMenu: Locator
                  readonly multiselectDropDown: Locator
                  readonly standardMultiSelect: Locator 


                  constructor (page:Page){
                                    this.page = page
                                    this.selectValue = page.locator('#withOptGroup')
                                    this.selectOne = page.locator('#selectOne')
                                    this.oldStyleSelectMenu = page.locator('#oldSelectMenu')
                                    this.multiselectDropDown = page.locator('#react-select-4-input')
                                    this.standardMultiSelect = page.locator('#cars') 
                  }

                  async clickSelectValue(){
                                    await this.selectValue.click()
                  }
                  async clickSelectOne(){
                                    await this.selectOne.click()
                  }
                  async clickOldStyleSelectMenu(){
                                    await this.oldStyleSelectMenu.click()
                  }
                  async clickStandardMultiSelect(){
                                    await this.standardMultiSelect.click()
                  }
                  async fillMultiSelectDropDown(value:string){
                                    await this.multiselectDropDown.fill(value)
                                    await this.multiselectDropDown.press('Enter')
                  }
}