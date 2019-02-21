import Damage from '../src/js/Damage';

describe('TEST: Damage', () => {
  test('creating an object', () => {
    const damage = new Damage(200, 6);
    const expected = {
      _attack: 200,
      _stoned: false,
      cells: 6,
    };

    expect(damage).toEqual(expected);
  });

  test('attack at a distance of more than 5 cells and the stoned', () => {
    const damage = new Damage(200, 6);

    damage.stoned = true;
    damage.attack = true;
    expect(damage.attack).toBe(107);
  });

  test('only under stoned', () => {
    const damage = new Damage(200, 2);

    damage.stoned = true;
    damage.attack = true;
    expect(damage.attack).toBe(195);
  });

  test('damage at a distance of less than 5 cells and not stoned', () => {
    const damage = new Damage(200, 2);

    damage.attack = true;
    expect(damage.attack).toBe(200);
  });

  test('attack at a distance of less than 5 cells', () => {
    const damage = new Damage(200, 2);

    damage.attack = false;
    expect(damage.attack).toBe(200);
  });

  test('in getter not boolean', () => {
    const damage = new Damage(200, 6);
    expect(() => damage.stoned = 2).toThrow('this param is not boolean type');
  });
});
