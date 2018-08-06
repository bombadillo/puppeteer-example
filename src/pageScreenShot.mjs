import rword from 'rword'

class PageScreenShot {
  constructor() {
    this.numberProcessed = 0
  }

  async takeScreenShot(number, browser) {
    const randomWord = rword.generate(1)
    console.log(randomWord)
    const page = await browser.newPage()
    await page.goto('https://google.com')
    await page.waitFor('input[title=Search]')
    await page.type('input[title=Search]', randomWord)
    await page.type('input[title=Search]', String.fromCharCode(13))
    await page.waitFor('#resultStats', 5000)
    await page
      .screenshot({ path: `screens/google-${number}.png` })
      .catch(error => {
        console.log(randomWord)
        console.log(error)
      })

    console.log('Taken screenshot')
    this.numberProcessed++
  }
}

export default new PageScreenShot()
