const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,

  devtool: '#source-map',

  entry: [path.resolve(__dirname, 'src', 'index.js')],

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          emitError: true,
          failOnError: true,
          failOnWarning: false,
          formatter: require('eslint-friendly-formatter')
        },
        test: /\.js$/
      },
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'DEV_ONLY')
        ],
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },

  output: {
    filename: 'pure-object.js',
    library: 'pureObject',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])]
};
