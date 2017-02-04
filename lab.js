var path  = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./scripts/webpack.lab');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(4000, "0.0.0.0", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at localhost:4000");
});
