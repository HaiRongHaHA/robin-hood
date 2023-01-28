import vscode, { window, commands } from 'vscode'
import transform from './transform'

export async function activate(context: vscode.ExtensionContext) {
  const {
    activeTextEditor,
    onDidChangeActiveTextEditor,
    onDidChangeTextEditorSelection
  } = window

  let selectText = ''
  let activeEditor = activeTextEditor

  // 获取选中的文本
  const selection = onDidChangeTextEditorSelection(
    ({ kind, textEditor, selections }) => {
      const value = textEditor.document.getText(selections[0])
      selectText = value
    }
  )

  // 获取当前打开的编辑器对象
  const edit = onDidChangeActiveTextEditor(textEditor => {
    if (textEditor) {
      selectText = ''
      activeEditor = textEditor
    }
  })

  // 注册转换命令
  commands.registerCommand(
    'vscode-transform-naming.toTransform',
    args => {
      if (!activeEditor) {
        return
      }
      transform(selectText, activeEditor)
    }
  )

  context.subscriptions.push(selection)
  context.subscriptions.push(edit)
}

export function deactivate() {}
