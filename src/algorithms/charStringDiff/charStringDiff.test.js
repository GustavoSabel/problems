const test = require('tape');

const { charStringDiff } = require("./charStringDiff")

test('test ""', (t) => {
  const result = charStringDiff('', 'x')
  t.equal(result, 'x')
  t.end()
});

test('test "abcd"', (t) => {
  const result = charStringDiff('abcd', 'ceadb')
  t.equal(result, 'e')
  t.end()
});

test('test "abbdd"', (t) => {
  const result = charStringDiff('abbdd', 'dabadb')
  t.equal(result, 'a')
  t.end()
});

test('test "dasdarrgdfvxcvsf"', (t) => {
  const result = charStringDiff('dasdarrgdfvxcvsf', 'cvsddrvasargdfxfr')
  t.equal(result, 'r')
  t.end()
});
