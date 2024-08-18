function calculateScore(answers) {
  const result = [];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % answers.length]) {
        scores[j] += 1;
      }
    }
  }

  const highestScore = Math.max(...scores);

  for (let i = 0; i < 3; i++) {
    if (scores[i] === highestScore) {
      result.push(i + 1);
    }
  }
  console.log(result);
}

calculateScore([1, 3, 2, 4, 2]);
