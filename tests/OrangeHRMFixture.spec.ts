import { test, expect } from '../fixtures/TestDataFixture';

test.beforeEach(async ({ page, logindata }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByPlaceholder('username').fill(logindata.uname);
  await page.getByPlaceholder('password').fill(logindata.pwd);
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Wait for a reliable element instead of URL
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Add candidate for Recruitment', async ({ page, testData }) => {
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await expect(page.locator('#app')).toContainText('Recruitment');
  await page.getByText('Add').click();
  await expect(page.locator('#app')).toContainText('Add Candidate');
  await page.getByPlaceholder('First Name').fill(testData.fname);
  await page.getByPlaceholder('Last Name').fill(testData.lname);
  await page.getByPlaceholder('Middle Name').fill(testData.sname); // corrected
  await page.getByPlaceholder('Type here').first().fill(testData.email);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Application Stage')).toBeVisible();
});