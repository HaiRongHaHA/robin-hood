/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  // 测试环境，默认是 node ，我们可以改为 jsdom ，不然访问不到例如 window 对象。
  // 表示它是一个类浏览器的测试环境，我们可以使用浏览器环境中的一些 API。
  testEnvironment: 'jsdom',
  // 需求跑测试的文件，此处表__tests__下的.test.ts 和 .spec.ts 文件
  testRegex: '/__tests__/.*\\.(test|spec)\\.(ts)$',
  collectCoverage: true,
  coverageThreshold: {
    // 测试覆盖率的阈值设定
    global: {
      branches: 90, // 全局代码分支覆盖率
      functions: 95, // 方法覆盖率
      lines: 95, // 代码行数覆盖率
      statements: 95 // 声明覆盖率
    }
  },
  // 收集指定文件的测试覆盖率(即使你没为这些文件编写测试)，它的值为 glob patterns 类型。
  // 表示收集 src 目录以及它的所有子目录中的 js 和 ts 文件的测试覆盖率。
  collectCoverageFrom: ['src/**/!(*.d).{js,ts}']
}
