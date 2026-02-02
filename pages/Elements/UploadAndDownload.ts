import {Page, Locator} from '@playwright/test'
import path from 'path'

export class UploadAndDownloadPage{
                  readonly page: Page
                  readonly downloadButton: Locator
                  readonly uploadInput: Locator
                  readonly uploadFilePath: Locator

                  constructor(page: Page){
                                     this.page = page
                                     this.downloadButton = page.getByRole('link', { name: 'Download' })
                                     this.uploadInput = page.locator('#uploadFile')
                                     this.uploadFilePath = page.locator('#uploadedFilePath')
                  }
                 async uploadFile(filePath:string){
                  await this.uploadInput.setInputFiles(filePath)
                 }
}