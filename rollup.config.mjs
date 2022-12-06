import { defineConfig } from 'rollup';
import terser from "@rollup/plugin-terser"
import { nodeResolve } from '@rollup/plugin-node-resolve'; //rollup默认只能是绝对路径，可处理相对路径，省略引入文件的后缀名称(可省略的名称需要配置)
import commonjs from '@rollup/plugin-commonjs'; //第三方库没有默认default,CommonJS 转为 ES6
import externals from "rollup-plugin-node-externals";
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
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
      globals: {
        "@babel/runtime-corejs3/helpers/asyncToGenerator": "@babel/runtime-corejs3/helpers/asyncToGenerator",
        "@babel/runtime-corejs3/regenerator": '@babel/runtime-corejs3/regenerator'
      },
    },
  ],
  plugins: [
    commonjs({
      include: /node_modules/
    }),
    nodeResolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs', '.json', '.node']
    }),
    externals({}),
    json(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      include: 'src/**',
      extensions: [".ts", ".js"],
    }),
    terser({
      compress: {
        drop_console: false,
        drop_debugger: false
      }
    }),
  ],
})