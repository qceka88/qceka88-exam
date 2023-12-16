const {test, expect} = require('@playwright/test');
import {pageURL,} from './pageURL.js'

test('Check add products page', async ({page}) => {
    await page.goto(pageURL + 'Add-Product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
});
  