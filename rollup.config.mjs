import { defineConfig } from 'rollup';
import terser from "@rollup/plugin-terser"
import { nodeResolve } from '@rollup/plugin-node-resolve'; //rollup默认只能是绝对路径，可处理相对路径，省略引入文件的后缀名称(可省略的名称需要配置)
import commonjs from '@rollup/plugin-commonjs'; //rollup默认只支持 ES6+的模块方式，使支持引用commonjs的包
import externals from "rollup-plugin-node-externals"; //自动将 dependencies 依赖声明为 externals
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import dts from "rollup-plugin-dts";
export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: './lib/cjs/index.js',
        format: 'cjs',
      },
      // {
      //   dir: './lib/esm',
      //   format: 'es',
      //   // 只编译、不打包，按需引入
      //   preserveModules: true,
      // },
      {
        file: './lib/esm/index.js',
        format: 'es',
      },
      {
        file: './lib/umd/index.min.js',
        format: 'umd',
        name: 'myLib',
        exports: 'named',
        globals: {
          "@babel/runtime-corejs3/helpers/asyncToGenerator": "@babel/runtime-corejs3/helpers/asyncToGenerator",
          "@babel/runtime-corejs3/helpers/regeneratorRuntime": "@babel/runtime-corejs3/helpers/regeneratorRuntime"
        },
      },

    ],

    plugins: [
      commonjs({
        include: /node_modules/
      }),
      //要在nodeResolve之前
      externals({}),
      nodeResolve({
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs', '.json', '.node']
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        include: 'src/**',
        extensions: [".ts", ".js"],
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/typings/index.d.ts",
        format: "es"
      }
    ],
    plugins: [dts()],
  },
])


