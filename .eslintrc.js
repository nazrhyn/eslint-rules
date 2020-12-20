/* eslint-version 6.8 */
module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'script',
	},
	plugins: [
		'jest',
	],
	extends: [
		'eslint:recommended',
		'.eslintrc-base.js',
		'.eslintrc-es6plus.js',
	],
	env: {
		'node': true,
	}
};
