class Position {
  constructor(x = -1, y = -1) {
    this.posX = x
    this.posY = y
  }

  getPosX() { return this.posX }
  getPosY() { return this.posY }
  setPosX(x) { this.posX = x }
  setPosY(y) { this.posY = y}
}

export default Position
