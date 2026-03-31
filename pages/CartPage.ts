import {Locator, Page} from '@playwright/test'

export class CartPage {

    readonly page : Page
    readonly backPackLink : Locator


    constructor(page : Page){
        this.page = page
        this.backPackLink = page.getByRole('link', {name : 'Sauce Labs Backpack'})
    }
}