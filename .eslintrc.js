module.exports = {
    root: true,
    plugins: ["react", "react-hooks"],
    extends: [
        "@react-native-community",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "airbnb",
        "airbnb/hooks",
        "prettier",
    ],
    ignorePatterns: [
        "babel.config.js",
        "metro.config.js",
        ".eslintrc.js",
        "__mocks__/**",
    ],
    rules: {
        "no-undef": "off",
        indent: [
            "error",
            4,
            {
                ignoredNodes: ["JSXElement *"],
            },
        ],
        semi: ["error", "always"],
        "import/no-unresolved": [
            "off",
            {
                commonjs: true,
                caseSensitive: true,
            },
        ],
        "react/jsx-filename-extension": [
            "off",
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],
        "import/extensions": [
            "error",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "max-len": [
            "error",
            {
                code: 160,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
            },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-props-no-spreading": "off",
        "react/no-unescaped-entities": "off",
        "react-native/no-inline-styles": "off",
        "react/display-name": "off",
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react/destructuring-assignment": "off",
        "react/function-component-definition": [
            "off",
            {
                namedComponents: "arrow-function",
            },
        ],
        "react/require-default-props": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [
                    ".mjs",
                    ".tsx",
                    ".js",
                    ".json",
                    ".ts",
                ],
            },
        },
        "import/extensions": [
            ".js",
            ".mjs",
            ".tsx",
            ".jsx",
        ],
        "import/core-modules": [],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$",
        ],
    },
};