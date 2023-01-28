"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCaseHyphenToLargeHump = exports.largeHumpToLowerCaseHyphen = exports.lowerCaseDashToSmallHump = exports.smallHumpToUpperCaseDash = exports.upperCaseDashToSmallHump = void 0;
/**
 * @description 大写下划线转小驼峰
 */
const upperCaseDashToSmallHump = (str) => {
    return str
        .replace(/([A-Z])/g, (match, matchWord) => matchWord.toLowerCase())
        .replace(/[-_\s]+(.)?/g, (match, matchWord) => matchWord.toUpperCase());
};
exports.upperCaseDashToSmallHump = upperCaseDashToSmallHump;
/**
 * @description 小驼峰转大写下划线
 */
const smallHumpToUpperCaseDash = (str) => {
    return str
        .replace(/([A-Z])/g, '-$1')
        .replace(/[-_\s]+/g, '_')
        .toUpperCase();
};
exports.smallHumpToUpperCaseDash = smallHumpToUpperCaseDash;
/**
 * @description 小写下划线转小驼峰
 */
const lowerCaseDashToSmallHump = (str) => {
    return str
        .replace(/([a-z])/g, (match, matchWord) => matchWord.toLowerCase())
        .replace(/[-_\s]+(.)?/g, (match, matchWord) => matchWord.toUpperCase());
};
exports.lowerCaseDashToSmallHump = lowerCaseDashToSmallHump;
/**
 * @description 大驼峰转全小写-分割
 */
const largeHumpToLowerCaseHyphen = (str) => {
    return str
        .replace(/([A-Z])/g, '-$1')
        .replace(/[-_\s]+/g, '-')
        .toLowerCase()
        .replace(/^./, '');
};
exports.largeHumpToLowerCaseHyphen = largeHumpToLowerCaseHyphen;
/**
 * @description 全小写-分割转大驼峰
 */
const lowerCaseHyphenToLargeHump = (str) => {
    return str
        .replace(/[-_\s]+(.)?/g, (match, matchWord) => matchWord.toUpperCase())
        .replace(/^./, match => match.toUpperCase());
};
exports.lowerCaseHyphenToLargeHump = lowerCaseHyphenToLargeHump;
//# sourceMappingURL=trans.js.map