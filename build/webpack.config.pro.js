const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin({ /** 构建速度分析 */
  disable: true
});

module.exports = smp.wrap(merge(base, {
  mode: 'production',
  plugins: [
    // 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务, 也可以指定html模板
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: false, // 压缩html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new CleanWebpackPlugin(), // 打包前清理dist目录
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // 删除注释
          },
        },
        extractComments: false // 是否将注释剥离到单独的文件中
      })
    ],
    splitChunks: {
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/](vue)[\\/]/, /** 将vue包抽离 */
          name: 'vue',
          priority: 1, /** 数字越大，优先级越大 */
          chunks: 'all',
          minChunks: 1  // 最少复用过几次,只要复用超过1次 就抽离
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/, /** 将所有依赖达成一个包 */
          priority: 0,
          chunks: 'all',
          name: 'vendor',
          // minChunks: 1 /** 默认: 1 */
        }
      },
    }
  },
}))