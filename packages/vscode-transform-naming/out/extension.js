"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const transform_1 = require("./transform");
async function activate(context) {
    const { activeTextEditor, onDidChangeActiveTextEditor, onDidChangeTextEditorSelection, } = vscode_1.window;
    let selectText = "";
    let activeEditor = activeTextEditor;
    // 获取选中的文本
    const selection = onDidChangeTextEditorSelection(({ kind, textEditor, selections }) => {
        const value = textEditor.document.getText(selections[0]);
        selectText = value;
    });
    // 获取当前打开的编辑器对象
    const edit = onDidChangeActiveTextEditor((textEditor) => {
        if (textEditor) {
            selectText = "";
            activeEditor = textEditor;
        }
    });
    // 注册转换命令
    vscode_1.commands.registerCommand("vscode-transform-naming.toTransform", () => {
        if (!activeEditor) {
            return;
        }
        (0, transform_1.default)(selectText, activeEditor);
    });
    context.subscriptions.push(selection);
    context.subscriptions.push(edit);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map