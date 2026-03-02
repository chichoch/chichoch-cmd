# Agents Guide

## Rendering the Page

To visually inspect the app, use a headless browser to take screenshots:

1. Start the dev server:
   ```bash
   yarn dev --port 5199 &
   sleep 3
   ```

2. Take a screenshot using Playwright (installed at `/tmp/node_modules/playwright`):
   ```bash
   PLAYWRIGHT_BROWSERS_PATH=/tmp/pw-browsers node -e "
   const { chromium } = require('/tmp/node_modules/playwright');
   (async () => {
     const browser = await chromium.launch({ headless: true });
     const page = await browser.newPage();
     await page.setViewportSize({ width: 1280, height: 800 });
     await page.goto('http://localhost:5199', { waitUntil: 'networkidle' });
     await page.screenshot({ path: '/tmp/screenshot.png', fullPage: true });
     await browser.close();
   })();
   "
   ```

3. Analyze the screenshot using the `look_at` tool on `/tmp/screenshot.png`.

4. To interact (e.g. type a command) before screenshotting, use Playwright's `page.keyboard.type()` and `page.keyboard.press('Enter')`.

5. Kill the dev server when done:
   ```bash
   kill $(lsof -t -i:5199) 2>/dev/null
   ```

If Playwright is not installed, set it up first:
```bash
npm install playwright@1.58.2 --prefix /tmp
PLAYWRIGHT_BROWSERS_PATH=/tmp/pw-browsers npx --yes playwright install chromium
```
