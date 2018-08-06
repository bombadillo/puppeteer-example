import browserRetriever from './puppeteer/browserRetriever'
import pageProcessor from './pageProcessor'

class App {
  constructor() {
    this.browser = undefined
  }

  async start() {
    console.log('App start')

    this.browser = await browserRetriever.retrieve()

    await pageProcessor
      .process(this.browser)
      .then(() => {
        this.end()
      })
      .catch(error => {
        console.log(error)
        this.end()
      })
  }

  end() {
    this.browser.close()
    console.log('App end')
    process.exit()
  }
}

export default new App()
