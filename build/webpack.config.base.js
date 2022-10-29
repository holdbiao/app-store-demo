const { rootDir } = require('./utils.js');
const { VueLoaderPlugin } = require('vue-loader');
const Webpackbar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: rootDir(),
  entry: './src/index.ts',
  output: {
    filename: './js/[name]_[contenthash:8].js',
    path: rootDir('./dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', //内部为正则表达式  vue结尾的
    },
    modules: [
      rootDir('node_modules'), // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤; 使用绝对路径，将只在给定目录中搜索
    ],
    extensions: ['.ts', '.tsx', '.js'] /** 默认后缀名 */
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        /**
         * 使用babel来处理es6+的语法 presets 配置 @babel/preset-env 插件就能满足所有目前最新的语法
         */
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        /**
         * css-loader 处理css文件的引入
         * style-loader 将css插入到html的head style中去
         */
        test: /\.css$/,
        exclude: /node_modules/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      /** 处理sass样式 */
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      { /** 内置的资源模块可以代替 url-loader */
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          filename: 'img/[name].[contenthash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过10kb不转 base64
          }
        }
      },
      {
        test: /\.(woff2|ttf|woff)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
        generator: {
          filename: 'iconfont/[name].[contenthash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 0
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Webpackbar({
      name: 'Webpack 构建'
    })
  ],
  experiments: { /** 慎用--实验特性 */
    // lazyCompilation: false, /** Lazy Compilation 是只有在用户访问时才编译，包含2点，使用入口点和动态导入的代码，它适用 Web 或 Node.js。 */
  }
}