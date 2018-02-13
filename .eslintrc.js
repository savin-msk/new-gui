module.exports = {
    "env": {
        "browser": true
    },
    "ecmaFeatures": {
        "modules": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};