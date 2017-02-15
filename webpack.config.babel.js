const webpackValidator = require('webpack-validator')
const { resolve } = require('path')
const { getIfUtils } = require('webpack-config-utils')
const webpack = require('webpack')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)
  const config = webpackValidator({
    context: resolve('src'),
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './client/index.js'
    ],
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
      pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['react-hot-loader','babel-loader'], exclude: /node_modules/ },
        { test: /\.css$/, loaders: ['style', 'css'] }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })

  return config;
}