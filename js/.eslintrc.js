const MAX_LEN = 120
const MAX_COMPLEXITY = 10
const MIN_ID_LEN = 2
const MAX_ID_LEN = 40
const INDENT = 4
const MAX_LINES = 500
const MAX_DEPTH = 5
const MAX_CLASSES = 5
const MAX_FUNCTION_LINES = 50
const MAX_FUNCTION_PARAMS = 8
const MAX_FUNCTION_STATEMENTS = 20

// eslint-disable-next-line no-undef
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['lib/**/*', 'types/**/*'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        'array-bracket-spacing': ['warn', 'never'],
        'array-callback-return': 'error',
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': ['warn', { before: true, after: true }],
        'block-scoped-var': 'error',
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs'],
        'camelcase': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'complexity': ['error', MAX_COMPLEXITY],
        'computed-property-spacing': 'warn',
        'consistent-return': 'error',
        'constructor-super': 'error',
        'curly': 'warn',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': ['warn', 'property'],
        'dot-notation': ['warn', { allowKeywords: true }],
        'eol-last': 'warn',
        'eqeqeq': 'error',
        'for-direction': 'error',
        'func-call-spacing': ['warn', 'never'],
        'func-name-matching': 'warn',
        'func-names': ['error', 'always'],
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'function-call-argument-newline': ['warn', 'consistent'],
        'generator-star-spacing': ['error', { before: false, after: true }],
        'getter-return': 'error',
        'id-length': ['warn', { exceptions: ['x', 'y', 'z', 'i', 'j', 'k'], max: MAX_ID_LEN, min: MIN_ID_LEN }],
        'implicit-arrow-linebreak': 'warn',
        'indent': ['error', INDENT],
        'init-declarations': 'error',
        'jsx-quotes': ['warn', 'prefer-single'],
        'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
        'keyword-spacing': ['warn', { before: true, after: true }],
        'line-comment-position': ['warn', { position: 'beside' }],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': ['warn', { beforeBlockComment: true }],
        'lines-between-class-members': ['warn', {
            enforce: [
                { blankLine: 'always', prev: '*', next: 'method' },
                { blankLine: 'never', prev: '*', next: 'field' },
            ],
        }],
        'logical-assignment-operators': ['warn', 'always'],
        'max-classes-per-file': ['error', MAX_CLASSES],
        'max-depth': ['error', MAX_DEPTH],
        'max-len': ['warn', MAX_LEN],
        'max-lines': ['warn', MAX_LINES],
        'max-lines-per-function': ['warn', MAX_FUNCTION_LINES],
        'max-nested-callbacks': ['warn', MAX_DEPTH],
        'max-params': ['warn', MAX_FUNCTION_PARAMS],
        'max-statements': ['warn', MAX_FUNCTION_STATEMENTS],
        'max-statements-per-line': ['warn', { max: 1 }],
        'new-parens': 'error',
        'newline-per-chained-call': 'warn',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-caller': 'warn',
        'no-case-declarations': 'warn',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'warn',
        'no-console': 'warn',
        'no-const-assign': 'error',
        'no-constant-binary-expression': 'warn',
        'no-constructor-return': 'warn',
        'no-duplicate-imports': 'warn',
        'no-else-return': 'warn',
        'no-empty-static-block': 'warn',
        'no-eq-null': 'error',
        'no-eval': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'error',
        'no-extra-parens': ['warn', 'all', { enforceForArrowConditionals: false }],
        'no-floating-decimal': 'warn',
        'no-implicit-coercion': 'warn',
        'no-implicit-globals': 'warn', // ???
        'no-implied-eval': 'warn',
        'no-invalid-this': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'warn',
        'no-magic-numbers': ['warn', { ignore: [-1, 0, 1], ignoreArrayIndexes: true, ignoreDefaultValues: true }],
        'no-mixed-operators': 'warn', // ???
        'no-multi-assign': 'warn',
        'no-multi-spaces': 'warn',
        'no-multi-str': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'no-nested-ternary': 'warn',
        'no-new': 'warn',
        'no-new-func': 'error',
        'no-new-native-nonconstructor': 'warn',
        'no-new-wrappers': 'warn',
        'no-object-constructor': 'warn',
        'no-octal-escape': 'warn',
        'no-param-reassign': 'warn',
        'no-plusplus': 'warn',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'warn',
        'no-shadow': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'warn',
        'no-throw-literal': 'warn',
        'no-trailing-spaces': 'warn',
        'no-unmodified-loop-condition': 'warn',
        'no-unreachable-loop': 'warn',
        'no-unused-expressions': 'warn',
        'no-unused-private-class-members': 'warn',
        'no-useless-call': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-var': 'warn',
        'no-void': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': ['warn', 'beside'],
        'object-curly-newline': ['warn', { multiline: true }],
        'object-curly-spacing': ['warn', 'always'],
        'object-shorthand': ['warn', 'always'],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': 'warn',
        'operator-assignment': 'warn',
        'operator-linebreak': ['warn', 'before'],
        'prefer-arrow-callback': 'warn',
        'prefer-const': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-exponentiation-operator': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-has-own': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': 'warn',
        'prefer-regex-literals': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'quote-props': ['warn', 'consistent'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'never'],
        'semi-spacing': ['warn', { after: true }],
        'semi-style': 'warn',
        'sort-imports': ['warn', { ignoreCase: true, allowSeparatedGroups: true }],
        'sort-keys': ['warn', 'asc', {
            allowLineSeparatedGroups: true,
            caseSensitive: false,
            minKeys: 6,
            natural: true,
        }],
        'sort-vars': ['warn', { ignoreCase: true }], // ???
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'spaced-comment': 'warn',
        'strict': ['warn', 'never'],
        'symbol-description': 'warn',
        'template-curly-spacing': 'warn',
        'template-tag-spacing': ['warn', 'never'],
        'vars-on-top': 'warn',
        'yield-star-spacing': ['warn', { before: false, after: true }],
    },
}
