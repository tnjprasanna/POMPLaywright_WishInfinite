import {test,chromium,expect} from '@playwright/test'
/* TEST PR1
test("Kick start with playwright", async ({page})=>{
    console.log("My First Test")
    await page.goto("https://www.google.com")

}) Test PR1
*/

test("My 2nd Test with Playwright", async () =>{
    
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demoqa.com/buttons")
    page.waitForTimeout(5000)
    
    await page.getByText('Right Click Me', {exact: true}).click({button:'right'})
    console.log('My second test')
})

test('Handle JavaScript Alert', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Listen for the dialog event
  page.on('dialog', async dialog => {
    await dialog.accept(); // Clicks "OK"
  });

  // Click the button to trigger the alert
  await page.click('text=Click for JS Alert');

  // Optionally, verify the result text on the page
  const result = await page.locator('#result');
  await expect(result).toHaveText('You successfully clicked an alert');
});

test('Handle JavaScript Prompt', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Listen for the prompt dialog
  page.on('dialog', async dialog => {
    await dialog.accept('Hello Playwright');
  });

  // Click the button to trigger the prompt
  await page.click('text=Click for JS Prompt');

  // Verify the result text on the page
  const result = page.locator('#result');
  await expect(result).toHaveText('You entered: Hello Playwright');
});

test('click new page link', async ({ page }) => {
  // Navigate to the Book Store page
  await page.goto('https://demoqa.com/books?search=9781449325862');

  // Wait for the new page (popup) to open when clicking the link
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'), // listens for the new page
    page.click('- button[id="see-book-Git Pocket Guide"]') // selector for the link that opens a new page
  ]);

  // Verify the new page has loaded
  await expect(newPage).toHaveURL("http://chimera.labs.oreilly.com/books/1230000000561/index.html");

  // Optionally, interact with the new page
  const title = await newPage.title();
  console.log('New page title:', title);
});


test.only('Mouse hover', async ({page}) =>{
  await page.goto('https://naveenautomationlabs.com/opencart/')
  await page.getByRole('link',{name: 'Components'}).hover()
})