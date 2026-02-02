import {Page, Locator} from '@playwright/test'

export class WebTablePage {
                  private readonly page: Page

                  addDataButton: Locator
                  firtsNameInput: Locator
                  lastNameInput: Locator
                  emailInput: Locator
                  ageInput: Locator
                  salaryInput: Locator
                  departamentInput: Locator
                  submitButton: Locator
                  editButton: Locator
                  deleteButton: Locator
                  searchInput: Locator

                  constructor(page: Page){
                                    this.page = page
                                    this.addDataButton = page.getByRole('button', { name: 'Add' })
                                    this.firtsNameInput = page.locator('#firstName')
                                    this.lastNameInput = page.locator('#lastName')
                                    this.emailInput = page.locator('#userEmail')
                                    this.ageInput = page.locator('#age')
                                    this.salaryInput = page.locator('#salary')
                                    this.departamentInput = page.locator('#department')
                                    this.submitButton = page.getByRole('button', {name: 'Submit'})
                                    this.editButton = page.getByTitle('Edit').first()
                                     this.deleteButton = page.getByTitle('Delete').first()
                                     this.searchInput = page.getByRole('textbox', {name: 'Type to search'})

                  }

                  async addNameinTabel(){
                                    await this.addDataButton.click()
                  }
                  async fillFirstName(value: string){
                                    await this.firtsNameInput.fill(value)
                  }
                   async fillLastName(value: string){
                                    await this.lastNameInput.fill(value)
                  }
                  async fillEmail(value: string){
                                    await this.emailInput.fill(value)
                  }
                  async fillAge(value:string){
                                    await this.ageInput.fill(value)
                  }
                  async fillSalary(value:string){
                                    await this.salaryInput.fill(value)
                  }
                  async fillDepartament(value:string){
                                    await this.departamentInput.fill(value)
                  }
                  async clickSubmitButton(){
                                    await this.submitButton.click()
                  }
                  async clickEditButton(){
                                    await this.editButton.click()
                  }
                   async clickDeleteButton(){
                                    await this.deleteButton.click()
                  }
                  async typeAnameInSearchInput(value:string){
                                    await this.searchInput.fill(value)
 
                  }
                                  
}