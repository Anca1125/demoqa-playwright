import {Page, Locator} from '@playwright/test'

export class SliderPage {
                  readonly page: Page
                  readonly slider: Locator
                  readonly sliderInputValue: Locator
                  constructor(page: Page){
                                    this.page = page
                                    this.slider = page.locator('input[type="range"]')
                                    this.sliderInputValue = page.locator('#sliderValue')
                  }
                  async focusSlider(){
                                    await this.slider.focus()
                  }

                  async moveRight(times:number){
                                    for(let i = 0; i< times; i++){
                                     await this.slider.press('ArrowRight')                 
                                    }



                  }
                  async setSliderInputValue(value:string){
                                    await this.sliderInputValue.fill(value)
                  }
                  async setInputSlider(value:string){
                                    await this.slider.fill(value)
                  }
                  async moveLeft(times:number){
                                    for(let i = 0; i< times; i++)
                                                      await this.slider.press('ArrowLeft')
                  }
                  async fillSliderInputValue(value:string){
                                    await this.sliderInputValue.fill(value)
                  }


}