import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {HomePage} from '../pages/HomePage'
import {CartPage} from '../pages/CartPage'

test('verification of cart', async({page})=>{
    const objLoginPage = new LoginPage(page)
    await objLoginPage.openApp()
    await objLoginPage.login("standard_user","secret_sauce")
    const objHomePage = new HomePage(page)
    await expect(objHomePage.homePageHeading).toHaveText('Swag Labs')    
    await objHomePage.backPackAddToCart()
    await expect(objHomePage.cartIcon).toHaveText("1")
    await expect(objHomePage.backPackRemoveButton).toBeVisible()
    await objHomePage.gotoCart()
    const objCartPage = new CartPage(page)
    await expect(objCartPage.backPackLink).toHaveText('Sauce Labs Backpack')

})