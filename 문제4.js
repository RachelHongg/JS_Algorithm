function mathScore(answers) {
  let arr_1 = [1, 2, 3, 4, 5];
  let arr_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let person_1 = 0;
  let person_2 = 0;
  let person_3 = 0;
  for (i = 0; i < answers.length; i++) {
    let i_1 = i % 5;
    let i_2 = i % 8;
    let i_3 = i % 10;
    if (answers[i] === arr_1[i_1]) {
      person_1 += 1;
    }
    if (answers[i] === arr_2[i_2]) {
      person_2 += 1;
    }
    if (answers[i] === arr_3[i_3]) {
      person_3 += 1;
    }
  }
  const person = [person_1, person_2, person_3];
  return person;
}

function result(person) {
  const res = [];
  const max = Math.max(...mathScore([1, 3, 2, 4, 2]));

  let person_1 = person[0];
  let person_2 = person[1];
  let person_3 = person[2];

  if (person_1 === max) {
    res.push(1);
  }
  if (person_2 === max) {
    res.push(2);
  }
  if (person_3 === max) {
    res.push(3);
  }
  return res;
}

console.log(result(mathScore([1, 3, 2, 4, 2])));
