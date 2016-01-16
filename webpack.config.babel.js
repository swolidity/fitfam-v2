import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = [
  {
    name: 'server',
    entry: './src/server.js',
    target: 'node',
    output: {
      filename: 'server.js',
      path: './build/',
      libraryTarget: 'commonjs2'
    },
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: /^[a-z][a-z\.\-0-9]*$/,
    module: {
      loaders: [
        { test: /\.js?$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] }
      ]
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop')
    ]
  },
  {
    name: 'client',
    entry: './src/client.js',
    output: {
      path: './build/public/',
      filename: 'client.js'
    },
    module: {
      loaders: [
        { test: /\.js?$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] },
        { test:   /\.css$/, loader: ExtractTextPlugin.extract('css-loader!postcss-loader', { publicPath: './build/public/' }) }
      ]
    },
    postcss: function () {
      return [
        require('postcss-cssnext')(),
        require('postcss-import')(),
        require('postcss-css-variables')(),
        require('postcss-nested')(),
        require('postcss-custom-media')()
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css', { allChunks: true })
    ]
  }
]
