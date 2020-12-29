# ESLint Rules
These are the ESLint rules I prefer. They're split into files to make it easy to use different sets of rules depending on what components the project has and what versions it expects.

## Versions
These rules are configured to be used with the following versions. 

| Name | Version | Description |
|------|---------|-------------|
| [ESLint](https://eslint.org/) | [7.16.x](https://eslint.org/blog/2020/12/eslint-v7.16.0-released) | Includes rules and expects the **recommended** configuration from this version. |
| [Node.js](https://nodejs.org/) | [^14.15.0](https://nodejs.org/en/download/releases/) | **Node.js 14 LTS** started at version **14.15.0**. |
| [V8](https://v8.dev/) | [8.4.x](https://v8.dev/blog/v8-release-84) | **Node.js 14 LTS** uses **V8 8.4**. |
| [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) | [11 (2020)](https://www.ecma-international.org/ecma-262/11.0/index.html#title) | ESLint supports the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) from [v7.2.0](https://eslint.org/blog/2020/06/eslint-v7.2.0-released) and the [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) from [v7.5.0](https://eslint.org/blog/2020/07/eslint-v7.5.0-released). |

# Files
| File | Description |
|------|-------------|
| `.eslintrc.js` | The root file which includes other modular files. |
| `.eslintrc-base.js` | Includes all rules that don't relate to ES6+ language features. |
| `.eslintrc-es6plus.js` | Includes all rules that relate to ES6+ language features. |
| `.eslintrc-node.js` | Includes rules from [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) removed from ESLint core in [v7.0.0](https://eslint.org/blog/2020/05/eslint-v7.0.0-released). |
| `.eslintrc-jsdoc.js` | Includes rules from [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) replacing the `require-jsdoc` and `valid-jsdoc` rules deprecated in ESLint core in [v5.10.0](https://eslint.org/blog/2018/12/eslint-v5.10.0-released). |
| `test/.eslintrc.js` | Rules for test files, including Jest-specific rules. |

# ECMAScript Modules
For now, ESLint does not support ES Modules. If your project uses ES Modules, these files will need to be renamed from `*.js` to `*.cjs` so that they still operate in CommonJS style within an ES Modules project. However, `parserOptions.sourceType` will still need to be set to `'module'` so that the linter allows `import` and `export` statements.
