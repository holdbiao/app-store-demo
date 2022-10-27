// const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    [
      "postcss-preset-env", // 已包含autoprefixer功能
      {
        autoprefixer: { grid: true },
        browsers: [
          '> 1%',
          'last 2 versions',
          'ie >= 8',
          'ff > 31'
        ]
      },
    ],
    [
      'postcss-px-to-viewport',
      {
          unitToConvert: 'px',
          // viewportWidth: 320,
          viewportWidth: 750,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: undefined,
          include: undefined,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
          // landscapeWidth: 1334
      }
    ]
  ]
};