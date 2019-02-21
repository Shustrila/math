import Damage from './Damage';

class Magician extends Damage {
  /**
   * constructor
   * @param {Object} obj - attack, cells, name, level, defence
   */
  constructor(obj) {
    super(obj.attack, obj.cells);
    this.name = obj.name;
    this.type = 'Magician';
    this.level = obj.level;
    this.defence = obj.defence;
  }
}

export default Magician;
