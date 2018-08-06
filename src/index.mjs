// import puppeteer from 'puppeteer'

// async function getPic(i) {
//   itemsToProcess++
//   const page = await browser.newPage()
//   await page.goto('https://google.com')
//   await page.screenshot({ path: `google-${i}.png` })

//   itemsToProcess--
// }

// async function getBrowser() {
//   return await puppeteer.launch()
// }

// const main = async () => {
//   console.log('App started')
//   const browser = await getBrowser()

// }

// main()

// let i = 20
// let itemsToProcess = 0
// let browser =

// while (i > 0) {
//   getPic(i)
//   i--
// }

// while (true) {
//   if (itemsToProcess <= 0) {
//     console.log('exiting')
//     process.exit()
//   }
// }

import App from './app'

App.start()
  .then(() => {
    console.log("The show's over, folks")
  })
  .catch(error => {
    console.log(error)
  })
