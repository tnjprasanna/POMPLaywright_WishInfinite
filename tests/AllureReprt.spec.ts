import { test, expect} from '@playwright/test'

test('Reporter practice 1', async({page}) => {
    await page.goto('https://www.google.com')
    expect(page).toHaveTitle("Google");
})


test('Reporter practice 2', async({page}) => {
    await page.goto('https://www.google.com')
    expect(page).toHaveTitle("Google");
})


test('Reporter practice 3', async({page}) => {
    await page.goto('https://www.google.com')
    expect(page).toHaveTitle("Google");
})