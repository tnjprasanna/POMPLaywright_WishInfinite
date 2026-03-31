import {test} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'

test('Verfiy with valid credentials', async ({page}) =>{
    
    const objLoginPage = new LoginPage(page)
    await objLoginPage.openApp()
    await objLoginPage.login("standard_user","secret_sauce")
})

