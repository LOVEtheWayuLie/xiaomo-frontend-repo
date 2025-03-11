import type { ESLint } from 'eslint';
import { rules } from './rules';

export default {
  rules,
  configs: {
    recommended: {},
  },
} as ESLint.Plugin;
