import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
]