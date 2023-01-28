"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reg_1 = require("./reg");
const trans_1 = require("./trans");
function default_1(selectText, activeEditor) {
    let transText = '';
    // 不是英文不做处理
    if (!reg_1.isValid.test(selectText)) {
        return;
    }
    // 大写下划线——>小驼峰
    if (reg_1.isUpperCaseDash.test(selectText)) {
        transText = (0, trans_1.upperCaseDashToSmallHump)(selectText);
    }
    // 小驼峰——>大写下划线
    if (reg_1.isSmallHump.test(selectText)) {
        transText = (0, trans_1.smallHumpToUpperCaseDash)(selectText);
    }
    // 全小写——>全大写
    if (reg_1.isLowerCase.test(selectText)) {
        transText = selectText.toUpperCase();
    }
    // 全大写——>全小写
    if (reg_1.isUpperCase.test(selectText)) {
        transText = selectText.toLowerCase();
    }
    // 全小写_分割——>小驼峰
    if (reg_1.isLowerCaseDash.test(selectText)) {
        transText = (0, trans_1.lowerCaseDashToSmallHump)(selectText);
    }
    // 大驼峰——>全小写-分割
    if (reg_1.isLargeHump.test(selectText)) {
        transText = (0, trans_1.largeHumpToLowerCaseHyphen)(selectText);
    }
    // 全小写-分割——>大驼峰
    if (reg_1.isLowerCaseHyphen.test(selectText)) {
        transText = (0, trans_1.lowerCaseHyphenToLargeHump)(selectText);
    }
    if (!transText) {
        return;
    }
    if (!activeEditor) {
        return;
    }
    // 替换选中文本
    let selectedItem = activeEditor.selection;
    activeEditor.edit(editBuilder => {
        editBuilder.replace(selectedItem, transText);
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map