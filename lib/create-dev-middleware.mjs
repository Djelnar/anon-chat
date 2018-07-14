import webpackDevMiddleware from 'webpack-dev-middleware'


export default (compiler, config) => webpackDevMiddleware(compiler, {
  // stats: false,
  stats: {
    colors: false,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: false,
    modules: false,
  },
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
  serverSideRender: true,
  headers: {
    'X-Powered-By': 'Express',
  },
})
