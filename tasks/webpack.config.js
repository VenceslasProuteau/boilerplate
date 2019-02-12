const path = require('path');
const env = require('./env');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const scriptsLoader = require('./loaders/scripts-loader')();

module.exports = {
  mode: env.isProd ? 'production' : 'development',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
      contentBase: path.join(__dirname, '../dist'),
      watchContentBase: true,
      port: 9000
  },
  module: {
      rules: [
          scriptsLoader
      ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
