function arr_sort(arr) {
  arr.sort((next, prev) => next - prev);
  return arr;
}

console.log(arr_sort([9, 1, 3, 7, 12, 8]));
