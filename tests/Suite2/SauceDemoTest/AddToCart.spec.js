const {test, expect} = require('@playwright/test');



test('should add item to cart and verify it', async ({page}) => {

await page.goto('https://www.saucedemo.com/inventory-item.html?id=3', { waituntil: 'networkidle' });
await page.locator('[data-test="add-to-cart"]').click();
const cartBadge = page.locator(".shopping_cart_badge");
await expect(cartBadge).toHaveText('1');
await page.locator('.shopping_cart_link').click();
const cartItem = page.locator('.cart_item');
await expect(cartItem).toBeVisible();
await expect(cartItem.locator('.inventory_item_name')).toHaveText('Test.allTheThings() T-Shirt (Red)');



})