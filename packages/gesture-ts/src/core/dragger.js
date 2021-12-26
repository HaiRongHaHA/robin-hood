const DEFAULT_POSITION = {
  hasMoved: false, // 是否移动了（排除了点击事件）
  x: 0, // right
  y: 0, // bottom
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0
}
class Dragger {
  constructor (el, position) {
    this.position = {
      ...DEFAULT_POSITION,
      ...position
    }
    this.el = el
    this._setPosition(this.position.x, this.position.y)
    this._bindEvent()
  }

  /**
   * @description el注册移动事件
   */
  _bindEvent () {
    this.el.addEventListener('touchstart', this._touchstart.bind(this))
    this.el.addEventListener('touchend', this._touchend.bind(this))
    this.el.addEventListener('touchmove', this._touchmove.bind(this))
  }

  _touchstart (e) {
    this.position.startX = e.touches[0].pageX
    this.position.startY = e.touches[0].pageY
    this.position.hasMoved = false
  }

  _touchend () {
    if (!this.position.hasMoved) {
      return
    }
    this.position.startX = 0
    this.position.startY = 0
    this.position.hasMoved = false
    this._setPosition(this.position.endX, this.position.endY)
  }

  _touchmove (e) {
    if (e.touches.length <= 0) {
      return
    }
    const offsetX = e.touches[0].pageX - this.position.startX
    const offsetY = e.touches[0].pageY - this.position.startY
    let x = Math.floor(this.position.x - offsetX)
    let y = Math.floor(this.position.y - offsetY);
    [x, y] = this._getElSafeAreaXY(x, y)
    this.el.style.right = x + 'px'
    this.el.style.bottom = y + 'px'
    this.position.endX = x
    this.position.endY = y
    this.position.hasMoved = true
    e.preventDefault()
  }

  /**
   * @description 计算元素安全区位置
   * @param {number} x
   * @param {number} y
   * @returns {Array} x&y位置
   */
  _getElSafeAreaXY (x, y) {
    const docWidth = Math.max(
      document.documentElement.offsetWidth,
      window.innerWidth
    )
    const docHeight = Math.max(
      document.documentElement.offsetHeight,
      window.innerHeight
    )
    // 检查边
    if (x + this.el.offsetWidth > docWidth) {
      x = docWidth - this.el.offsetWidth
    }
    if (y + this.el.offsetHeight > docHeight) {
      y = docHeight - this.el.offsetHeight
    }
    // 到顶部了
    if (x < 0) {
      x = 0
    }
    // 到底部了
    if (y < 20) {
      y = 0
    }
    return [x, y]
  }

  /**
   * @description 设置元素位置
   * @param {number} x
   * @param {number} y
   */
  _setPosition (x, y) {
    [x, y] = this._getElSafeAreaXY(x, y)
    this.position.x = x
    this.position.y = y
    this.el.style.right = x + 'px'
    this.el.style.bottom = y + 'px'
  }

  /**
   * @description 销毁
   */
  destroy () {
    this.el.removeEventListener('touchstart', this._touchstart.bind(this))
    this.el.removeEventListener('touchend', this._touchend.bind(this))
    this.el.removeEventListener('touchmove', this._touchmove.bind(this))
  }
}

export default Dragger
