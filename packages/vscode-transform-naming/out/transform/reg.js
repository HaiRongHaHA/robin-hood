"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLowerCaseHyphen = exports.isLowerCaseDash = exports.isUpperCaseDash = exports.isLargeHump = exports.isSmallHump = exports.isUpperCase = exports.isLowerCase = exports.isValid = void 0;
// 是否是有效的变量名 英文_-
exports.isValid = /^[a-zA-Z_-]+$/;
// 全为小写
exports.isLowerCase = /^[a-z]+$/;
// 全为大写
exports.isUpperCase = /^[A-Z]+$/;
// 是否是小驼峰
exports.isSmallHump = /^[a-z]+([A-Z]{1}[a-z]+)+$/;
// 是否是大驼峰
exports.isLargeHump = /^[A-Z]{1}[a-z]+([A-Z]{1}[a-z]+)+$/;
// 是否是大写下划线
exports.isUpperCaseDash = /^[A-Z]+(_{1}[A-Z]+)+$/;
// 是否是小写_分割
exports.isLowerCaseDash = /^[a-z]+(_{1}[a-z]+)+$/;
// 是否是小写-分割
exports.isLowerCaseHyphen = /^[a-z]+(-{1}[a-z]+)+$/;
//# sourceMappingURL=reg.js.map