module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  rules: {
    /** 允许空文件 */
    'no-empty-source': null,
    /** 0允许加单位 */
    'length-zero-no-unit': null,
    /** 属性顺序 */
    'order/properties-order': [],
    /** 允许css module伪类 */
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
};
