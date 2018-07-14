import express from 'express'
import { join } from 'path'
import { readFileSync } from 'fs'
import morgan from 'morgan'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import dirname from './dirname'
import webpackConfig from './webpack-config'
import createDevMiddleware from './lib/create-dev-middleware'


const { __dirname } = dirname

const template = readFileSync(join(__dirname, 'index.html'), { encoding: 'utf8' })

const {
  // eslint-disable-next-line no-magic-numbers
  PORT = 3000,
  NODE_ENV,
} = process.env

const devConfig = webpackConfig({ mode: NODE_ENV })

const app = express()

app
  .use(morgan('dev'))
  .use('/dist/', express.static('dist'))

const compiler = webpack(devConfig)

const devMiddleware = createDevMiddleware(compiler, devConfig)

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))

app
  .get('*', (req, res) => {
    const assets = res.locals.webpackStats.toJson().assetsByChunkName.main

    const main = Array.isArray(assets) ? assets[0] : assets

    const doc = template
      .replace(/\$scriptTag/, main)

    res.send(doc)
  })

app.listen(PORT, '0.0.0.0', (error) => {
  if (error) throw error
  // eslint-disable-next-line no-console
  console.log(`Listening on ${PORT}`)
})
