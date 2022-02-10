const test = require('tape');

const index = require("../index")

test('test []', (t) => {
  const result = index.getCombinations([])
  t.deepEqual(result, [[]])
  t.end()
});

test('test [0]', (t) => {
  const result = index.getCombinations([0])
  t.deepEqual(result, [[], [0]])
  t.end()
});

test('test [1,2,3]', (t) => {
  const result = index.getCombinations([1, 2, 3])
  t.deepEqual(result, [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
  t.end()
});

test('test [1,2,3,4]', function (t) {
  const result = index.getCombinations([1, 2, 3, 4])
  t.deepEqual(result, [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]])
  t.end()
});