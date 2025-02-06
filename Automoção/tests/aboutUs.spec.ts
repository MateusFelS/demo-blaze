import { test, expect } from '@playwright/test'

test('Fluxo de navegação - Página "Sobre nós"', async ({page}) => {
    await page.goto('https://www.demoblaze.com')
    await page.locator('.nav-link').filter({hasText:'About us'}).click()
    await expect(page.locator('#example-video_html5_api')).toBeVisible()
})