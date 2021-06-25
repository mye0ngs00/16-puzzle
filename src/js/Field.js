import './feature/Block'
import UnusableBlock from './feature/UnusableBlock'

class Field {
  constructor(id) {
    this.field = new UnusableBlock(id)
    this.wall = [field, new UnusableBlock(), new UnusableBlock(), new UnusableBlock()]
    this.map = [
      [new BlankBlock(), wall[1], wall[2], wall[3]],
      [new UsableBlock(), new UsableBlock(), new UsableBlock(), new UsableBlock()],
      [new UsableBlock(), new UsableBlock(), new UsableBlock(), new UsableBlock()],
      [new UsableBlock(), new UsableBlock(), new UsableBlock(), new UsableBlock()],
      [new UsableBlock(), new UsableBlock(), new UsableBlock(), new UsableBlock()],
    ]
  }
  getMap() { return this.map }
  swap(a, b) {}
  getNearestBlock() {}
  drawById(id) {}
}

export default Field