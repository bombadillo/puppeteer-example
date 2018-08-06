import puppeteer from 'puppeteer'

const retrieve = async function getBrowser() {
  return await puppeteer.launch()
}

export default {
  retrieve: retrieve
}
