// fixtures/TestDataFixture.ts
import { test as baseTest, expect } from '@playwright/test';

type Mixture = {
  logindata: { uname: string; pwd: string };
  testData: { fname: string; lname: string; sname: string; email: string };
};

export const test = baseTest.extend<Mixture>({
  logindata: async ({}, use) => {
    await use({ uname: 'Admin', pwd: 'admin123' });
  },
  testData: async ({}, use) => {
    await use({
      fname: 'Sam',
      lname: 'Karan',
      sname: 'K',
      email: 'sam@gmail.com',
    });
  },
});

export { expect };