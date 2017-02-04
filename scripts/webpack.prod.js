var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(rootPath, './dist/www/static');

config.module.rules.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: ['css-loader', 'sass-loader']
  }),
  include: path.join(rootPath, 'src')
});

config.entry = [
  "./src/index"
];

config.output = {
  path: assetsPath,
  filename: 'bundle.js',
  publicPath: '/static/'
};

config.plugins = [
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    },
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false
  }),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = config;
