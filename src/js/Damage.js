class Damage {
  /**
   * constructor
   * @param {Number} attack - attack character
   * @param {Number} cells - attack character
   */
  constructor(attack, cells) {
    this._stoned = false;
    this.cells = cells;
    this._attack = attack;
  }

  /**
   * setter for stoned field
   * @param {Boolean} param - switch stoned
   */
  set stoned(param) {
    if (typeof param !== 'boolean') throw new TypeError('this param is not boolean type');
    this._stoned = param;
  }

  /**
   * getter for stoned field
   * @returns {*|boolean}
   */
  get stoned() {
    return this._stoned;
  }

  /**
   * setter for attack field
   * @param {Boolean} param - switch stoned
   */
  set attack(param) {
    if (param) {
      if (this.cells > 5) this._attack *= 0.6;
      if (this.stoned) this._attack -= Math.log2(this.cells) * 5;
    }
  }

  /**
   * getter for attack field
   * @returns {number}
   */
  get attack() {
    return Math.floor(this._attack);
  }
}

export default Damage;
