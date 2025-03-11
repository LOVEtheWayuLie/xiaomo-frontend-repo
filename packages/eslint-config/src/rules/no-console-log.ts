import type { Rule } from 'eslint';

/** 自定义eslint规则 */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow console.log statements',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [], // 没有选项
    messages: {
      noConsoleLog:
        'console.log statements are not allowed. Use a logger instead.',
    },
  },
  create: function (context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.object.name === 'console' &&
          node.callee.property.type === 'Identifier' &&
          node.callee.property.name === 'log'
        ) {
          context.report({
            node,
            messageId: 'noConsoleLog',
          });
        }
      },
    };
  },
} as Rule.RuleModule;
