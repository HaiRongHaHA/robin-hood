"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDash = exports.isHump = exports.dasherize = exports.camelize = void 0;
/**
 * @description 大写下划线转驼峰
 * @param {*} str
 * @returns
 */
function camelize(str) {
    return str
        .replace(/([A-Z])/g, (match, matchWord) => matchWord.toLowerCase())
        .replace(/[-_\s]+(.)?/g, (match, matchWord) => matchWord.toUpperCase());
}
exports.camelize = camelize;
/**
 * @description 驼峰转大写下划线
 * @param {*} str
 * @returns
 */
function dasherize(str) {
    return str
        .replace(/([A-Z])/g, "-$1")
        .replace(/[-_\s]+/g, "_")
        .toUpperCase();
}
exports.dasherize = dasherize;
/**
 * @description 是否是驼峰
 * @param {*} str
 * @returns
 */
function isHump(str) {
    return /^[a-z]+([A-Z]{1}[a-z]+)+$/.test(str);
}
exports.isHump = isHump;
/**
 * @description 是否是大写下划线
 * @param {*} str
 * @returns
 */
function isDash(str) {
    return /^[A-Z]+(_{1}[A-Z]+)+$/.test(str);
}
exports.isDash = isDash;
//# sourceMappingURL=index.js.map