import { test, expect, chromium } from "@playwright/test";

test.describe.parallel("suite pack", () => {
  test("basic test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText("Playwright");
  });
  test("test - autogenrated", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.click(
      "text=Playwright enables reliable end-to-end testing for modern web apps."
    );
    await page.click("text=Get started");
    await page.click("text=Installation");
    await page.click("text=Installation​");
    await page.click("text=First test​");
  });

  test.only("run chrome from system default location", async ({}) => {
    const browser = await chromium.launch({
      //headless: false,
      executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");
  });
});
