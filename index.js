module.exports = {
    'plugins': [
        'react',
        'testing-library',
    ],
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:testing-library/react',
    ],
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'sourceType': 'module',
    },
    'env': {
        'jest': true,
        'browser': true,
        'es6': true,
        'node': true,
    },
    'rules': {
        'testing-library/no-render-in-setup': 'off',
        'testing-library/no-node-access': 'off',
        'testing-library/render-result-naming-convention': 'off',
        'testing-library/prefer-query-by-disappearance': 'off',
        'testing-library/prefer-screen-queries': 'off',
        'react/jsx-key': 'off',
        'react/prop-types': 'off',
        'no-extra-boolean-cast': 'off',
        'no-prototype-builtins': 'off',
        'no-unused-vars': [
            'warn',
            {
                'varsIgnorePattern': '^React$',
            },
        ],
        'no-shadow': [
            'warn',
        ],
        'no-unneeded-ternary': [
            'warn',
        ],
        'no-var': [
            'warn',
        ],
        'prefer-const': [
            'warn',
        ],
        'array-bracket-newline': [
            'warn',
            'consistent',
        ],
        'arrow-parens': [
            'warn',
            'as-needed',
            {
                'requireForBlockBody': true,
            },
        ],
        'comma-dangle': [
            'warn',
            'always-multiline',
        ],
        'comma-style': [
            'warn',
            'last',
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'no-trailing-spaces': [
            'warn',
        ],
        'comma-spacing': [
            'warn',
            {
                'before': false,
                'after': true,
            },
        ],
        'arrow-spacing': [
            'warn',
            {
                'before': true,
                'after': true,
            },
        ],
        'no-multiple-empty-lines': [
            'warn',
            {
                'max': 2,
                'maxEOF': 1,
                'maxBOF': 0,
            },
        ],
        'func-call-spacing': [
            'warn',
            'never',
        ],
        'function-call-argument-newline': [
            'warn',
            'consistent',
        ],
        'function-paren-newline': [
            'warn',
            'consistent',
        ],
        'key-spacing': [
            'warn',
            {
                'beforeColon': false,
                'afterColon': true,
                'mode': 'strict',
            },
        ],
        'jsx-quotes': [
            'warn',
            'prefer-double',
        ],
        'max-len': [
            'warn',
            {
                'ignoreComments': true,
                'ignoreStrings': true,
                'code': 140,
            },
        ],
        'max-statements-per-line': [
            'warn',
            {
                'max': 1,
            },
        ],
        'new-parens': [
            'warn',
            'always',
        ],
        'newline-per-chained-call': [
            'warn',
        ],
        'no-multi-spaces': [
            'warn',
        ],
        'no-tabs': [
            'error',
        ],
        'no-mixed-spaces-and-tabs': [
            'error',
        ],
        'no-whitespace-before-property': [
            'warn',
        ],
        'object-curly-spacing': [
            'warn',
            'never',
        ],
        'quotes': [
            'warn',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true,
            },
        ],
        'semi': [
            'warn',
            'always',
        ],
        'semi-spacing': [
            'warn',
            {
                'before': false,
                'after': true,
            },
        ],
        'semi-style': [
            'warn',
            'last',
        ],
        'space-before-function-paren': [
            'warn',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],
        'switch-colon-spacing': [
            'warn',
            {
                'after': true,
                'before': false,
            },
        ],
    },
};
