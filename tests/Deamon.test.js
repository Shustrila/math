import Daemon from '../src/js/Daemon';

test('TEST: object daemon', () => {
  const expected = {
    name: 'Shustrila',
    _attack: 200,
    cells: 3,
    _stoned: false,
    level: 4,
    defence: 120,
    type: 'Daemon',
  };

  expect(new Daemon({
    name: 'Shustrila',
    attack: 200,
    level: 4,
    cells: 3,
    defence: 120,
  })).toEqual(expected);
});
