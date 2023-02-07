function search(arr, value, compare) {
  for (let i = 0; i < arr.length; i++) {
    if (compare(arr[i], value)) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  search,
};
