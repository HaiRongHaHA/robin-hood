import vscode from 'vscode'

/**
 * @description 大写下划线转驼峰
 * @param {*} str
 * @returns
 */
function camelize(str: string) {
  return str
    .replace(/([A-Z])/g, (match, matchWord) => matchWord.toLowerCase())
    .replace(/[-_\s]+(.)?/g, (match, matchWord) =>
      matchWord.toUpperCase()
    )
}

/**
 * @description 驼峰转大写下划线
 * @param {*} str
 * @returns
 */
function dasherize(str: string) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '_')
    .toUpperCase()
}

/**
 * @description 是否是驼峰
 * @param {*} str
 * @returns
 */
function isHump(str: string) {
  return /^[a-z]+([A-Z]{1}[a-z]+)+$/.test(str)
}

/**
 * @description 是否是大写下划线
 * @param {*} str
 * @returns
 */
function isDash(str: string) {
  return /^[A-Z]+(_{1}[A-Z]+)+$/.test(str)
}

/**
 * @description 转换
 * @param selectText
 * @param activeEditor
 * @returns
 */
export default function (
  selectText: string,
  activeEditor: vscode.TextEditor
) {
  let transText = ''

  const isEn = /^[a-zA-Z_]+$/
  if (!isEn.test(selectText)) {
    return
  }
  if (isDash(selectText)) {
    transText = camelize(selectText)
  }

  if (isHump(selectText)) {
    transText = dasherize(selectText)
  }

  if (!transText) {
    return
  }

  if (!activeEditor) {
    return
  }

  // 替换选中文本
  let selectedItem = activeEditor.selection
  activeEditor.edit(editBuilder => {
    editBuilder.replace(selectedItem, transText)
  })
}
