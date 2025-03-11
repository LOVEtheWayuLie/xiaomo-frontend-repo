import { defineRollupOption } from '../../rollup.config.base.js';
import { defineConfig } from 'rollup';

export default defineConfig([
  defineRollupOption({
    declarationDir: 'es',
    output: [
      {
        dir: 'dist/es',
        format: 'es',
      },
    ],
  }),
  defineRollupOption({
    declarationDir: 'lib',
    output: [
      {
        dir: 'dist/lib',
        format: 'cjs',
      },
    ],
  }),
]);
