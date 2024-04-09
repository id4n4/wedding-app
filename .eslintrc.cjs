module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@stylistic'
  ],
  ignorePatterns: ['vite.config.js', '.eslintrc.cjs', 'tailwind.config.js', 'index.html'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],
  }
}
