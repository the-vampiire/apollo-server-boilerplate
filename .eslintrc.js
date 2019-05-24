module.exports = {
	env: {
		es6: true,
		commonjs: true,
	},
	extends: "airbnb-base",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		quotes: ["error", "double"],
	},
};
