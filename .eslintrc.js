/* eslint-version 7.16 */
module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'script',
	},
	plugins: [
		'node',
		'jest',
	],
	extends: [
		'eslint:recommended',
		'.eslintrc-base.js',
		'.eslintrc-es6plus.js',
		'plugin:node/recommended',
		'.eslintrc-node.js',
	],
	env: {
		'node': true,
	},
};
