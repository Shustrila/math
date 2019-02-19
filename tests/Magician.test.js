import Magician from '../src/js/Magician';

test('TESTL object magician', () => {
  const expected = {
    name: 'Shustrila',
    _attack: 200,
    cells: 3,
    _stoned: false,
    level: 4,
    defence: 120,
    type: 'Magician',
  };

  expect(new Magician({
    name: 'Shustrila',
    attack: 200,
    level: 4,
    cells: 3,
    defence: 120,
  })).toEqual(expected);
});
