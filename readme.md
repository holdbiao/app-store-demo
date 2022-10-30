## 项目技术栈
vue2 + Typescript + webpack + jsx

## 组件语法
Typescript + jsx

## 启动与构建
```sh
# 安装依赖
npm install
# or
cnpm install
# or
pnpm install 

# 启动开发环境
npm run dev

# 构建
npm run build

# 单元测试
npm run test

```
# 手机预览
![](https://github.com/holdbiao/app-store-demo/blob/master/src/static/img/1.png)
保证手机处于统一局域网下，访问终端输出的`ipv4`地址

# 项目架构
```
  '|-- app-store-demo',
  '    |-- .gitignore',
  '    |-- babel.config.js',
  '    |-- index.d.ts',
  '    |-- index.html',
  '    |-- package.json',
  '    |-- pnpm-lock.yaml',
  '    |-- postcss.config.js',
  '    |-- readme.md',
  '    |-- tsconfig.json',
  '    |-- build',
  '    |   |-- build.js',
  '    |   |-- utils.js',
  '    |   |-- webpack.config.base.js',
  '    |   |-- webpack.config.dev.js',
  '    |   |-- webpack.config.pro.js',
  '    |-- dist',
  '    |-- src',
  '        |-- app.tsx',
  '        |-- index.ts',
  '        |-- components',
  '        |   |-- app-item',
  '        |   |   |-- app-item.scss',
  '        |   |   |-- app-item.tsx',
  '        |   |-- lazy-img',
  '        |   |   |-- lazy-img.scss',
  '        |   |   |-- lazy-img.tsx',
  '        |   |-- stars',
  '        |       |-- stars.scss',
  '        |       |-- stars.tsx',
  '        |-- pages',
  '        |   |-- home',
  '        |       |-- home.scss',
  '        |       |-- home.tsx',
  '        |       |-- type.ts',
  '        |-- static',
  '        |   |-- css',
  '        |   |   |-- index.scss',
  '        |   |   |-- vars.scss',
  '        |   |-- icons',
  '        |   |   |-- iconfont.css',
  '        |   |   |-- iconfont.ttf',
  '        |   |   |-- iconfont.woff',
  '        |   |   |-- iconfont.woff2',
  '        |   |-- img',
  '        |       |-- logo.png',
  '        |       |-- ui.png',
  '        |-- utils',
  '            |-- index.ts',
  ''
```
# 项目优点
1. `图片懒加载` 图片加载错误可以手动点击重新加载图片
2. `typescript` 数据具有清晰的类型定义,良好的代码风格
3. 自适应采用`postcss-px-to-viewport`来实现自动转换为`vw`
4. 使用`jest + @vue/test-utils`进行单元测试



问题：
详情接口跨域问题
// fastclick 不需要 https://www.npmjs.com/package/fastclick
// 单元测试
// 自适应效果测试 ok
api接口封装
// 搜索防抖
// 优化滚动better-scroll
// 加载loading
ssr
pwa
文档介绍
