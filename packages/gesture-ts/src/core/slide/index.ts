interface ISlideOptions {
  el: HTMLElement;
  judgedDistance: number;
  destroy(): void;
}

export class Slide implements ISlideOptions {
  protected startY: number;
  protected startX: number;
  // protected moveSpaceX: number;
  // protected moveSpaceY: number;
  protected endX: number;
  protected endY: number;
  el: HTMLElement;

  constructor (el: HTMLElement, judgedDistance:number = 0) {
    this.el = el
    this.judgedDistance = judgedDistance

    this.startX = 0
    this.startY = 0
    // this.moveSpaceX = 0
    // this.moveSpaceY = 0
    this.endX = 0
    this.endY = 0

    this.init()
  }

  judgedDistance: number;

  private init () {
    this.el.addEventListener('touchstart', this.touchstart.bind(this))
    this.el.addEventListener('touchmove', this.touchmove.bind(this))
  }

  private touchstart (e: TouchEvent) {
    e.preventDefault()
    const { x, y } = Slide.getTouchesPosition(e)
    this.startX = x
    this.startY = y
  }

  private touchmove (e: TouchEvent) {
    e.preventDefault()
    const { x, y } = Slide.getTouchesPosition(e)
    // const moveSpaceX = x - this.startX
    // const moveSpaceY = y - this.startY
    const direction = Slide.getSlideDirection(this.startX, this.startY, x, y)
    switch (direction) {
      case 0:

        // alert('没滑动')

        break

      case 1:

        alert('向上')

        break

      case 2:

        alert('向下')

        break

      case 3:

        alert('向左')

        break

      case 4:

        alert('向右')

        break

      default:
    }
    // this.direction(moveSpaceX, moveSpaceY)
  }

  private direction (x: number, y: number) {
    if (Math.abs(x) > Math.abs(y) && x > this.judgedDistance) {
      alert('右滑')
    } else if (Math.abs(x) > Math.abs(y) && x < this.judgedDistance) {
      alert('左滑')
    } else if (Math.abs(y) > Math.abs(x) && y > this.judgedDistance) {
      alert('下滑')
    } else if (Math.abs(y) > Math.abs(x) && y < this.judgedDistance) {
      alert('上滑')
    } else {
      alert('just touch')
    }
  }

  static getTouchesPosition (e: TouchEvent) {
    const touches = e.changedTouches[0]
    return {
      x: touches.pageX,
      y: touches.pageY
    }
  }

  // 角度
  static getSlideAngle (x: number, y: number) {
    return Math.atan2(x, y) * 180 / Math.PI
  }
  // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动

  static getSlideDirection (startX: number, startY: number, endX: number, endY: number) {
    const dy = startY - endY

    const dx = endX - startX

    let result = 0

    // 如果滑动距离太短

    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result
    }

    const angle = Slide.getSlideAngle(dx, dy)

    if (angle >= -45 && angle < 45) {
      result = 4
    } else if (angle >= 45 && angle < 135) {
      result = 1
    } else if (angle >= -135 && angle < -45) {
      result = 2
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3
    }

    return result
  }

  destroy () {
    this.el.removeEventListener('touchstart', this.touchstart.bind(this))
    this.el.removeEventListener('touchmove', this.touchmove.bind(this))
  }
}
