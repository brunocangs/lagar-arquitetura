module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-boolean-value": [2],
        "react/jsx-closing-bracket-location": [1, "line-aligned"],
        "react/jsx-indent": [2,2],
        "react/jsx-indent-props": [2,2],
        "react/jsx-max-props-per-line": [1],
        "react/jsx-props-no-multi-spaces": [2],
        "react/jsx-sort-props": [2],
        "react/jsx-tag-spacing": [2, {beforeSelfClosing: "always"}],
        "react/jsx-wrap-multilines": [2, {return: "parens-new-line", declaration: "parens-new-line", arrow: "parens-new-line"}],
        "react/jsx-uses-vars": [1],
        "react/jsx-uses-react": [1]
    }
};