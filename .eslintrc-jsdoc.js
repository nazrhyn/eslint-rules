module.exports = {
	rules: {
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': [1, { checkRestProperty: true }],
		'jsdoc/check-syntax': 1,
		// 'check-types' casing?
		'jsdoc/match-description': 1,
		'jsdoc/newline-after-description': 0,
		'jsdoc/no-bad-blocks': 1,
		'jsdoc/no-defaults': 1,
		'jsdoc/require-description': 1,
		'jsdoc/require-description-complete-sentence': 1,
		'jsdoc/require-jsdoc': [1, { require: { ClassDeclaration: true, MethodDefinition: true } }],
	},
};
