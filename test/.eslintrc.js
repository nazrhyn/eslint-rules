module.exports = {
	extends: [
		'plugin:jest/recommended',
		'plugin:jest/style'
	],
	env: {
		jest: true,
	},
	rules: {
		'max-lines-per-function': 0, // Unit tests get big sometimes.
		'padded-blocks': 0, // Allow some extra air inside of describe blocks.

		// eslint-plugin-jest
		'jest/consistent-test-it': [2, { fn: 'it', withinDescribe: 'it' }],
		'jest/lowercase-name': [2, { ignore: ['describe'] }],
		'jest/no-deprecated-functions': 2,
		'jest/no-duplicate-hooks': 2,
		'jest/no-if': 2,
		'jest/no-large-snapshots': 2,
		'jest/no-restricted-matchers': [2, {
			toBeTruthy: 'Avoid `toBeTruthy`',
			toBeFalsy: 'Avoid `toBeFalsy`',
		}],
		'jest/no-test-return-statement': 2,
		'jest/prefer-called-with': 2,
		'jest/prefer-hooks-on-top': 2,
		'jest/prefer-spy-on': 2,
		'jest/prefer-strict-equal': 2,
		'jest/prefer-todo': 2,
		'jest/require-to-throw-message': 2,
		'jest/valid-title': 2,
	}
};
