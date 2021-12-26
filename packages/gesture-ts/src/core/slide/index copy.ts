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
    const moveSpaceX = x - this.startX
    const moveSpaceY = y - this.startY
    this.direction(moveSpaceX, moveSpaceY)
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

  destroy () {
    this.el.removeEventListener('touchstart', this.touchstart.bind(this))
    this.el.removeEventListener('touchmove', this.touchmove.bind(this))
  }
}
