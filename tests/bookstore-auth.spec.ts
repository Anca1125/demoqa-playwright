import { test, expect } from '@playwright/test'

test('open profile page as logged-in user using token', async ({ page }) => {

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFuY2FfcHdfYXV0aCIsInBhc3N3b3JkIjoiUGFyb2xhMTIzISIsImlhdCI6MTc2OTY5NDk1M30.5sHPyaPa8LR3Q47xaV-iww0jvI_F8DfDpunLjPFnDlg"

const userId = "9eaa7b13-04e1-4d4d-86da-4170a4a2c330"

await page.addInitScript((data) => {
    localStorage.setItem('token', data.token)
    localStorage.setItem('userID', data.userId)
  }, { token, userId })

await page.goto('https://demoqa.com/profile')

await expect(page).toHaveURL('https://demoqa.com/profile')
})
