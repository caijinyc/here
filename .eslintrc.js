module.exports = {
  extends: 'react-app',
  rules: {
    'linebreak-style': ['error', 'unix'],

    // 强制 2空格缩进
    indent: ['error', 2],

    // 强制单引号
    quotes: ['error', 'single'],

    // 语句强制分号结尾
    semi: ['error', 'always'],

    'block-spacing': [
      // 大括号两边预留空格
      'error',
      'always'
    ],

    //必须使用 if(){} 中的 {}
    curly: [2, 'all'],

    // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,

    'no-irregular-whitespace': 2,

    'no-console': 2,
    'no-debugger': 2,

    // 禁止重复的函数声明
    'no-func-assign': 2,

    // 不能用多余的空格
    'no-multi-spaces': 2,

    // 箭头函数用小括号括起来
    'arrow-parens': 2,

    // 逗号前后的空格
    'comma-spacing': 2,

    // 必须使用全等
    eqeqeq: 2,

    // 数组中的 jsx 必须有 key
    'react/jsx-key': 2,

    // 强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 2,

    // 	禁用行尾空格
    'no-trailing-spaces': 2,

    // 强制在块之前使用一致的空格
    'space-before-blocks': 2,

    // 括号与函数名加空格
    'space-before-function-paren': ['error', 'always'],

    // 要求中缀操作符周围有空格  var sum = 1 + 2;
    'space-infix-ops': ['error', { int32Hint: false }],

    // 要求或禁止在注释前有空白 除了 - +
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],

    'no-var': 2,

    // 	要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    
    // 使用 ...args 而不是 arguments
    'prefer-rest-params': 2,
  }
};
