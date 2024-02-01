import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Anneke Labordus/)
})

test('project navigation', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Stadsgezicht' }).click()
    await expect(page.getByText('Arc, Dijon')).toBeVisible()
    await page.getByTestId('next-0').click()
    await expect(page.getByText('Parasol, Dijon')).toBeVisible()
    await page.getByTestId('next-1').click()
    await expect(page.getByText('Arles')).toBeVisible()
    await page.getByTestId('previous-2').click()
    await expect(page.getByText('Parasol, Dijon')).toBeVisible()
})

test('project with introduction navigation', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Mondkapjes' }).first().click()
    await page.getByAltText('Bekijk').click()
    await expect(page.getByText('20x20 cm').nth(0)).toBeVisible()
    await page.getByTestId('next-0').click()
    await expect(page.getByText('20x20 cm').nth(1)).toBeVisible()
    await page.getByTestId('previous-1').click()
    await expect(page.getByText('20x20 cm').nth(0)).toBeVisible()
})
