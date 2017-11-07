import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/CPlayer.vue',
  name: 'CPlayer',
  plugins: [
    resolve(),
    commonjs(),
    vue({
      compileTemplate: true,
    }),
    buble(),
  ],
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.browser,
      format: 'umd',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
};
