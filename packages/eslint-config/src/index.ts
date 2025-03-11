/** 推荐的extends */
export default {
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    /** 允许封号结尾 */
    semi: 0,
    /** 允许return void */
    'no-useless-return': 0,
    /** 禁止未使用的变量 */
    'no-unused-vars': [
      1,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    /** 变量定义后空一行 */
    'newline-after-var': 2,
    /** 注释前后至少一个空格 */
    'spaced-comment': ['warn', 'always', { block: { balanced: true } }],
    /** 类成员之间至少一个空行 */
    'lines-between-class-members': ['error', 'always'],
    /** 允许空interface类型定义,方便扩展 */
    '@typescript-eslint/no-empty-interface': 0,
    /** 强制import 必须区分import type, 同时允许types.d 文件中使用import('')语法导入 */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],
    /** 允许使用namespace */
    '@typescript-eslint/no-namespace': 0,
    /** 禁止使用未定义的变量, class, function 除外 */
    '@typescript-eslint/no-shadow': 2,
    /** 禁止在定义前使用变量, class, function 除外 */
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, ignoreTypeReferences: true },
    ],
  },
};
