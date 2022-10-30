## 项目技术栈

Vue2 + Typescript + Webpack + Jsx

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

# 项目结构
```
|-- app-store-demo
    |-- .gitignore
    |-- babel.config.js
    |-- index.d.ts
    |-- index.html
    |-- jest.config.js
    |-- package.json
    |-- pnpm-lock.yaml
    |-- postcss.config.js
    |-- readme.md
    |-- tsconfig.json
    |-- build ------------------------ 构建相关
    |   |-- utils.js
    |   |-- webpack.config.base.js
    |   |-- webpack.config.dev.js
    |   |-- webpack.config.pro.js
    |-- dist ------------------------- 构建产物
    |   |-- index.html
    |   |-- css
    |   |   |-- main.29ff9879.css
    |   |-- iconfont
    |   |   |-- iconfont.526259fd.woff2
    |   |   |-- iconfont.be853bf8.ttf
    |   |   |-- iconfont.e429315e.woff
    |   |-- js
    |       |-- main_b8ee320a.js
    |       |-- vendor_30a3796f.js
    |       |-- vue_6a34ed2c.js
    |-- src
        |-- app.tsx
        |-- index.ts
        |-- __tests__ ---------------- 测试用例
        |   |-- app-item.spec.js
        |   |-- home.spec.js
        |   |-- lazy-img.spec.js
        |   |-- loading.spec.js
        |   |-- stars.spec.js
        |-- components
        |   |-- app-item ------------- 应用展示组件
        |   |   |-- app-item.scss
        |   |   |-- app-item.tsx
        |   |-- lazy-img ------------- 图片懒加载组件
        |   |   |-- lazy-img.scss
        |   |   |-- lazy-img.tsx
        |   |-- loading -------------- 全局loading组件
        |   |   |-- index.ts
        |   |   |-- loading.scss
        |   |   |-- loading.tsx
        |   |-- stars ---------------- 应用评分组件
        |       |-- stars.scss
        |       |-- stars.tsx
        |-- pages -------------------- 应用列表页
        |   |-- home
        |       |-- home.scss
        |       |-- home.tsx
        |       |-- type.ts
        |-- static ------------------- 静态资源
        |   |-- css
        |   |   |-- index.scss
        |   |   |-- vars.scss
        |   |-- icons
        |   |   |-- iconfont.css
        |   |   |-- iconfont.ttf
        |   |   |-- iconfont.woff
        |   |   |-- iconfont.woff2
        |   |-- img
        |       |-- 1.png
        |       |-- logo.png
        |       |-- ui.png
        |-- utils -------------------- 工具函数
            |-- index.ts

```
# 项目优点
1. `图片懒加载` 图片加载错误可以手动点击重新加载图片
2. `typescript` 数据具有清晰的类型定义,良好的代码风格
3. 自适应采用`postcss-px-to-viewport`来实现自动转换为`vw`
4. 使用`jest + @vue/test-utils`进行单元测试

# Feature
ssr
pwa
