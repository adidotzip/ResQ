const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1. Complete onboarding
    await page.goto('http://localhost:8000/onboarding.html');
    await page.fill('#name-input', 'TestUser');
    await page.click('button:has-text("Get Started")');

    // Wait for dashboard to load
    await page.waitForURL('http://localhost:8000/index.html*');
    await page.screenshot({ path: 'screenshot_dashboard.png' });

    // 3. Go to settings FIRST to add a family member (since we removed David and Emma, we only have user_self, who might not have a ping button)
    await page.goto('http://localhost:8000/settings.html');
    await page.waitForSelector('#family-list');
    await page.click('button:has-text("Add")'); // Add member
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshot_settings.png' });
    await page.click('button:has-text("Save All Changes")');
    await page.waitForURL('http://localhost:8000/index.html*');

    // 2. Go to Family Center
    await page.goto('http://localhost:8000/Family Center/index.html');
    await page.waitForSelector('#member-list');

    // Expand bottom sheet
    await page.click('#bottom-sheet');
    await page.waitForTimeout(500); // Wait for transition

    // Screenshot before ping
    await page.screenshot({ path: 'screenshot_family_before.png' });

    // Click ping
    await page.click('button[title="Ping Location"]');
    await page.waitForTimeout(500);

    // Screenshot after ping
    await page.screenshot({ path: 'screenshot_family_after.png' });

    console.log("Tests complete. Check screenshots.");
    await browser.close();
})();
