module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
