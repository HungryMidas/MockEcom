const path = require('path');

module.exports = {
	"extends": [
		"next/core-web-vitals",
		"plugin:@next/next/recommended",
		"plugin:@next/next/core-web-vitals"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "project": path.join(__dirname, "./tsconfig.json")
    },
    "settings": {
        "next": {
            "rootDir": path.join(__dirname, "./")
        }
    },
	"rules": {
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/return-await": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-unreachable": "error",
		"no-unused-vars": "error",
		// Doesn"t make sense in Nextjs
		"react/react-in-jsx-scope": "off",
		// Extra rules we prefer
		"no-console": "error",
		"prefer-const": "error",

		// Fix These
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"no-useless-return": "error"
	}
}
