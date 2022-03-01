import vscode, { window, commands } from "vscode";
import { isDash, isHump, camelize, dasherize } from "./utils";



export async function activate(context: vscode.ExtensionContext) {
  const { onDidChangeActiveTextEditor, onDidChangeTextEditorSelection } =
    window;

  let text = "";

  // 获取选中的文本
  const selection = onDidChangeTextEditorSelection(
    ({ kind, textEditor, selections }) => {
      const value = textEditor.document.getText(selections[0]);
      text = value;
      window.showInformationMessage(value);
    }
  );

  // 获取当前打开的编辑器对象
  const edit = onDidChangeActiveTextEditor((textEditor) => {
    if (textEditor) {
      text = "";
    }
  });

  commands.registerCommand("vscode-transform-naming.toTransform", () => {
    let res = "";
    const isEn = /^[a-zA-Z_]+$/;
    window.showInformationMessage(text);
    if (!isEn.test(text)) {
      window.showInformationMessage("不是英文");
      return;
    }
    if (isDash(text)) {
      window.showInformationMessage("转驼峰了");
      res = camelize(text);
    }

    if (isHump(text)) {
      window.showInformationMessage("转下划线了");
      res = dasherize(text);
    }

    window.showInformationMessage(res);
  });

  context.subscriptions.push(selection);
  context.subscriptions.push(edit);
  // context.subscriptions.push(disposeHover);
}

export function deactivate() {
  console.log("deactivate");
}
