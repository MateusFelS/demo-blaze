import { test, expect } from '@playwright/test'

test('Filtrar por Laptops', async ({page}) => {
    await page.goto('https://www.demoblaze.com')
    await page.locator('#itemc').filter({hasText:'Laptops'}).click()
    await expect(page.locator('.hrefch').first()).toHaveText('Sony vaio i5')
})