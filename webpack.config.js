const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./public'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  }
}