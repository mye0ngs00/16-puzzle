import Position from './Position'

class Block {
  constructor(id) {
    this.element = document.getElementById(id)
    this.position = new Position(0, 0)
    this.width = 100
    this.height = 100

    const targetRect = this.element.getBoundingClientRect()
  }

  getElement() { return this.element }
  getPosX() { return this.position.posX }
  getPosY() { return this.position.posY }
  getBottomLeft() { return new Position(this.position.posX, this.position.posY + this.height) }
  getBottomRight() { return new Position(this.position.posX + this.width, this.position.posY + this.height) }
  getTopLeft() { return new Position(this.position.posX, this.position.posY) }
  getTopRight() { return new Position(this.position.posX + this.width, this.position.posY) }
}

export default Block
