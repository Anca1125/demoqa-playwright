import { test, expect } from '@playwright/test'

test('open profile page as logged-in user using token', async ({ page }) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFuY2FfcHdfYXV0aCIsInBhc3N3b3JkIjoiUGFyb2xhMTIzISIsImlhdCI6MTc2OTY5NDk1M30.5sHPyaPa8LR3Q47xaV-iww0jvI_F8DfDpunLjPFnDlg"

  const userId = "9eaa7b13-04e1-4d4d-86da-4170a4a2c330"

  await page.addInitScript((data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userID', data.userId);
  }, { token, userId });

  await page.goto('https://demoqa.com/profile');

  await expect(page).toHaveURL('https://demoqa.com/profile')
});
// test.skip('add book to user collection using API', async({page})=>{

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFuY2FfcHdfYXV0aCIsInBhc3N3b3JkIjoiUGFyb2xhMTIzISIsImlhdCI6MTc2OTY5NDk1M30.5sHPyaPa8LR3Q47xaV-iww0jvI_F8DfDpunLjPFnDlg"
// const userId = "9eaa7b13-04e1-4d4d-86da-4170a4a2c330"

// //injectam token-ul in browser
// // 1 injectăm token-ul în browser (ca să fim logați)
//   await page.addInitScript((data) => {
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('userID', data.userId);
//   }, { token, userId });

//   // 2 facem request API pentru Add Book
//   const apiContext = await Request.newContext({
//     baseURL: 'https://demoqa.com',
//     extraHTTPHeaders: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });

//   const response = await apiContext.post('/BookStore/v1/Books', {
//     data: {
//       userId: userId,
//       collectionOfIsbns: [
//         { isbn: '9781449325862' }
//       ],
//     },
//   });

//   expect(response.status()).toBe(201);

//   // 3 verificăm în UI că apare cartea
//   await page.goto('https://demoqa.com/profile');

//   await expect(
//     page.getByRole('link', { name: 'Git Pocket Guide' })
//   ).toBeVisible();
// });