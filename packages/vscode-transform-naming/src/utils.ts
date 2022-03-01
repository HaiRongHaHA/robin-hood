/**
 * @description 大写下划线转驼峰
 * @param {*} str
 * @returns
 */
export function camelize(str: string) {
  return str
    .replace(/([A-Z])/g, (match, matchWord) => matchWord.toLowerCase())
    .replace(/[-_\s]+(.)?/g, (match, matchWord) => matchWord.toUpperCase());
}

/**
 * @description 驼峰转大写下划线
 * @param {*} str
 * @returns
 */
export function dasherize(str: string) {
  return str
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "_")
    .toUpperCase();
}
console.log(dasherize("MozTransform"));

/**
 * @description 是否是驼峰
 * @param {*} str
 * @returns
 */
export function isHump(str: string) {
  return /^[a-z]+([A-Z]{1}[a-z]+)+$/.test(str);
}

/**
 * @description 是否是大写下划线
 * @param {*} str
 * @returns
 */
export function isDash(str: string) {
  return /^[A-Z]+(_{1}[A-Z]+)+$/.test(str);
}
