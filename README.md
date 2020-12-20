# ESLint Rules
These are the ESLint rules I prefer. They're split into files to make it easy to use different sets of rules depending on what components the project has and what versions it expects.

## Versions
These rules are configured to be used with the following versions.

| Name | Version | Notes |
|------|---------|-------------|
| [ESLint](https://eslint.org/) | [6.8.0](https://eslint.org/blog/2019/12/eslint-v6.8.0-released) | Includes rules and expects the **recommended** configuration from this version.<br/>**6.8.0** is the last version to support **Node.js 8 LTS**. |
| [Node.js](https://nodejs.org/) | [^8.9.0](https://nodejs.org/en/download/releases/) | **Node.js 8 LTS** started at version **8.9.0**. |
| [V8](https://v8.dev/) | [6.1](https://v8.dev/blog/v8-release-61) <br/> [6.2](https://v8.dev/blog/v8-release-62) | **Node.js 8 LTS** started with **V8 6.1** and updated to **V8 6.2** at version **8.10.0**. |

# Files
| File | Description |
|------|-------------|
| `.eslintrc.js` | The root file which includes other modular files. |
| `.eslintrc-base.js` | Includes all rules that don't relate to ES6+ language features. |
| `.eslintrc-es6plus.js` | Includes all rules that relate to ES6+ language features. |
| `test/.eslintrc.js` | Rules for test files, including Jest-specific rules. |
