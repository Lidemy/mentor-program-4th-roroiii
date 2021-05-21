module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'no-tabs':'off',
     'indent': ['off', 'tab'],
     'indent': ['off', 4],
     "semi": [0],
     "quotes": [1, "single"],
     "quote-props":[0, "always"],
     "no-plusplus": 0,
  },
};
