import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/world",
  "/rules",
  "/development",
  "/community",
  "/documentation",
  "/documentation/getting-started",
];

for (const route of routes) {
  test(`${route} loads and returns 200`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
  });
}

test("documentation search opens with Ctrl+K", async ({ page }) => {
  await page.goto("/documentation");
  await page.keyboard.press("Control+k");
  await expect(page.getByPlaceholder("Dokümanlarda ara...")).toBeVisible();
});

test("mobile nav toggle is keyboard accessible", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Menüyü aç" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobil gezinme" })).toBeVisible();
});
