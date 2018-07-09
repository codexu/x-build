module.exports = {
  // 解析ES6
  'parser': 'babel-eslint',
  'parserOptions': {
      // 启用ES8语法支持
      'ecmaVersion': 2017,    
      // module表示ECMAScript模块
      'sourceType': 'module',
      // 使用额外的语言特性
      'ecmaFeatures': {
          'experimentalObjectRestSpread': true,
          'jsx': true,
          'modules': true,
      }
  },
  // 这些环境并不是互斥的，所以你可以同时定义多个
  'env': {
      'browser': true,
      'jquery': true,
      'node': true,
      'commonjs': true,
      'es6': true,
  },
  'root': true,
  // 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告
  // 所以需要定义这些额外的全局变量
  'globals': {
      'OnlySVG': true,
      'monitor': true,
      'CanvasRender': true,
      'Vue': true,
      'VueRouter': true
  },
  'rules': {
      // 设置了 setter ，必须相应设置 getter ，反之不必须
      'accessor-pairs': 2,

      // 数组方括号前后的换行符使用规则
      // @off 不关心
      'array-bracket-newline': 0,

      // 数组方括号前后的空格使用规则
      // @off 不关心
      'array-bracket-spacing': 0,

      // 数组的 map、filter、sort 等方法，回调函数必须有返回值
      'array-callback-return': 2,

      // 每个数组项是否独占一行
      // @off 不关心
      'array-element-newline': 0,

      // 箭头函数的书写规则
      // @off 不限制
      'arrow-body-style': 0,

      // 箭头函数的圆括号使用规则
      // @off 不限制
      'arrow-parens': 0,

      // 箭头函数的空格使用规则
      // @off 不限制
      'arrow-spacing': 0,

      // 不能在块外使用块作用域内 var 定义的变量
      'block-scoped-var': 2,

      // 代码块花括号前后的空格规则
      // @off 不关心
      'block-spacing': 0,

      // if else 的花括号换行规则
      // @off 不关心
      'brace-style': 0,

      // callback 之后必须立即 return
      // @off 没必要
      'callback-return': 0,

      // 变量名必须使用驼峰式
      // @off 暂不限制
      'camelcase': 0,

      // 注释的首字母应该大写
      // @off 没必要
      'capitalized-comments': 0,

      // class 的非静态方法必须包含 this 关键字
      'class-methods-use-this': 2,

      // 对象的最后一项后面是否写逗号
      // @off 此项目不关心
      // @fixable 对于 PC 项目考虑兼容性时需要设置
      'comma-dangle': 0,

      // 逗号前后是否有空格
      // @off 不关心
      'comma-spacing': 0,

      // 逗号写在行首还是行尾
      // @off 不关心
      'comma-style': 0,

      // 禁止函数 if ... else if ... else 的复杂度超过 20
      'complexity': 2,

      // 使用方括号访问对象属性时，方括号前后的空格规则
      // @off 不关心
      'computed-property-spacing': 0,

      // 禁止函数在不同条件下返回不同类型的值
      // @off 有时候会希望通过参数获取不同类型的返回值
      'consistent-return': 0,

      // this 的别名规则，只允许 self 或 that
      'consistent-this': [2, 'self', 'that'],

      // 构造函数中必须调用 super
      // @off 没必要
      'constructor-super': 0,

      // if 后必须包含 { ，单行 if 除外
      'curly': [2, 'multi-line', 'consistent'],

      // switch 语句必须包含 default
      'default-case': 2,

      // 链式操作时，点的位置，是在上一行结尾还是下一行开头
      // @off 不关心
      'dot-location': 0,

      // 文件最后必须有空行
      // @off 不限制
      'eol-last': 0,

      // 必须使用 === 和 !== ，和 null 对比时除外
      'eqeqeq': [2, 'always', { 'null': 'ignore' }],

      // for 循环不得因方向错误造成死循环
      'for-direction': 2,

      // 执行函数的圆括号前后的空格规则
      // @off 不关心
      'func-call-spacing': 0,

      // 把函数赋给变量或对象属性时，函数名和变量名或对象属性名必须一致
      // @off 不限制
      'func-name-matching': 0,

      // 不允许匿名函数
      // @off 不限制
      'func-names': 0,

      // 必须只使用函数申明或只使用函数表达式
      // @off 不限制
      'func-style': 0,

      // generator 的 * 前后空格使用规则
      // @off 不限制
      'generator-star-spacing': 0,

      // getter 必须有返回值，允许返回 undefined
      'getter-return': [2, { allowImplicit: true }],

      // require 必须在全局作用域下
      // @off 条件加载很常见
      'global-require': 0,

      // for in 时需检测 hasOwnProperty
      'guard-for-in': 2,

      // callback 中的 err、error 参数和变量必须被处理
      'handle-callback-err': 2,

      // id 黑名单
      // @off 暂时没有
      'id-blacklist': 0,

      // 变量名长度限制
      // @off 长度不是重点，清晰易读才是关键
      'id-length': 0,

      // 限制变量名必须匹配指定的正则表达式
      // @off 没必要限制变量名
      'id-match': 0,

      // 缩进使用 tab 还是空格
      // @off 不关心
      'indent': 0,

      // 变量必须在定义的时候赋值
      // @off 先定义后赋值很常见
      'init-declarations': 0,

      // jsx 语法中，属性的值必须使用双引号
      'jsx-quotes': [2, 'prefer-double'],

      // 对象字面量冒号前后的空格使用规则
      // @off 不关心
      'key-spacing': 0,

      // 关键字前后必须有空格
      'keyword-spacing': 2,

      // 换行符使用规则
      // @off 不关心
      'linebreak-style': 0,

      // 单行注释必须写在前一行还是行尾
      // @off 不限制
      'line-comment-position': 0,

      // 注释前后是否要空一行
      // @off 不限制
      'lines-around-comment': 0,

      // 最大块嵌套深度为 5 层
      'max-depth': [2, 5],

      // 限制单行代码的长度
      // @off 不限制
      'max-len': 0,

      // 限制单个文件最大行数
      // @off 不限制
      'max-lines': 0,

      // 最大回调深度为 3 层
      'max-nested-callbacks': [2, 3],

      // 函数的形参不能多于8个
      'max-params': [2, 8],

      // 限制一行中的语句数量
      // @off 没必要限制
      'max-statements-per-line': 0,

      // 限制函数块中的语句数量
      // @off 没必要限制
      'max-statements': 0,

      // 三元表达式的换行规则
      // @off 不限制
      'multiline-ternary': 0,

      // new关键字后类名应首字母大写
      'new-cap': [2, {
          'capIsNew': false, // 允许大写开头的函数直接执行
      }],

      // new 关键字后类应包含圆括号
      'new-parens': 2,

      // 链式调用是否要换行
      // @off 不限制
      'newline-per-chained-call': 0,

      // 禁止 alert，提醒开发者，上线时要去掉
      'no-alert': 1,

      // 禁止使用 Array 构造函数，使用 Array(num) 直接创建长度为 num 的数组时可以
      'no-array-constructor': 2,

      // 禁止将 await 写在循环里
      'no-await-in-loop': 2,

      // 禁止位运算
      // @off 不限制
      'no-bitwise': 0,

      // 禁止在 Node.js 中直接调用 Buffer 构造函数
      'no-buffer-constructor': 2,

      // 禁止使用 arguments.caller 和 arguments.callee
      'no-caller': 2,

      // switch的条件中出现 var、let、const、function、class 等关键字，必须使用花括号把内容括起来
      'no-case-declarations': 2,

      // catch中不得使用已定义的变量名
      'no-catch-shadow': 2,

      // class定义的类名不得与其它变量重名
      'no-class-assign': 2,

      // 禁止与 -0 做比较
      'no-compare-neg-zero': 2,

      // 禁止在 if、for、while 中出现赋值语句，除非用圆括号括起来
      'no-cond-assign': [2, 'except-parens'],

      // 禁止出现难以理解的箭头函数，除非用圆括号括起来
      'no-confusing-arrow': [2, { 'allowParens': true }],

      // 禁止使用 console，提醒开发者，上线时要去掉
      'no-console': 1,

      // 禁止使用常量作为判断条件
      'no-constant-condition': [2, { 'checkLoops': false }],

      // 禁止对 const 定义重新赋值
      'no-const-assign': 2,

      // 禁止 continue
      // @off 很常用
      'no-continue': 0,

      // 禁止正则表达式中出现 Ctrl 键的 ASCII 表示，即/\x1f/
      'no-control-regex': 2,

      // 禁止 debugger 语句，提醒开发者，上线时要去掉
      'no-debugger': 1,

      // 禁止对变量使用 delete 关键字，删除对象的属性不受限制
      'no-delete-var': 2,

      // 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
      // @off 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
      'no-div-regex': 0,

      // 函数参数禁止重名
      'no-dupe-args': 2,

      // 禁止对象出现重名键值
      'no-dupe-keys': 2,

      // 类方法禁止重名
      'no-dupe-class-members': 2,

      // 禁止 switch 中出现相同的 case
      'no-duplicate-case': 2,

      // 禁止重复 import
      'no-duplicate-imports': 2,

      // 禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b
      // @off 有时前一种写法更清晰易懂
      'no-else-return': 0,

      // 正则表达式中禁止出现空的字符集[]
      'no-empty-character-class': 2,

      // 禁止空的 function
      // 包含注释的情况下允许
      'no-empty-function': 2,

      // 禁止解构中出现空 {} 或 []
      'no-empty-pattern': 2,

      // 禁止出现空代码块
      'no-empty': [2, { 'allowEmptyCatch': true }],

      // 禁止 == 和 != 与 null 做比较，必须用 === 或 !==
      // @off 非严格相等可以同时判断 null 和 undefined
      'no-eq-null': 0,

      // 禁止使用 eval
      'no-eval': 2,

      // catch 定义的参数禁止赋值
      'no-ex-assign': 2,

      // 禁止扩展原生对象
      'no-extend-native': [2, { 'exceptions': ['Array', 'Object'] }],

      // 禁止额外的 bind
      'no-extra-bind': 2,

      // 禁止额外的布尔值转换
      'no-extra-boolean-cast': 2,

      // 禁止额外的 label
      'no-extra-label': 2,

      // 禁止额外的括号，仅针对函数体
      'no-extra-parens': [2, 'functions'],

      // 禁止额外的分号
      'no-extra-semi': 2,

      // 每一个 switch 的 case 都需要有 break, return 或 throw
      // 包含注释的情况下允许
      'no-fallthrough': [2, { 'commentPattern': '.' }],

      // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
      'no-floating-decimal': 2,

      // 禁止对函数声明重新赋值
      'no-func-assign': 2,

      // 禁止对全局变量赋值
      'no-global-assign': 2,

      // 禁止使用隐式类型转换
      'no-implicit-coercion': [2, {
          'allow': ['+', '!!'] // 允许 + 转数值 '' + 转字符串和 !! 转布尔值
      }],

      // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
      'no-implied-eval': 2,

      // 禁止隐式定义全局变量
      'no-implicit-globals': 2,

      // 禁止行内注释
      // @off 很常用
      'no-inline-comments': 0,

      // 禁止在块作用域内使用 var 或函数声明
      'no-inner-declarations': [2, 'both'],

      // 禁止使用非法的正则表达式
      'no-invalid-regexp': 2,

      // 禁止在类之外的地方使用 this
      // @off this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
      'no-invalid-this': 0,

      // 禁止使用不规范空格
      'no-irregular-whitespace': [2, {
          'skipStrings': true, // 允许在字符串中使用
          'skipComments': true, // 允许在注释中使用
          'skipRegExps': true, // 允许在正则表达式中使用
          'skipTemplates': true, // 允许在模板字符串中使用
      }],

      // 禁止使用 __iterator__
      'no-iterator': 2,

      // label 不得与已定义的变量重名
      'no-label-var': 2,

      // 禁止使用 label
      // @off 禁止了将很难 break 多重循环和多重 switch
      'no-labels': 0,

      // 禁止使用无效的块作用域
      'no-lone-blocks': 2,

      // 禁止 else 中只有一个单独的 if
      // @off 单独的 if 可以把逻辑表达的更清楚
      'no-lonely-if': 0,

      // 禁止 for (var i) { function() { use i } }，使用 let 则可以
      'no-loop-func': 2,

      // 禁止魔法数字
      'no-magic-numbers': 0,

      // 禁止使用混合的逻辑判断，必须把不同的逻辑用圆括号括起来
      'no-mixed-operators': [2, {
          "groups": [
              ["&&", "||"]
          ]
      }],

      // 相同类型的 require 必须放在一起
      // @off 不限制
      'no-mixed-requires': 0,

      // 禁止混用空格和 tab 来做缩进，必须统一
      'no-mixed-spaces-and-tabs': 2,

      // 禁止连等赋值
      'no-multi-assign': 2,

      // 禁止使用连续的空格
      'no-multi-spaces': 2,

      // 禁止使用 \ 来定义多行字符串，统一使用模板字符串来做
      'no-multi-str': 2,

      // 连续空行的数量限制
      'no-multiple-empty-lines': [2, {
          max: 3, // 文件内最多连续 3 个
          maxEOF: 1, // 文件末尾最多连续 1 个
          maxBOF: 1 // 文件头最多连续 1 个
      }],

      // 禁止 if 中出现否定表达式 !==
      // @off 否定的表达式可以把逻辑表达的更清楚
      'no-negated-condition': 0,

      // 禁止嵌套的三元表达式
      // @off 没有必要限制
      'no-nested-ternary': 0,

      // 禁止 new Function
      // @off 有时会用它来解析非标准格式的 JSON 数据
      'no-new-func': 0,

      // 禁止使用 new Object
      'no-new-object': 2,

      // 禁止使用 new require
      'no-new-require': 2,

      // 禁止使用 new Symbol
      'no-new-symbol': 2,

      // 禁止 new Boolean、Number 或 String
      'no-new-wrappers': 2,

      // 禁止 new 一个类而不存储该实例
      'no-new': 2,

      // 禁止把原生对象 Math、JSON、Reflect 当函数使用
      'no-obj-calls': 2,

      // 禁止使用八进制转义符
      'no-octal-escape': 2,

      // 禁止使用0开头的数字表示八进制
      'no-octal': 2,

      // 禁止使用 __dirname + 'file' 的形式拼接路径，应该使用 path.join 或 path.resolve 来代替
      'no-path-concat': 2,

      // 禁止对函数的参数重新赋值
      'no-param-reassign': 2,

      // 禁止 ++ 和 --
      // @off 很常用
      'no-plusplus': 0,

      // 禁止使用 process.env.NODE_ENV
      // @off 使用很常见
      'no-process-env': 0,

      // 禁止使用 process.exit(0)
      // @off 使用很常见
      'no-process-exit': 0,

      // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
      // @off 与 guard-for-in 规则冲突，且没有必要
      'no-prototype-builtins': 0,

      // 禁止使用 __proto__
      'no-proto': 2,

      // 禁止重复声明
      'no-redeclare': 2,

      // 禁止在正则表达式中出现连续空格
      'no-regex-spaces': 2,

      // 禁止特定的全局变量
      // @off 暂时没有
      'no-restricted-globals': 0,

      // 禁止 import 特定的模块
      // @off 暂时没有
      'no-restricted-imports': 0,

      // 禁止使用特定的模块
      // @off 暂时没有
      'no-restricted-modules': 'off',

      // 禁止特定的对象属性
      // @off 暂时没有
      'no-restricted-properties': 0,

      // 禁止使用特定的语法
      // @off 暂时没有
      'no-restricted-syntax': 0,

      // 禁止在return中赋值
      'no-return-assign': 2,

      // 禁止在 return 中使用 await
      'no-return-await': 2,

      // 禁止 location.href = 'javascript:void'
      'no-script-url': 2,

      // 禁止将自己赋值给自己
      'no-self-assign': 2,

      // 禁止自己与自己作比较
      'no-self-compare': 2,

      // 禁止逗号操作符
      'no-sequences': 2,

      // 禁止使用保留字作为变量名
      'no-shadow-restricted-names': 2,

      // 禁止在嵌套作用域中出现重名的定义，如 let a; function b() { let a }
      'no-shadow': 2,

      // 禁止数组中出现连续逗号
      'no-sparse-arrays': 2,

      // 禁止使用 node 中的同步的方法，比如 fs.readFileSync
      // @off 使用很常见
      'no-sync': 0,

      // 禁止使用 tabs
      // @off 不限制
      'no-tabs': 0,

      // 禁止普通字符串中出现模板字符串语法
      'no-template-curly-in-string': 2,

      // 禁止三元表达式
      // @off 很常用
      'no-ternary': 0,

      // 禁止在构造函数的 super 之前使用 this
      'no-this-before-super': 2,

      // 禁止 throw 字面量，必须 throw 一个 Error 对象
      'no-throw-literal': 2,

      // 禁止行尾空格
      'no-trailing-spaces': [2, {
          "skipBlankLines": true, // 不检查空行
          "ignoreComments": true // 不检查注释
      }],

      // 禁止将 undefined 赋值给变量
      'no-undef-init': 2,

      // 禁止访问未定义的变量或方法
      'no-undef': 2,

      // 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === 'undefined'
      'no-undefined': 2,

      // 禁止变量名中使用下划线
      // @off 暂不限制
      'no-underscore-dangle': 0,

      // 禁止出现难以理解的多行代码
      'no-unexpected-multiline': 2,

      // 循环体内必须对循环条件进行修改
      'no-unmodified-loop-condition': 2,

      // 禁止不必要的三元表达式
      'no-unneeded-ternary': [2, { 'defaultAssignment': false }],

      // 禁止出现不可到达的代码，如在 return、throw 之后的代码
      'no-unreachable': 2,

      // 禁止在finally块中出现 return、throw、break、continue
      'no-unsafe-finally': 2,

      // 禁止出现不安全的否定，如 for (!key in obj} {}，应该写为 for (!(key in obj)} {}
      'no-unsafe-negation': 2,

      // 禁止出现无用的表达式
      'no-unused-expressions': [2,
          {
              'allowShortCircuit': true, // 允许使用 a() || b 或 a && b()
              'allowTernary': true, // 允许在表达式中使用三元运算符
              'allowTaggedTemplates': true, // 允许标记模板字符串
          }
      ],

      // 禁止定义不使用的 label
      'no-unused-labels': 2,

      // 禁止定义不使用的变量
      'no-unused-vars': [2,
          {
              'vars': 'all', // 变量定义必须被使用
              'args': 'none', // 对于函数形参不检测
              'ignoreRestSiblings': true, // 忽略剩余子项 fn(...args)，{a, b, ...coords}
              'caughtErrors': 'none', // 忽略 catch 语句的参数使用
          }
      ],

      // 禁止在变量被定义之前使用它
      'no-use-before-define': [2,
          {
              'functions': false, // 允许函数在定义之前被调用
              'classes': false, // 允许类在定义之前被引用
          }
      ],

      // 禁止不必要的 call 和 apply
      'no-useless-call': 2,

      // 禁止使用不必要计算的key，如 var a = { ['0']: 0 }
      'no-useless-computed-key': 2,

      // 禁止不必要的字符串拼接
      'no-useless-concat': 2,

      // 禁止无用的构造函数
      'no-useless-constructor': 2,

      // 禁止无用的转义
      'no-useless-escape': 2,

      // 禁止无效的重命名，如 import {a as a} from xxx
      'no-useless-rename': 2,

      // 禁止没有必要的 return
      // @off 没有必要限制
      'no-useless-return': 0,

      // 禁止使用 var，必须用 let 或 const
      'no-var': 2,

      // 禁止使用void
      'no-void': 2,

      // 禁止注释中出现 TODO 或 FIXME，用这个来提醒开发者，写了 TODO 就一定要做完
      'no-warning-comments': 1,

      // 禁止属性前出现空格，如 foo. bar()
      'no-whitespace-before-property': 2,

      // 禁止 with
      'no-with': 2,

      // 禁止 if 语句在没有花括号的情况下换行
      'nonblock-statement-body-position': 2,

      // 定义对象的花括号前后是否要加空行
      // @off 不关心
      'object-curly-newline': 0,

      // 定义对象的花括号前后是否要加空格
      // @off 不关心
      'object-curly-spacing': 0,

      // 对象每个属性必须独占一行
      // @off 不限制
      'object-property-newline': 0,

      // obj = { a: a } 必须转换成 obj = { a }
      // @off 没必要
      'object-shorthand': 0,

      // 每个变量声明必须独占一行
      // @off 有 one-var 就不需要此规则了
      'one-var-declaration-per-line': 0,

      // 是否允许使用逗号一次声明多个变量
      'one-var': [2, {
          'const': 'never' // 所有 const 声明必须独占一行，不允许用逗号定义多个
      }],

      // 必须使用 x = x + y 而不是 x += y
      // @off 没必要限制
      'operator-assignment': 0,

      // 断行时操作符位于行首还是行尾
      // @off 不关心
      'operator-linebreak': 0,

      // 代码块首尾必须要空行
      // @off 没必要限制
      'padded-blocks': 0,

      // 限制语句之间的空行规则，比如变量定义完之后必须要空行
      // @off 没必要限制
      'padding-line-between-statements': 0,

      // 必须使用箭头函数作为回调
      // @off 没必要
      'prefer-arrow-callback': 0,

      // 声明后不再修改的变量必须使用 const
      // @off 没必要
      'prefer-const': 0,

      // 必须使用解构
      // @off 没必要
      'prefer-destructuring': 0,

      // 必须使用 0b11111011 而不是 parseInt('111110111', 2)
      // @off 没必要
      'prefer-numeric-literals': 0,

      // promise 的 reject 中必须传入 Error 对象，而不允许使用字面量
      'prefer-promise-reject-errors': 2,

      // 必须使用解构 ...args 来代替 arguments
      'prefer-rest-params': 2,

      // 必须使用 func(...args) 来代替 func.apply(args)
      // @off 没必要
      'prefer-spread': 0,

      // 必须使用模板字符串来代替字符串拼接
      // @off 不限制
      'prefer-template': 0,

      // 字符串必须使用单引号
      'quotes': [2, 'single', {
          'avoidEscape': true, // 允许包含单引号的字符串使用双引号
          'allowTemplateLiterals': true, // 允许使用模板字符串
      }],

      // 对象字面量的键名禁止用引号括起来
      // @off 没必要限制
      'quote-props': 0,

      // parseInt方法必须传进制参数
      'radix': 2,

      // async 函数中必须存在 await 语句
      // @off async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法
      'require-await': 0,

      // 必须使用 jsdoc 风格的注释
      // @off 暂不考虑开启
      'require-jsdoc': 0,

      // generator 函数内必须有 yield
      'require-yield': 2,

      // ...后面不允许有空格
      'rest-spread-spacing': [2, 'never'],

      // 分号前后的空格规则
      // @off 不限制
      'semi-spacing': 0,

      // 禁止行首出现分号
      'semi-style': [2, 'last'],

      // 行尾必须使用分号结束
      'semi': 2,

      // imports 必须排好序
      // @off 没必要限制
      'sort-imports': 0,

      // 对象字面量的键名必须排好序
      // @off 没必要限制
      'sort-keys': 0,

      // 变量声明必须排好序
      // @off 没必要限制
      'sort-vars': 0,

      // function 等的花括号之前是否使用空格
      // @off 不关心
      'space-before-blocks': 0,

      // function 的圆括号之前是否使用空格
      // @off 不关心
      'space-before-function-paren': 0,

      // 圆括号内的空格使用规则
      // @off 不关心
      'space-in-parens': 0,

      // 操作符前后要加空格
      'space-infix-ops': 2,

      // new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格
      'space-unary-ops': [2, {
          'words': true,
          'nonwords': false,
      }],

      // 注释的斜线和星号后要加空格
      'spaced-comment': [2, 'always', {
          'block': {
              exceptions: ['*'],
              balanced: true
          }
      }],

      // 禁用严格模式，禁止在任何地方出现 'use strict'
      'strict': [2, 'never'],

      // switch 中冒号前后的空格规则
      // @off 不关心
      'switch-colon-spacing': 0,

      // 创建 Symbol 的时候必须传入描述
      'symbol-description': 2,

      // 模板字符串 ${} 前后的空格规则
      // @off 不限制
      'template-curly-spacing': 0,

      // 模板字符串前后的空格规则
      // @off 不限制
      'template-tag-spacing': 0,

      // 所有文件头禁止出现 BOM
      'unicode-bom': 2,

      // 禁止直接对 NaN 进行判断，必须使用 isNaN
      'use-isnan': 2,

      // 注释必须符合 jsdoc 的规范
      // @off 暂不考虑开启
      'valid-jsdoc': 0,

      // typeof 判断条件只能是 "undefined", "object", "boolean", "number", "string", "function" 或 "symbol"
      'valid-typeof': 2,

      // var 必须在作用域的最前面
      // @off var 不在最前面也是很常见的用法
      'vars-on-top': 0,

      // 自执行函数必须使用圆括号括起来，如 (function(){do something...})()
      'wrap-iife': [2, 'inside'],

      // 正则表达式必须用圆括号括起来
      // @off 不限制
      'wrap-regex': 0,

      // yield 的 * 前后空格规则
      // @off 不限制
      'yield-star-spacing': 0,

      // 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)
      'yoda': 2,
  }
};