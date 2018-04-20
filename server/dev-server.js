const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const api = require('./api')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const app = express();

async function start() {
  let config = require('../src/nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')

  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }
  app.use('/api', api);

  function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
    return new Promise((resolve, reject) => {
      nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    });
  }
  app.get('**', handleRequest)
  app.listen(port, host)
}
start()