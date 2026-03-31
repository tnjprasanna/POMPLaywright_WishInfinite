import { test, expect } from '@playwright/test';

test('Practice drag and drop', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');

  // Scope locators to the "Simple" tab panel
    page.locator('#simpleDropContainer #draggable').hover()
    await page.mouse.down()
    page.locator('#simpleDropContainer #droppable').hover()
    await page.mouse.up()
    await expect(page.getByRole('Simple').locator('#droppable')).toHaveText("Dropped!")
    
});