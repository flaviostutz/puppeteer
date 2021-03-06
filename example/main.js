/**
 * @name keyboard
 *
 * @desc types into a text editor
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });    
    const page = await browser.newPage()
    await page.goto('https://trix-editor.org/')
    await page.focus('trix-editor')
    await page.keyboard.type('Just adding a title')
    await page.screenshot({ path: '/output/keyboard.png' })
    await browser.close()
})()
