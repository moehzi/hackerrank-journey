function gradingStudents(grades) {
  let finalGrade = [];
  for (let i = 0; i < grades.length; i++) {
    if (5 - (grades[i] % 5) < 3 && grades[i] >= 38) {
      finalGrade.push(Math.ceil(grades[i] / 5) * 5);
    } else if (5 - (grades[i] % 5) >= 3) {
      finalGrade.push(grades[i]);
    } else if (grades[i] < 38) {
      finalGrade.push(grades[i]);
    }
  }
  return finalGrade;
}
console.log(gradingStudents([73, 67, 38, 33]));
