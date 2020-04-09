const D = require('Diagnostics')
const Time = require('Time')

D.log("waiting...")

const wait = (dur) => new Promise(resolve => Time.setTimeout(resolve, dur))

const init = async () => {
  const time = await wait(1200)
  D.log(time)
  return
}

init()
