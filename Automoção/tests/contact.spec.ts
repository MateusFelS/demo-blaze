import { test, expect } from '@playwright/test'

test('Fluxo de navegação - Página de contato', async ({page}) => {
    await page.goto('https://www.demoblaze.com')
    await page.locator('.nav-link').filter({hasText:'Contact'}).click()
    await page.locator('#recipient-email').fill('teste@teste.com')
    await page.locator('#recipient-name').fill('Teste Name')
    await page.locator('#message-text').fill('Mensagem')
    await page.locator('.btn.btn-primary').filter({hasText:'Send message'}).click()
    
    page.once('dialog', async (dialog) => {
        await expect(dialog.message()).toBe('Thanks for the message!!')
    })
})