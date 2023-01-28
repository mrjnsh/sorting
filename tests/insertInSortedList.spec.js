const { insertInSortedList } = require("../insertInSortedList");

test("insert-item greater than all array", () => {
  const result = insertInSortedList([1, 2, 3], 4);
  expect(result).toStrictEqual([1, 2, 3, 4]);
});
test("insert-item less than all array", () => {
  const result = insertInSortedList([2, 3, 4], 1);
  expect(result).toStrictEqual([1, 2, 3, 4]);
});
test("insert-item should be in middle of array", () => {
  const result = insertInSortedList([1, 2, 3, 5], 4);
  expect(result).toStrictEqual([1, 2, 3, 4, 5]);
});
