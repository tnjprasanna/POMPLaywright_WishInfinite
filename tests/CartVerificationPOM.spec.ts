import {expect} from '@playwright/test'
import { test } from '../fixtures/POMFixtures'

test('verification of cart', async({page, loginPage, homePage, cartPage})=>{
  
    await loginPage.openApp()
    await loginPage.login("standard_user","secret_sauce")
   
    await expect(homePage.homePageHeading).toHaveText('Swag Labs')    
    await homePage.backPackAddToCart()
    await expect(homePage.cartIcon).toHaveText("1")
    await expect(homePage.backPackRemoveButton).toBeVisible()
    await homePage.gotoCart()
    
    await expect(cartPage.backPackLink).toHaveText('Sauce Labs Backpack')

})