module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"standard-with-typescript",
		"plugin:react/recommended",
		"prettier"
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"ignorePatterns": ["dist", "node_modules", "**/test/*", ".eslintrc.js"]
}
