const { search } = require("./linearSearch");

function makeCustomSearch(arr) {
  const odds = [];
  const evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push({ value: arr[i], index: i });
    } else {
      odds.push({ value: arr[i], index: i });
    }
  }
  return function (value) {
    if (value % 2 === 0) {
      const output = search(evens, value, function (a, b) {
        return a.value === b;
      });
      if (output === -1) {
        return -1;
      }
      return evens[output].index;
    } else {
      const output = search(odds, value, function (a, b) {
        return a.value === b;
      });
      if (output === -1) {
        return -1;
      }
      return odds[output].index;
    }
  };
}

const result = makeCustomSearch([6, 3, 5, 730, 9, 71, 1, 8, 78, 522, 430, 174]);
result(78);
