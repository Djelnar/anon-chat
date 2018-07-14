/* eslint-disable unicorn/no-process-exit, no-magic-numbers, global-require */
import webpack from 'webpack'
import {
  writeFile as _writeFile,
} from 'fs'
import { join } from 'path'
import { promisify } from 'util'
import webpackConfig from '../webpack-config'
import dirname from './dirname'


const { __dirname } = dirname

const writeFile = promisify(_writeFile)

const config = webpackConfig({ mode: 'production' })

const options = { encoding: 'utf8' }

const statsPath = join(__dirname, '..', 'stats.json')


const run = async () => {
  const compiler = webpack(config)

  compiler.hooks.done.tap('done', () => {
    process.stdout.write('done bundle process\n\n')
  })


  // run bundle
  compiler.run(async (err, stats) => {
    if (err || stats.hasErrors()) {
      process.stderr.write(err)
      process.exit(1)
    }

    const { assetsByChunkName: { main }, assets } = stats.toJson()

    process.stdout.write(`${assets[0].size / 1024} kb\n\n`)

    const statsToWrite = JSON.stringify({
      main,
    }, null, 2)

    await writeFile(statsPath, statsToWrite, options)

    process.stdout.write('all done\n\n')
  })
}

try {
  run()
}
catch (error) {
  process.stdout.write(error)
}
