
import { test, expect } from '@playwright/test';

test.describe('Alerts, Frame & Windows', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('.card-body')
      .filter({ hasText: 'Alerts, Frame & Windows' })
      .click();
  });

  test('Alerts, Frame & Windows page is opened', async ({ page }) => {
    await expect(page).toHaveURL(/alertsWindows/);
  });


  test('Browser Windows - New Tab', async ({ page }) => {
    await page.getByText('Browser Windows').click();
    await expect(page).toHaveURL('https://demoqa.com/browser-windows');

    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#tabButton').click(),
    ]);

    await expect(
      newTab.getByText('This is a sample page')
    ).toBeVisible();
  });

  test('Browser Windows - New Window', async ({ page }) => {
    await page.getByText('Browser Windows').click();
    await expect(page).toHaveURL('https://demoqa.com/browser-windows');

    const [newWindow] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#windowButton').click(),
    ]);

    await expect(
      newWindow.getByText('This is a sample page')
    ).toBeVisible();
  });

  test('Browser Windows - New Window Message', async ({ page }) => {
    await page.getByText('Browser Windows').click();
    await expect(page).toHaveURL('https://demoqa.com/browser-windows');

    const [messageWindow] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#messageWindowButton').click(),
    ]);

    const content = await messageWindow.content();
    expect(content).toContain(
      'Knowledge increases by sharing but not by saving.'
    );
  });

 
  test('Alerts - simple alert', async ({ page }) => {
    await page.getByText('Alerts', { exact: true }).click();
    await expect(page).toHaveURL('https://demoqa.com/alerts');

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toContain('You clicked a button');
      await dialog.accept();
    });

    await page.locator('#alertButton').click();
  });

  test('Alerts - confirm alert (Cancel)', async ({ page }) => {
    await page.getByText('Alerts', { exact: true }).click();
    await expect(page).toHaveURL('https://demoqa.com/alerts');

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.dismiss();
    });

    await page.locator('#confirmButton').click();

    await expect(
      page.locator('#confirmResult')
    ).toContainText('Cancel');
  });
  test('Alerts - confirm alert (OK)', async ({ page }) => {
    await page.getByText('Alerts', { exact: true }).click();
    await expect(page).toHaveURL('https://demoqa.com/alerts');

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });

    await page.locator('#confirmButton').click();

    await expect(
      page.locator('#confirmResult')
    ).toContainText('You selected Ok');
  });
  test('Alerts - alert apprears after 5 seconds', async ({ page }) => {
    await page.getByText('Alerts', { exact: true }).click();
    await expect(page).toHaveURL('https://demoqa.com/alerts');

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toContain('This alert appeared after 5 seconds')
      await dialog.accept();
    });

    await page.locator('#timerAlertButton').click();

    
  });

test('alerts - promt alert with message', async ({page})=>{
  await page.getByText('Alerts', {exact:true}).click()
  await expect(page).toHaveURL('https://demoqa.com/alerts')


  await Promise.all([page.waitForEvent('dialog').then(async dialog => {expect(dialog.type()).toBe('prompt');
    await dialog.accept('Hello Anca!');
  }),
page.locator('#promtButton').click()]);
await expect (page.locator('#promptResult')).toContainText('Hello Anca!')
});
test('alerts, frames & windows - frame', async ({page})=> {
  await page.getByText('Frames', {exact:true}).click()
  await expect(page).toHaveURL('https://demoqa.com/frames')
  
 const frame = page.locator('#frame1')
 await expect(frame.getByText('This is a sample page')).toBeVisible()
})

})


