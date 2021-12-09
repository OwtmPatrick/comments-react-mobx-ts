module.exports = {
	root: true,
	extends: [
		'eslint-config-graph',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	env: {
		browser: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
				paths: ['./src']
			}
		}
	},
	rules: {
		'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never'
			}
		]
	}
};
