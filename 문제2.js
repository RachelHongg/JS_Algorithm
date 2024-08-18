function sort(arr) {
  const uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
  uniqueArr.sort((next, prev) => next - prev);
  return uniqueArr;
}

console.log(sort([4, 5, 4, 6, 7, 1, 2]));
