import {test} from '@playwright/test'

test("practice 1", async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.getByLabel('Search Amazon').type("Samsung")
    await page.pause()
})