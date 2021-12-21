const path = require('path')
const tsconfig = require('../tsconfig.json')

const { baseUrl, paths } = tsconfig.compilerOptions

const resolve = p => path.resolve(__dirname, '../', p)

const alias = Object.keys(paths).reduce((aliases, aliasName) => {
  const _aliasName = aliasName.replace('/*', '')
  aliases[_aliasName] = resolve(`${baseUrl}/${paths[aliasName][0].replace('/*', '')}`)
  return aliases
}, {})

module.exports = alias
