import {Locator, Page} from '@playwright/test'

export class LoginPage{

    readonly page : Page
    readonly username : Locator
    readonly password : Locator
    readonly submit : Locator

    constructor(page : Page){
        this.page = page;
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.submit = page.locator('#login-button')
    }

    async openApp(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(userName : string, password : string){
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.submit.click()
    }
}