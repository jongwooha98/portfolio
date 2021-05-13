// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'react/prop-types': 'off',

    'no-console': 0,

    // Disabling "...should be listed in the project's dependencies, not devDependencies" message
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
