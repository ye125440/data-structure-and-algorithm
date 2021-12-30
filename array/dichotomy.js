// array needs to be sorted array, element in array must be unique
const search = (array, target) => {
  if (!Array.isArray(array) || array.length === 0) return -1;
  return binarySearch(array, target, 0, array.length - 1);
};

const binarySearch = (array, target, start, end) => {
  const middle = Math.floor((start + end) / 2);
  if (array[middle] === target) return middle;
  // 在后半段
  if (array[middle] < target) {
    return binarySearch(array, target, middle + 1, end);
  } else return binarySearch(array, target, start, middle - 1);
};

const t = search([1, 2, 3, 4, 5, 6, 99, 101], 6);
console.log('debug ~ file: dichotomy.js ~ line 17 ~ t', t);
