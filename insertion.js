function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        item = arr[j - 1]
        arr[j - 1] = arr[j];
        arr[j] = item;
      }
    }
  }
  return arr;
}
insertionSort([23, 95, 50, 40, 13]);

module.exports = {
  insertionSort,
};
