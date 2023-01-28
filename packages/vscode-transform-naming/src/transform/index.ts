import vscode from 'vscode'
import {
  isValid,
  isSmallHump,
  isUpperCaseDash,
  isLowerCase,
  isUpperCase,
  isLowerCaseDash,
  isLargeHump,
  isLowerCaseHyphen
} from './reg'
import {
  upperCaseDashToSmallHump,
  smallHumpToUpperCaseDash,
  lowerCaseDashToSmallHump,
  largeHumpToLowerCaseHyphen,
  lowerCaseHyphenToLargeHump
} from './trans'

export default function (
  selectText: string,
  activeEditor: vscode.TextEditor
) {
  let transText = ''

  // 不是英文不做处理
  if (!isValid.test(selectText)) {
    return
  }

  // 大写下划线——>小驼峰
  if (isUpperCaseDash.test(selectText)) {
    transText = upperCaseDashToSmallHump(selectText)
  }

  // 小驼峰——>大写下划线
  if (isSmallHump.test(selectText)) {
    transText = smallHumpToUpperCaseDash(selectText)
  }

  // 全小写——>全大写
  if (isLowerCase.test(selectText)) {
    transText = selectText.toUpperCase()
  }

  // 全大写——>全小写
  if (isUpperCase.test(selectText)) {
    transText = selectText.toLowerCase()
  }

  // 全小写_分割——>小驼峰
  if (isLowerCaseDash.test(selectText)) {
    transText = lowerCaseDashToSmallHump(selectText)
  }

  // 大驼峰——>全小写-分割
  if (isLargeHump.test(selectText)) {
    transText = largeHumpToLowerCaseHyphen(selectText)
  }

  // 全小写-分割——>大驼峰
  if (isLowerCaseHyphen.test(selectText)) {
    transText = lowerCaseHyphenToLargeHump(selectText)
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
