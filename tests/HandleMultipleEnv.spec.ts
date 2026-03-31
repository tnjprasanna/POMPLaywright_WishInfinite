// playwright.config.ts
import { defineConfig, test } from '@playwright/test';
import dotenv from 'dotenv';

test("Handle Multiple env", async({page}) => {

    console.log(process.env.URL)
    console.log(process.env.USERNAME)
    console.log(process.env.PASSWORD)

    const urlVal=process.env.URL as string
    
    await page.goto(urlVal)
    await page.locator('[data-test="username"]').fill(<string> process.env.USERNAME)
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD as string)
    await page.waitForTimeout(7000)
})