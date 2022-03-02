import vscode, { window, commands } from "vscode";
import { isDash, isHump, camelize, dasherize } from "./utils";

export async function activate(context: vscode.ExtensionContext) {
  const { 
    activeTextEditor, 
    onDidChangeActiveTextEditor, 
    onDidChangeTextEditorSelection 
  } = window;

  let text = "";
  let active = activeTextEditor;

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
      active = textEditor;
    }
  });

  commands.registerCommand("vscode-transform-naming.toTransform", () => {
    let res = "";

    const isEn = /^[a-zA-Z_]+$/;
    if (!isEn.test(text)) {
      return;
    }
    if (isDash(text)) {
      res = camelize(text);
    }

    if (isHump(text)) {
      res = dasherize(text);
    }

    if(!res) {
      return;
    };

    if(!active) {
      return;
    };

    // 替换选中文本
    let selectedItem = active.selection;
    active.edit(editBuilder => {
      editBuilder.replace(selectedItem, res);
    });

  });

  context.subscriptions.push(selection);
  context.subscriptions.push(edit);
}

export function deactivate() {
  console.log("deactivate");
}
