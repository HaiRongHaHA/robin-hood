"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
async function activate(context) {
    const { activeTextEditor, onDidChangeActiveTextEditor, onDidChangeTextEditorSelection } = vscode_1.window;
    let text = "";
    let active = activeTextEditor;
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
            active = textEditor;
        }
    });
    vscode_1.commands.registerCommand("vscode-transform-naming.toTransform", () => {
        let res = "";
        const isEn = /^[a-zA-Z_]+$/;
        if (!isEn.test(text)) {
            return;
        }
        if ((0, utils_1.isDash)(text)) {
            res = (0, utils_1.camelize)(text);
        }
        if ((0, utils_1.isHump)(text)) {
            res = (0, utils_1.dasherize)(text);
        }
        if (!res) {
            return;
        }
        ;
        if (!active) {
            return;
        }
        ;
        // 替换选中文本
        let selectedItem = active.selection;
        active.edit(editBuilder => {
            editBuilder.replace(selectedItem, res);
        });
    });
    context.subscriptions.push(selection);
    context.subscriptions.push(edit);
}
exports.activate = activate;
function deactivate() {
    console.log("deactivate");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map