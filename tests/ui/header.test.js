const {test, expect} = require('@playwright/test');
import {pageURL,} from './pageURL.js'

test('Check header', async ({page}) => {
    await page.goto(pageURL);
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
});
  