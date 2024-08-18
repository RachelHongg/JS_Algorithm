function matrix(arr1, arr2) {
  const row = arr1.length;
  const col = arr2[0].length;
  const num = arr1[0].length;
  res = [];

  for (let i = 0; i < row; i++) {
    res.push(new Array(col).fill(0));
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      for (let k = 0; k < num; k++) {
        res[i][k] += arr1[i][j] * arr2[j][k];
      }
    }
  }

  console.log(res);
}

matrix(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
