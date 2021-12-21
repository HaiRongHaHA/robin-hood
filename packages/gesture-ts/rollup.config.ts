import resolve from 'rollup-plugin-node-resolve' // 解析 node_modules 中的模块
import commonjs from 'rollup-plugin-commonjs' // 将 CommonJS 转换成 ES2015 模块
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2' // 编译ts文件
import json from 'rollup-plugin-json' // 从json文件中导入数据
import alias from 'rollup-plugin-alias' // 提供modules名称的 alias 和reslove 功能

const aliases = require('./build/alias')

const pkg = require('./package.json')

const globalName = 'gesture'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: camelCase(globalName), // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.XX=...
      format: 'umd',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],

  // 声明它的外部依赖，可以不被打包进去。
  external: ['lodash.camelcase'],

  // 监听文件的变化，重新编译，只有在编译的时候开启 --watch 才生效。
  watch: {
    include: 'src/**'
  },
  plugins: [
    json(),
    typescript({
      useTsconfigDeclarationDir: true // 使用 tsconfig.json 文件中定义的 declarationDir
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
    alias({
      resolve: ['.js'],
      entries: Object.assign({}, aliases)
    })
  ]
}
