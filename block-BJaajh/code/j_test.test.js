const { checkFive, getWinner } = require('./j_Test');

// Test one
test('This test should give 5 is equals to 5', () => {
  expect(checkFive(5)).toBe('5 is equal to 5.');
});

// Test Two
test('This test should give 3 less than 5.', () => {
  expect(checkFive(3)).toBe('3 is less than 5.');
});

// Test Three
test('This test should give 10 greater than 5.', () => {
  expect(checkFive(10)).toBe('10 is greater than 5.');
});

// Test One
// test('This should return Incorrect Values', () => {
//   expect(getWinner('Ayush', 'Rock')).toBe('Incorrect Values');
// });

// Test two
test('This should return tie', () => {
  expect(getWinner('Rock', 'Rock')).toBe('Tie');
});

// Test Three
// test('This should return Paper beats Rock', () => {
//   expect(getWinner('Ayush', 'Rock')).toBe('Paper beats Rock');
// });
