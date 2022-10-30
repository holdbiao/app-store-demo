
module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    // "^.+\\.tsx?$": "ts-jest"
    "^.+\\.(tsx?|js)$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  // snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    // "**/__tests__/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    '**/__tests__/**/*.+(js)',
    '**/?(*.)+(test).+(js)'
  ],
  // testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  },
  collectCoverage: true,
  reporters: ['default']
};