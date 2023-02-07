const { insertionSort } = require("../insertion");

test("insertion - it should sort an array", () => {
  const result = insertionSort([6, 2]);
  expect(result).toEqual([2, 6]);
});

test("insertion - it should not sort a sorted array", () => {
  const result = insertionSort([3, 4, 5]);
  expect(result).toEqual([3, 4, 5]);
});

test("insertion - it should sort a big array", () => {
          const result = insertionSort([21,18,2,13]);
          expect(result).toEqual([2,13,18,21]);
        });


