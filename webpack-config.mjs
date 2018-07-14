import path from 'path'
import webpack from 'webpack'
import dirname from './dirname'


const { __dirname } = dirname

const entry = path.join(__dirname, 'src', 'index.js')

const devEntry = [
  entry,
  'webpack-hot-middleware/client?reload=true',
]

const prod = (env) => env === 'production'

export default ({ mode = 'development' }) => ({
  mode,
  context: path.join(__dirname, 'src'),
  entry: prod(mode) ? entry : devEntry,
  output: {
    filename: '[hash:10].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: prod(mode)
    ? []
    : [
      new webpack.HotModuleReplacementPlugin(),
    ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
})
