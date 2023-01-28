/**
 * @description 大写下划线转小驼峰
 */
export const upperCaseDashToSmallHump = (str: string) => {
  return str
    .replace(/([A-Z])/g, (match, matchWord) => matchWord.toLowerCase())
    .replace(/[-_\s]+(.)?/g, (match, matchWord) =>
      matchWord.toUpperCase()
    )
}

/**
 * @description 小驼峰转大写下划线
 */
export const smallHumpToUpperCaseDash = (str: string) => {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '_')
    .toUpperCase()
}

/**
 * @description 小写下划线转小驼峰
 */
export const lowerCaseDashToSmallHump = (str: string) => {
  return str
    .replace(/([a-z])/g, (match, matchWord) => matchWord.toLowerCase())
    .replace(/[-_\s]+(.)?/g, (match, matchWord) =>
      matchWord.toUpperCase()
    )
}

/**
 * @description 大驼峰转全小写-分割
 */
export const largeHumpToLowerCaseHyphen = (str: string) => {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase()
    .replace(/^./, '')
}

/**
 * @description 全小写-分割转大驼峰
 */
export const lowerCaseHyphenToLargeHump = (str: string) => {
  return str
    .replace(/[-_\s]+(.)?/g, (match, matchWord) =>
      matchWord.toUpperCase()
    )
    .replace(/^./, match => match.toUpperCase())
}
