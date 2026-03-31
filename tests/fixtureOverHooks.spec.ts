import { test, expect } from "../fixtures/HooksFixture";

test("Adding / Removing item to / from cart verification", async ({ page }) => {
  // Verify item is present
  await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack');

  // Verify remove button is visible
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();

  // Remove item
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  // Verify item is no longer visible
  await expect(page.locator('[data-test="item-4-title-link"]')).not.toBeVisible();
});

test("Empty cart verification", async ({ page,loginlogoutfixture }) => {
  await page.locator(".shopping_cart_link").click();
  await expect(page.locator('.inventory_item_name')).not.toBeVisible();
});

