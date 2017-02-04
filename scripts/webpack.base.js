var path = require('path');
var rootPath = path.resolve(__dirname, '../');
var srcPath = path.resolve(__dirname, '../src');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'eslint-loader'
      }],
      include: path.join(rootPath, 'src')
    }, {
      test: /\.svg$/,
      loader: 'raw-loader',
      include: path.join(rootPath, 'images')
    }, {
      test: /.*\.(gif|png|jpe?g)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]'
        }
      }, {
        loader: 'image-webpack-loader',
        query: {
          bypassOnDebug: true,
          optimizationLevel: 7,
          interlaced: false
        }
      }],
      include: path.join(rootPath, 'images')
    }]
  },
  resolve: {
    alias: {
      images: path.resolve(rootPath, 'images'),
      constants: path.resolve(srcPath, 'constants'),
      utils: path.resolve(srcPath, 'utils'),
      atoms: path.resolve(srcPath, 'components/atoms'),
      molecules: path.resolve(srcPath, 'components/molecules'),
      organisms: path.resolve(srcPath, 'components/organisms'),
      templates: path.resolve(srcPath, 'components/templates')
    }
  }
};
