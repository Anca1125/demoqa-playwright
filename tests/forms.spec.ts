
import { test, expect } from '@playwright/test';
import path from 'path';
import { NavigationPage } from '../pages/NavigationPage';
import { PracticeFormPage } from '../pages/Forms/PracticeFormPage';

test('practice form', async ({ page }) => {

  // Navigation
  
  const navigation = new NavigationPage(page);
  await navigation.openDemoQa();
  await navigation.goToForms();
  await page.getByText('Practice Form').click();
  await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');

 
  // Page Object
  
  const practiceForm = new PracticeFormPage(page);

  
  // Input fields (POM)
  
  await practiceForm.fillFirstName('Iliuta');
  await practiceForm.fillLastName('Misu');
  await practiceForm.fillEmail('iliuta@misu.com');

  // Select gender (POM)
  
  await practiceForm.selectedMaleGenderLabel();

  
  // Fill phone number (POM)
  
  await practiceForm.fillMobileNumber('1234567890');
  await expect(page.locator('#userNumber')).toHaveValue('1234567890');

  
  // Date of birth (POM)
  
  await practiceForm.selectDateOfBirth();
  await expect(page.locator('#dateOfBirthInput')).toHaveValue('25 Nov 2010');

  
  // Subjects (POM)
  
  await practiceForm.fillSubjects('Software Tester');
  await expect(page.locator('#subjectsInput')).toBeVisible();

  
  // Hobbies 
  
  // DemoQA has ads / overlays that interfere with checkboxes.
  // I tried to remove the ads container to make the test stable.
  await page.evaluate(() => {
    const ad = document.getElementById('fixedban');
    if (ad) {
      ad.remove();
    }
  });

  // User-like interaction: click on labels
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();

  
  // Upload file (POM)
  
  await practiceForm.uploadPicture(
    path.join(__dirname, 'resources/pisica.jpg')
  );
  await expect(page.locator('#uploadPicture')).toHaveValue(/pisica\.jpg$/);


  // Current address
  
  await practiceForm.fillCurrentAddress('Botosani, Romania')
 await expect(page.getByPlaceholder('Current Address')).toHaveValue(('Botosani, Romania'))

  
  // State & City
  

  await practiceForm.selectState('NCR')
  await practiceForm.selectCity('Delhi')
  await expect(page.locator('#state')).toContainText('NCR');
  await expect(page.locator('#city')).toContainText('Delhi');

 
  // Submit
  
  await practiceForm.submitForm()
  

  
  // Modal validation (FINAL ASSERTIONS)
  
  const modalTitle = page.locator('#example-modal-sizes-title-lg');
  await expect(modalTitle).toHaveText('Thanks for submitting the form');

  const modalBody = page.locator('.modal-body');
  await expect(modalBody).toContainText('Iliuta');
  await expect(modalBody).toContainText('Misu');
  await expect(modalBody).toContainText('Male');
  await expect(modalBody).toContainText('Sports');
  await expect(modalBody).toContainText('Reading');
  await expect(modalBody).toContainText('Music');
  await expect(modalBody).toContainText('NCR');
  await expect(modalBody).toContainText('Delhi');

  const closeTab = page.locator('#closeLargeModal');
  await closeTab.press('Enter');
  await expect(closeTab).toBeHidden();
});









