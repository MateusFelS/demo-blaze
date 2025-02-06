import { test, expect } from '@playwright/test'

test('Login com credenciais válidas', async ({page}) => {
  await page.goto('https://www.demoblaze.com/')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('testeqa_01')
  await page.locator('#loginpassword').fill('123321')
  await page.locator('.btn.btn-primary').filter({ hasText: 'Log in' }).click()

  await expect(page.locator('#nameofuser')).toHaveText('Welcome testeqa_01')
})

test('Login com credenciais inválidas', async ({page}) => {
  await page.goto('https://www.demoblaze.com/')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('teste')
  await page.locator('#loginpassword').fill('123')
  await page.locator('.btn.btn-primary').filter({ hasText: 'Log in' }).click()

  page.once('dialog', async (dialog) => {
    await expect(dialog.message()).toBe('Wrong password.')
  })
})

test('Login com campos vazios', async ({page}) => {
  await page.goto('https://www.demoblaze.com/')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('')
  await page.locator('#loginpassword').fill('')
  await page.locator('.btn.btn-primary').filter({ hasText: 'Log in' }).click()

  page.once('dialog', async (dialog) => {
    await expect(dialog.message()).toBe('Please fill out Username and Password.')
  })
})

