const { selectionSort } = require("../selection");

test("selection -it should sort an array", () => {
  const arr = selectionSort([9, 5, 7, 4]);
  expect(arr).toEqual([4, 5, 7, 9]);
});

test("it shouldn't sort a sorted array", () => {
  const res = selectionSort([1, 2, 3, 4]);
  expect(res).toEqual([1, 2, 3, 4]);
});

test("it should sort a big array", () => {
  const res = selectionSort([4, 1, 65, 2, 7, 9]);
  expect(res).toEqual([1, 2, 4, 7, 9, 65]);
});
