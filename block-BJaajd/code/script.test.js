const tests = require('./calculator');

test('This should remove 3 from array', () => {
  expect(tests.removeFromArray([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
});

test('This should remove 45 form array', () => {
  expect(tests.removeFromArray([1, 2, 3, 45], 45)).toStrictEqual([1, 2, 3]);
});
