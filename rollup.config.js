import { defineConfig } from 'rollup';
import livereload from "rollup-plugin-livereload"
import terser from "@rollup/plugin-terser"
import ts from "rollup-plugin-typescript2"
import resolve from '@rollup/plugin-node-resolve'; //rollup默认只能是相对路径，处理绝对路径
import commonjs from '@rollup/plugin-commonjs'; //三方库没有默认default
import externals from "rollup-plugin-node-externals";
export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: './lib/cjs/index.js',
      format: 'cjs'
    },
    {
      file: './lib/esm/index.js',
      format: 'es',
    },
    {
      file: './lib/umd/index.js',
      format: 'umd',
      name: 'lib',

    },
  ],
  plugins: [
    commonjs({
      include: /node_modules/
    }),
    resolve(),
    ts(),
    livereload(),
    terser({
      compress: {
        drop_console: false,
        drop_debugger: false
      }
    }),
    externals({ devDeps: false }),// devDependencies类型的依赖就不用加到 externals 了。
  ]
});