module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    semi: 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
