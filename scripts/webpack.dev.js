var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base');
var rootPath = path.resolve(__dirname, '../');

config.module.rules.push({
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
  }, {
    loader: 'sass-loader'
  }],
  include: path.join(rootPath, 'src')
});

config.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './src/index'
];

config.output = {
  path: rootPath,
  filename: "bundle.js",
  publicPath: "/static/"
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

config.devtool = '[inline-]source-map';

config.devServer = {
  hot: true,
  contentBase: rootPath,
  publicPath: "/static/"
};

module.exports = config;
