/**
 * Screenshot script for Mathias Monuments UI
 *
 * Usage:
 *   npm run screenshots
 *
 * Requires the dev server to be running on http://localhost:3000
 * (run `npm run dev` in another terminal first).
 *
 * Screenshots are saved to public/screenshots/.
 */

const { chromium } = require('@playwright/test')
const path = require('path')
const fs = require('fs')

const BASE_URL = process.env.SCREENSHOT_URL || 'http://localhost:3000/MathiasMonuments'
const OUT_DIR = path.join(__dirname, '..', 'public', 'screenshots')

async function takeScreenshots() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 800 })

  await page.goto(BASE_URL, { waitUntil: 'networkidle' })

  // a) Header with logo
  const header = await page.$('header')
  if (header) {
    await header.screenshot({ path: path.join(OUT_DIR, 'header-logo.png') })
    console.log('Saved header-logo.png')
  }

  // b) CreditClaim section above BentoLegacyGrid
  //    Open the credit claim dialog first by clicking the button
  await page.click('button[aria-label*="Claim"]')
  try {
    await page.waitForSelector('#claim-credit', { timeout: 3000 })
    const creditSection = await page.$('#claim-credit')
    if (creditSection) {
      await creditSection.screenshot({ path: path.join(OUT_DIR, 'credit-claim.png') })
      console.log('Saved credit-claim.png')
    }
  } catch {
    console.log('credit-claim section not found (may need JS hydration)')
  }

  // Full-page screenshot showing CreditClaim above BentoLegacyGrid
  await page.screenshot({
    path: path.join(OUT_DIR, 'credit-above-bento.png'),
    fullPage: true,
    clip: { x: 0, y: 0, width: 1280, height: 1600 },
  })
  console.log('Saved credit-above-bento.png')

  // c) Our Work horizontal gallery
  const ourWork = await page.$('#our-work')
  if (ourWork) {
    await ourWork.scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)
    await ourWork.screenshot({ path: path.join(OUT_DIR, 'our-work-gallery.png') })
    console.log('Saved our-work-gallery.png')
  }

  await browser.close()
  console.log(`\nAll screenshots saved to: ${OUT_DIR}`)
}

takeScreenshots().catch(err => {
  console.error(err)
  process.exit(1)
})
