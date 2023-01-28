// 是否是有效的变量名 英文_-
export const isValid = /^[a-zA-Z_-]+$/

// 全为小写
export const isLowerCase = /^[a-z]+$/

// 全为大写
export const isUpperCase = /^[A-Z]+$/

// 是否是小驼峰
export const isSmallHump = /^[a-z]+([A-Z]{1}[a-z]+)+$/

// 是否是大驼峰
export const isLargeHump = /^[A-Z]{1}[a-z]+([A-Z]{1}[a-z]+)+$/

// 是否是大写下划线
export const isUpperCaseDash = /^[A-Z]+(_{1}[A-Z]+)+$/

// 是否是小写_分割
export const isLowerCaseDash = /^[a-z]+(_{1}[a-z]+)+$/

// 是否是小写-分割
export const isLowerCaseHyphen = /^[a-z]+(-{1}[a-z]+)+$/
