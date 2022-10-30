module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'transform-vue-jsx'
  ],
  "env": {
    "test": {
      // "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]],
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        'transform-vue-jsx'
      ]
    }
  }
}