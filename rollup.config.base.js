import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

/** 定义rollup基础配置
 * @param {Object} params - 配置参数
 * @param {string} [params.declarationDir] - 类型声明文件输出目录
 * @param {import('rollup').RollupOptions} params - Rollup配置选项
 * @returns {import('rollup').RollupOptions} Rollup配置对象
 */
export function defineRollupOption(params) {
  const { declarationDir, output, ...rest } = params;
  const baseConfig = {
    input: 'src/index.ts',
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        ...(declarationDir
          ? { declaration: true, declarationDir: `dist/${declarationDir}` }
          : {}),
      }),
    ],
    ...rest,
    output: (output || []).map((item) => {
      return {
        /** dir 输出时, 保留原始目录结构 */
        ...(item.dir
          ? { preserveModules: true, preserveModulesRoot: 'src' }
          : {}),
        ...item,
      };
    }),
  };

  return baseConfig;
}
