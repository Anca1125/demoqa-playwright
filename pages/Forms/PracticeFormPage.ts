import { Page, Locator } from "@playwright/test"

export class PracticeFormPage{
                  private readonly page: Page
                  private readonly firstNameInput: Locator
                  private readonly lastNameInput: Locator
                  private readonly email: Locator
                  private readonly maleGenderLabel: Locator
                  private readonly mobileNumber : Locator
                  private readonly dateOfbirthInput : Locator
                  private readonly yearSelected: Locator
                  private readonly monthSelected: Locator
                  private readonly day25: Locator
                  private readonly subjectsInput: Locator
                  private readonly sportsHobby: Locator
                  private readonly readingHobby: Locator
                  private readonly musicHobby: Locator
                  private readonly uploadPictureInput: Locator
                  private readonly currentAddressInput: Locator
                  private readonly stateInput: Locator
                  private readonly cityInput: Locator
                  private readonly submitButton: Locator


                  constructor(page:Page){
                                    this.page = page
                                    this.firstNameInput= page.locator('#firstName')
                                    this.lastNameInput = page.locator('#lastName')
                                    this.email = page.locator('#userEmail')
                                    this.maleGenderLabel = page.getByText('Male', { exact: true })
                                    this.mobileNumber = page.locator('#userNumber')
                                    this.dateOfbirthInput = page.locator('#dateOfBirthInput')
                                    this.yearSelected= page.locator('.react-datepicker__year-select')
                                    this.monthSelected = page.locator('.react-datepicker__month-select')
                                    this.day25 = page.locator('.react-datepicker__day--025:not(react-datepicker__day--outside-month)')
                                    this.subjectsInput= page.locator('#subjectsInput')
                                    this.sportsHobby =page.locator('#hobbies-checkbox-1')
                                    this.readingHobby = page.locator('#hobbies-checkbox-2')
                                    this.musicHobby = page.locator('#hobbies-checkbox-3')
                                    this.uploadPictureInput = page.locator('#uploadPicture')
                                    this.currentAddressInput = page.getByPlaceholder('Current Address')
                                    this.stateInput= page.locator('#react-select-3-input')
                                    this.cityInput = page.locator('#react-select-4-input')
                                    this.submitButton = page.locator('#submit')
                  }

                  async fillFirstName(value:string){
                                    await this.firstNameInput.scrollIntoViewIfNeeded()
                                    await this.firstNameInput.fill(value)
                  }

                  async fillLastName(value: string){
                                    await this.lastNameInput.scrollIntoViewIfNeeded()
                                    await this.lastNameInput.fill(value)
                  }
                  async fillEmail(value: string){
                                    await this.email.scrollIntoViewIfNeeded()
                                    await this.email.fill(value)
                  }
                  async selectedMaleGenderLabel (){
                                    await this.maleGenderLabel.click()
                  }

                  async fillMobileNumber(value:string){
                                    await this.mobileNumber.scrollIntoViewIfNeeded()
                                    await this.mobileNumber.fill(value)
                  }
                  
                  async selectDateOfBirth(){
                                    await this.dateOfbirthInput.click()
                                    await this.yearSelected.selectOption('2010')
                                    await this.monthSelected.selectOption('November')
                                    await this.day25.click()
                                    await this.dateOfbirthInput.press('Escape')
                  }
                  async fillSubjects(value:string){
                                    await this.subjectsInput.fill('Software tester')
                                    await this.subjectsInput.press('Enter')
                  }
                  async selectSportsHobby() {
                                   await this.sportsHobby.check({ force: true });
}
                  async selectReadingHobby() {
                                   await this.readingHobby.check({ force: true });
}
                  async selectMusicHobby() {
                                    await this.musicHobby.check({ force: true });
}
                  async uploadPicture(filePath: string){
                                    await this.uploadPictureInput.setInputFiles(filePath)

                  }
                  async fillCurrentAddress(value: string){
                                    await this.currentAddressInput.fill(value)
                  }
                  async selectState(state:string){
                                    await this.stateInput.fill(state)
                                    await this.stateInput.press('Enter')
                  }
                  async selectCity(city:string){
                                    await this.cityInput.fill(city)
                                    await this.cityInput.press('Enter')
                  }
                  async submitForm(){
                                    await this.submitButton.click()
                  }
}