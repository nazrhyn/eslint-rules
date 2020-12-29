/* eslint-version 7.16 */
module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'script',
	},
	plugins: [
		'node',
		'jsdoc',
	],
	extends: [
		'eslint:recommended',
		'.eslintrc-base.cjs',
		'.eslintrc-es6plus.cjs',
		'plugin:node/recommended',
		'.eslintrc-node.cjs',
		'plugin:jsdoc/recommended',
		'.eslintrc-jsdoc.cjs',
	],
	env: {
		node: true,
	},
};
