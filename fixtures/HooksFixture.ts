import { test as baseTest } from "@playwright/test";

type MyHookFixtures = {
  loginlogoutfixture: any
};

export const test = baseTest.extend<MyHookFixtures>({
  loginlogoutfixture: async ({ page }, use) => {
    //Launch URL
    await page.goto("https://www.saucedemo.com/");
    // Login
    const loginlogoutfixture = undefined;
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();

    await use(loginlogoutfixture); // nothing returned

    // Logout
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  },
});

export {expect} from '@playwright/test'