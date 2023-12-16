const {test, expect} = require('@playwright/test');
import {pageURL,} from './pageURL.js'

test('Check shopping list page', async ({page}) => {
    await page.goto(pageURL + 'Shopping-List');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
});
  