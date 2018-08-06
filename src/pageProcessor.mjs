import PageScreenshot from './PageScreenShot'

const process = async browser => {
  return new Promise((resolve, reject) => {
    let numberToProcess = 20
    let i = numberToProcess
    let numberProcessed = 0

    while (i > 0) {
      PageScreenshot.takeScreenShot(i, browser)
        .then()
        .catch(error => {
          console.log(error)
        })
      i--
    }

    setInterval(() => {
      if (PageScreenshot.numberProcessed === numberToProcess) {
        console.log('Page processor finished processing')
        resolve()
      }
    }, 1000)
  })
}

export default {
  process: process
}
