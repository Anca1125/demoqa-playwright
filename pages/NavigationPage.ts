import {Page, Locator} from '@playwright/test'

export class NavigationPage {
                  private readonly page: Page

                  private readonly elementsCard: Locator
                  private readonly formsCard: Locator
                  private readonly alertsCard: Locator
                  private readonly widgetsCard: Locator
                  private readonly interactionsCard: Locator
                  private readonly bookStoreCard: Locator

                  constructor(page:Page) {
                                    this.page = page 
                                    this.elementsCard = page.locator('.card-body', { hasText: 'Elements' })
                                    this.formsCard = page.locator('.card-body', { hasText: 'Forms' })
                                    this.alertsCard = page.locator('.card-body', {hasText:"Alerts, Frame & Windows"})
                                    this.widgetsCard = page.locator('.card-body').filter({ hasText: 'Widgets' })
                                    this.interactionsCard = page.locator('.card_body', {hasText: 'Interactions'})
                                    this.bookStoreCard = page.locator('.card-body').filter({ hasText: 'Book Store Application' })
                  }

                  async openDemoQa(){
                                    await this.page.goto('https://demoqa.com/', 
                                    {waitUntil:'domcontentloaded', timeout: 60000,})
                  }

                  async goToElements(){
                       await this.elementsCard.click()
                  }
                  async goToForms(){
                                    await this.formsCard.click()
                  }
                  async goToAlerts(){
                                    await this.alertsCard.click()
                  }
                  async goToWidgets(){
                                    await this.widgetsCard.click()
                  }
                  async goToInteractions(){
                                    await this.interactionsCard.click()
                  }
                  async goToBookStore(){await this.bookStoreCard.click()}
                                    
                  
}