const { merge } = require('webpack-merge')
const path = require('path')
const base = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  stats: 'errors-only', /** 只在发生错误时输出构建日志 */
  mode: 'development',
  devServer: {
    // host: 'localhost',
    host: '0.0.0.0',
    port: 8000,
    static: path.resolve(__dirname, '../dist'),
    hot: true, // 会默认注入HotModuleReplacementPlugin
    // open: true
    proxy: {
      '/hk': {
        target: 'https://itunes.apple.com/',
        secure: false,
        changeOrigin: true,
        toProxy: true
      },
    }
  },
  devtool: 'eval-cheap-module-source-map', /** 开启定位到行不定位到列的eval-cheap-module-source-map，二次构建速度比source map快 */
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // minify: true, // 压缩html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css' // 设置了hash会导致无法热更新
    }),
  ],
  // webpack缓存
  cache: { /** dev 和 build公用一套缓存会出现报错 */
    type: 'filesystem',
    name: 'webpack',
    cacheDirectory: path.resolve(__dirname, '../.cache'),
    maxAge: 24 * 60 * 60 * 1000 /** 缓存有效时间为一天 */
  }
}) 