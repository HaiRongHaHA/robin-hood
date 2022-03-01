"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
async function activate(context) {
    const { onDidChangeActiveTextEditor, onDidChangeTextEditorSelection } = vscode_1.window;
    let text = "";
    // 获取选中的文本
    const selection = onDidChangeTextEditorSelection(({ kind, textEditor, selections }) => {
        const value = textEditor.document.getText(selections[0]);
        text = value;
        vscode_1.window.showInformationMessage(value);
    });
    // 获取当前打开的编辑器对象
    const edit = onDidChangeActiveTextEditor((textEditor) => {
        if (textEditor) {
            text = "";
        }
    });
    vscode_1.commands.registerCommand("vscode-transform-naming.toTransform", () => {
        let res = "";
        const isEn = /^[a-zA-Z_]+$/;
        vscode_1.window.showInformationMessage(text);
        if (!isEn.test(text)) {
            vscode_1.window.showInformationMessage("不是英文");
            return;
        }
        if ((0, utils_1.isDash)(text)) {
            vscode_1.window.showInformationMessage("转驼峰了");
            res = (0, utils_1.camelize)(text);
        }
        if ((0, utils_1.isHump)(text)) {
            vscode_1.window.showInformationMessage("转下划线了");
            res = (0, utils_1.dasherize)(text);
        }
        vscode_1.window.showInformationMessage(res);
    });
    context.subscriptions.push(selection);
    context.subscriptions.push(edit);
    // context.subscriptions.push(disposeHover);
}
exports.activate = activate;
function deactivate() {
    console.log("deactivate");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map