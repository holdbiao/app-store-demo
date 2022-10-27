const webpack = require('webpack');
const webpackConfig = require('./webpack.config.pro');

webpack(webpackConfig, (err, stats) => {
  if (err) throw err
})