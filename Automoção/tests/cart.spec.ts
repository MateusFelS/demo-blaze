import { test, expect } from '@playwright/test'

test('Fluxo de navegação - Página do carrinho', async ({page}) => {
  await page.goto('https://www.demoblaze.com')

  await page.locator('#cartur').click()
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
})

test('Adicionar item ao carrinho', async ({ page }) => {
  await page.goto('https://www.demoblaze.com')

  await page.locator('.hrefch').filter({hasText:"Samsung galaxy s6"}).click()
  await page.locator('.btn.btn-success.btn-lg').filter({hasText:'Add to cart'}).click()

  page.once('dialog', async (dialog) => {
    await expect(dialog.message()).toBe('Product added')
  })
})

test('Remover item do carrinho', async ({ page }) => {
  await page.goto('https://www.demoblaze.com')

  await page.locator('.hrefch').filter({hasText:"Samsung galaxy s6"}).click()
  await page.locator('.btn.btn-success.btn-lg').filter({hasText:'Add to cart'}).click()

  page.once('dialog', async (dialog) => {
    await dialog.accept();
  })

  await page.locator('#cartur').click()

  await page.locator('text=Delete').click()

  await page.waitForSelector('#tbodyid tr', { state: 'detached', timeout: 5000 })
  const remainingItems = await page.locator('#tbodyid tr').count()

  await expect(remainingItems).toBe(0)
})

test('Mensagem de carrinho vazio', async ({page}) => {
  await page.goto('https://www.demoblaze.com')

  await page.locator('.hrefch').filter({hasText:"Samsung galaxy s6"}).click()
  await page.locator('.btn.btn-success.btn-lg').filter({hasText:'Add to cart'}).click()
  
  await page.locator('#cartur').click()
  
  await expect(page.locator('#page-wrapper')).toHaveText('Your cart is empty')
})

test('Adicionar item ao carrinho e finalizar compra', async ({ page }) => {
  await page.goto('https://www.demoblaze.com')

  await page.locator('.hrefch').filter({hasText:"Samsung galaxy s6"}).click()
  await page.locator('.btn.btn-success.btn-lg').filter({hasText:'Add to cart'}).click()

  await page.locator('#cartur').click()
  await page.locator('.btn.btn-success').filter({hasText:'Place Order'}).click()
  await page.fill('#name', 'João Teste')
  await page.fill('#country', 'Brasil')
  await page.fill('#city', 'São Paulo')
  await page.fill('#card', '1234123412341234')
  await page.fill('#month', '12')
  await page.fill('#year', '2026')

  await page.locator('.btn.btn-primary').filter({hasText:'Purchase'}).click()

  await expect(page.locator('.sweet-alert')).toHaveText(/Thank you for your purchase/)
});