import Damage from '../src/js/Damage';

describe('TEST: Damage', () => {
  test('1', () => {
    const damage = new Damage(200, 6);
    const expected = {
      _attack: 200,
      _stoned: false,
      cells: 6,
    };

    expect(damage).toEqual(expected);
  });

  test('1', () => {
    const damage = new Damage(200, 6);

    damage.stoned = true;
    damage.attack = true;
    expect(damage.attack).toBe(107);
  });

  test('1', () => {
    const damage = new Damage(200, 2);

    damage.stoned = true;
    damage.attack = true;
    expect(damage.attack).toBe(195);
  });

  test('1', () => {
    const damage = new Damage(200, 2);

    damage.stoned = false;
    damage.attack = true;
    expect(damage.attack).toBe(200);
  });

  test('1', () => {
    const damage = new Damage(200, 2);

    damage.attack = false;
    expect(damage.attack).toBe(200);
  });

  test('1', () => {
    const damage = new Damage(200, 6);
    expect(() => damage.stoned = 2).toThrow();
  });
});
