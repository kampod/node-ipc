module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'quotes': ['error', 'single'],
    '@typescript-eslint/quotes': ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false, 'classes': true }],
    '@typescript-eslint/no-inferrable-types': ['off']
  },
  settings: {
    'node': {
      'resolvePaths': ['node_modules/@types'],
      'tryExtensions': ['.js', '.json', '.node', '.ts', '.d.ts']
    }
  }
};
