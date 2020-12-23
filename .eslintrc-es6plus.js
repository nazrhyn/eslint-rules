module.exports = {
	parserOptions: {
		ecmaVersion: 11, // 2020
	},
	env: {
		es6: true,
	},
	rules: {
		'arrow-parens': [2, 'as-needed'],
		'arrow-spacing': 2,
		'class-methods-use-this': 1,
		'computed-property-spacing': [2, 'never'],
		'consistent-this': [2, 'self'],
		'default-param-last': 2,
		'generator-star-spacing': [2, { before: false, after: true }],
		'implicit-arrow-linebreak': 2,
		'lines-between-class-members': 2,
		'no-buffer-constructor': 2,
		'no-confusing-arrow': 2,
		'no-duplicate-imports': [2, { includeExports: true }],
		'no-nonoctal-decimal-escape': 2,
		'no-promise-executor-return': 2,
		'no-template-curly-in-string': 2,
		'no-unsafe-optional-chaining': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-rename': 2,
		'no-var': 2,
		'object-shorthand': 1,
		'prefer-const': [2, { destructuring: 'all' }],
		'prefer-exponentiation-operator': 2,
		'prefer-numeric-literals': 2,
		'prefer-object-spread': 2,
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		// Turning this off due to its aggressive positives and a pending open issue: https://github.com/eslint/eslint/issues/11899
		// It is part of eslint:recommended, so we need to explicitly disable it rather than just removing it.
		'require-atomic-updates': 0,
		'require-yield': 2,
		'rest-spread-spacing': 2,
		'strict': [2, 'global'],
		'symbol-description': 2,
		'template-curly-spacing': 2,
		'template-tag-spacing': 2,
		'yield-star-spacing': 2,
	}
};
