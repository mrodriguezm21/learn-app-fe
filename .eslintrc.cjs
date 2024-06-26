module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 0,
        'no-param-reassign': 0,
        // 'jsx-a11y/click-events-have-key-events': 0,
        'react/no-array-index-key': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
};
