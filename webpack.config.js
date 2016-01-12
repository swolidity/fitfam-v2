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
    }
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
        { test: /\.js?$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] }
      ]
    }
  }
]
