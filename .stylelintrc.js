module.exports = {
    // processors: ['stylelint-processor-styled-components'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-recommended',
        'stylelint-config-styled-components',
    ],
    plugins: [
        'stylelint-scss',
        // "stylelint-prettier"
    ],
    rules: {
        // "prettier/prettier": true,
        // 'at-rule-no-unknown': null,
        // 'scss/at-rule-no-unknown': true,
        indentation: 2, // インデント
        'length-zero-no-unit': true, // 値が「0」なら単位を省略する
        'number-leading-zero': 'always', // 小数点の頭の「0」は省略する
        'color-hex-length': 'short', // HEX形式のカラーコードは3文字で表記する
        'shorthand-property-no-redundant-values': true, // ショートハンドでプロパティを書く
        'no-invalid-double-slash-comments': null,
        'property-no-unknown': [true, {ignoreProperties: [/^\/\//]}],
    },
}