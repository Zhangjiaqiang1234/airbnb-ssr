module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'accessor-pairs': 0, // 在对象中使用getter/setter
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'arrow-parens': [0, 'as-needed'], // 箭头函数参数周围加上括号
    'arrow-spacing': 0, // =>的前/后括号
    'block-scoped-var': 2, // 将变量声明放在合适的代码块里
    'callback-return': 0, // 避免多次调用回调什么的
    'comma-dangle': [2, 'always-multiline'], // 是否允许对象中出现结尾逗号
    'comma-spacing': 0, // 逗号前后的空格
    'comma-style': [2, 'last'], // 逗号风格
    'computed-property-spacing': [0, 'never'], // 是否允许计算后的键名什么的
    'consistent-return': 0, // 无论有没有返回值都强制要求return语句返回一个值
    'consistent-this': [0, 'that'], // 当获取当前环境的this是用一样的风格
    'constructor-super': 0, // 非派生类不能调用super，派生类必须调用super
    'default-case': 0, // 在switch语句中需要有default语句
    'dot-location': 0, // 对象访问符的位置，换行的时候在行首还是行尾
    'eol-last': 2, // 文件以换行符结束
    'fun-call-spacing': 0, // 函数调用时，函数名与()之间不能有空格
    'func-names': 0, // 函数表达式必须有名字
    'func-style': 0, // 函数风格，规定只能使用函数声明或者函数表达式
    'generator-star-spacing': [2, 'both'], // 生成器函数前后空格
    'guard-for-in': 0, // 监视for in循环，防止出现不可预料的情况
    'keyword-spacing': 2, // 关键字前后的空格
    'linebreak-style': [0, 'windows'], // 换行风格
    'max-depth': 2, // 嵌套块深度
    'max-len': [2, 120], // 一行最大长度，单位为字符
    'max-nested-callbacks': [2, 3], // 回调嵌套深度
    'max-params': 2, // 函数最多能有多少个参数
    'max-statements': [1, 40], // 函数内最多有几个声明
    'new-parens': 2, // new时构造函数必须有小括号
    'newline-after-var': 0, // 变量声明后必须空一行
    'no-alert': 1, // 不允许使用alert，confirm，prompt语句
    'no-array-constructor': 2, // 不允许使用数组构造器
    'no-async-promise-executor': 2, // 禁止将异步功能用作Promise执行器
    'no-bitwise': 0, // 不允许使用位运算符
    'no-caller': 2, // 不允许使用arguments.callee和arguments.caller属性
    'no-case-declarations': 2, // 不允许在case内部定义变量，除非有新的作用域
    'no-catch-shadow': 2, // 不允许try catch语句接受的err变量与外部变量重名
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 条件语句的条件中不允许出现赋值运算符
    'no-console': [1, { allow: ['warn', 'error'] }], // 不允许出现console语句
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-constant-condition': 2, // 条件语句的条件中不允许出现恒定不变的量
    'no-continue': 0, // 禁止使用continue
    'no-control-regex': 2, // 正则表达式中不允许出现控制字符
    'no-debugger': 2, // 不允许出现debugger语句
    'no-delete-var': 2, // 不允许使用delete操作符
    'no-div-regex': 2, // 不能使用看起来像除法的正则表达式
    'no-dupe-args': 2, // 函数定义的时候不允许出现重复的参数
    'no-dupe-keys': 2, // 对象中不允许出现重复的键
    'no-duplicate-case': 2, // switch语句中不允许出现重复的case标签
    'no-else-return': 2, // 如果if语句有return，else里的return不用放在else里
    'no-empty-character-class': 2, // 正则表达式中不允许出现空的字符组
    'no-empty': 2, // 不允许出现空的代码块
    'no-eq-null': 2, // 不允许对null用==或者!=
    'no-eval': 2, // 不允许使用eval()
    'no-ex-assign': 2, // 在try catch语句中不允许重新分配异常变量
    'no-extend-native': 2, // 不允许扩展原生对象
    'no-extra-bind': 2, // 不允许不必要的函数绑定
    'no-extra-boolean-cast': 2, // 不允许出现不必要的布尔值转换
    'no-extra-parens': 0, // 不允许出现不必要的圆括号
    'no-extra-semi': 2, // 不允许出现不必要的分号
    'no-fallthrough': 2, // 禁止switch穿透
    'no-floating-decimal': 2, // 不允许浮点数缺失数字
    'no-func-assign': 2, // 不允许重新分配函数声明
    'no-global-assign': [2, { exceptions: ['uni'] }], // 不允许重新分配原生对象
    'no-implicit-coercion': 0, // 禁止隐式转换
    'no-implied-eval': 2, // 不允许使用隐式eval()
    'no-inline-comments': 0, // 不允许行内注释
    'no-inner-declarations': 0, // [2, 'functions'], // 不允许在嵌套代码块里声明函数
    'no-invalid-regexp': 2, // 不允许在RegExp构造函数里出现无效的正则表达式
    'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, // 不允许出现不规则的空格
    'no-iterator': 2, // 不允许使用__iterator__属性
    'no-label-var': 2, // 不允许标签和变量同名
    'no-lone-blocks': 2, // 不允许不必要的嵌套代码块
    'no-lonely-if': 2, // 不允许else语句内只有if语句
    'no-loop-func': 2, // 不允许在循环语句中进行函数声明
    'no-mixed-requires': [0, false], // 声明时不能混用声明类型
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 不允许混用tab和空格
    'no-multi-spaces': 2, // 不允许出现多余的空格
    'no-multi-str': 2, // 不允许用\来让字符串换行
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过两行
    'no-native-reassign': 2, // 不能重写native对象
    'no-negated-in-lhs': 2, // 不允许在in表达式语句中对最左边的运算数使用取反操作
    'no-nested-ternary': 2, // 不允许使用嵌套的三目运算符
    'no-new-func': 2, // 不允许使用new Function
    'no-new-object': 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止使用new require
    'no-new-wrappers': 2, // 不允许使用new String，Number和Boolean对象
    'no-new': 2, // 不允许new一个实例后不赋值或者不比较
    'no-obj-calls': 2, // 不允许把全局对象属性当做函数来调用
    'no-octal-escape': 2, // 不允许使用八进制转义序列
    'no-octal': 2, // 不允许使用八进制字面值
    'no-param-reassign': 2, // 不允许重新分配函数参数
    'no-path-concat': 0, // node中不能使用__dirname或__filename做路径拼接
    'no-plusplus': 0, // 不允许使用++ --运算符
    'no-process-env': 0, // 禁止使用process.env
    'no-process-exit': 0, // 禁止使用process.exit()
    'no-proto': 2, // 禁止使用__proto__属性
    'no-redeclare': 2, // 不允许变量重复声明
    'no-regex-spaces': 2, // 正则表达式中不允许出现多个连续空格
    'no-restricted-modules': 0, // 如果禁用了指定模块，使用就会报错
    'no-return-assign': 2, // 不允许在return语句中使用分配语句
    'no-script-url': 2, // 不允许使用javascript:void(0)
    'no-self-compare': 2, // 不允许自己和自己比较
    'no-sequences': 0, // 不允许使用逗号表达式
    'no-shadow-restricted-names': 2, // js关键字和保留字不能作为函数名或者变量名
    'no-shadow': 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2, // 禁止稀疏数组
    'no-sync': 0, // nodejs 禁止同步方法
    'no-ternary': 0, // 不允许使用三目运算符
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    'no-throw-literal': 2, // 不允许抛出字面量错误 throw "error"
    'no-trailing-spaces': 2, // 一行最后不允许有空格
    'no-undef-init': 2, // 不允许初始化变量时给变量赋值undefined
    'no-undef': 0, // 不允许未声明的变量
    'no-undefined': 0, // 不允许把undefined当做标识符使用
    'no-underscore-dangle': 0, // 不允许标识符以下划线开头
    'no-unexpected-multiline': 2, // 避免多行表达式
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套
    'no-unreachable': 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
    'no-unused-expressions': 0, // 不允许无用的表达式
    'no-use-before-define': [2, 'nofunc'], // 不允许在未定义之前就使用变量
    'no-useless-call': 2, // 禁止不必要的call和apply
    'no-var': 2, // 使用let和const代替var
    'no-void': 2, // 不允许void操作符
    'no-with': 2, // 不允许使用with语句
    'object-curly-spacing': [2, 'always'], // 对象文字的大括号内执行一致的间距，也包括解构赋值和导入/导出说明符
    'one-var': 0, // 强制变量声明放在一起
    'operator-assignment': 0, // 赋值运算符的风格
    'padded-blocks': [2, 'never'], // 块内行首行尾是否空行
    'prettier/prettier': 0, //
    'quote-props': 0, // 对象字面量中属性名加引号
    'semi-spacing': [2, { before: false, after: true }], // 分后前后空格
    'sort-vars': 0, // 变量声明时排序
    'space-before-blocks': [2, 'always'], // 块前的空格
    'use-isnan': 2, // 要求检查NaN的时候使用isNaN()
    'vars-on-top': 2, // var必须放在作用域顶部
    'vue/html-closing-bracket-spacing': 2, // 标签的右括号之前需要或不允许使用空格
    'vue/require-default-prop': 2, // prop需要添加默认值
    'vue/attribute-hyphenation': [
      //  此规则强制在 Vue 模板中的自定义组件上使用带连字符的属性名称。never:不要使用连字符的名称，除了那些被忽略的名称。
      'error',
      'never',
      {
        ignore: [],
      },
    ],
    'wrap-iife': [2, 'any'], // 立即执行表达式的括号风格
    'wrap-regex': 0, // 正则表达式字面量用括号括起来
    camelcase: [0, { properties: 'never' }], // 强制驼峰命名规则
    complexity: 2, // 限制条件语句的复杂度
    curly: [2, 'all'], // 强制使用花括号的风格
    eqeqeq: [2, 'smart'], // 比较的时候使用严格等于
    indent: [2, 2, { SwitchCase: 1 }], // 强制一致的缩进风格
    radix: 1, // 使用parseInt时强制使用基数来指定是十进制还是其他进制
    semi: [2, 'always'], // 强制语句分号结尾
    strict: [2, 'function'], // 使用严格模式
    yoda: [2, 'never', { exceptRange: true }], // 不允许在if条件中使用yoda条件
    'valid-jsdoc': 0, // 强制JSDoc注释
    'valid-typeof': [
      2,
      {
        requireStringLiterals: true,
      },
    ], // 在使用typeof表达式比较的时候强制使用有效的字符串
    'dot-notation': 2, // 获取对象属性的时候使用点号
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ], // 不允许标签语句
    'no-warning-comments': [
      2,
      {
        terms: ['fixme'],
      },
    ], // 不允许警告备注
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
      },
    ], // 不允许有声明后未使用的变量或者参数
    'brace-style': [
      0,
      '1tbs',
      {
        allowSingleLine: false,
      },
    ], // 大括号风格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ], // 对象字面量中冒号的前后空格
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ], // 构造函数名字首字母要大写
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ], // 引号风格
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
      },
    ], // 函数定义时括号前的空格
    'space-infix-ops': [
      2,
      {
        int32Hint: true,
      },
    ], // 操作符周围的空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ], // 一元运算符前后不要加空格
    '@typescript-eslint/dot-notation': 0, // 尽可能使用点符号样式来访问属性
    '@typescript-eslint/explicit-module-boundary-types': 0, // ts每个函数都要显式声明返回值
    '@typescript-eslint/no-explicit-any': 0, // 关闭any类型的警告
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-non-null-assertion': 0, // 使用!后缀运算符禁止非空断言
    '@typescript-eslint/no-var-requires': 0, // 除导入语句外，禁止使用require语句
    // 禁止在可选链表达式之后使用非null断言
    '@typescript-eslint/member-delimiter-style': [
      1,
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ], // 接口和类型文字需要特定的成员定界符样式
    '@typescript-eslint/no-extra-semi': 2, // 禁止不必要的分号
    '@typescript-eslint/return-await': 0, // 强制一致地返回等待的值
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-shadow': 2,
    //  vue
    'vue/no-v-html': 1, // 禁止使用v-html防止XSS攻击
    'vue/singleline-html-element-content-newline': 0, // 在单行元素的内容之前和之后需要换行
    'vue/html-self-closing': [
      0,
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
      },
    ], // 实施自闭合的风格
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: 3,
        multiline: 1,
      },
    ], // 强制每行的最大属性数
  },
};
