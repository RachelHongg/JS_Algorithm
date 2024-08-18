// function arrAdd(numbers) {
//   let arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       const addNumbers = numbers[i] + numbers[j];
//       arr = [...arr, addNumbers];
//     }
//   }
//   const uniqueArr = [...new Set(arr)];
//   uniqueArr.sort((next, prev) => next - prev);
//   return uniqueArr;
// }

// console.log(arrAdd([5, 0, 2, 7]));

function arrAdd(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const addNumbers = numbers[i] + numbers[j];
      arr.push(addNumbers);
    }
  }
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((next, prev) => next - prev);
  return uniqueArr;
}

console.log(arrAdd([5, 0, 2, 7]));
