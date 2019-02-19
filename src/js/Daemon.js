import Damage from './Damage';

class Daemon extends Damage {
  /***
   * constructor
   * @param {Object} obj - attack, cells, name, level, defence
   */
  constructor(obj) {
    super(obj.attack, obj.cells);
    this.name = obj.name;
    this.type = 'Daemon';
    this.level = obj.level;
    this.defence = obj.defence;
  }
}

export default Daemon;
