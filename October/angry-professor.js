function angryProfessor(k, a) {
  const students = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 1) students.push(a[i]);
  }
  console.log(students);
  if (students.length < k) return "YES";
  return "NO";
}
const result = angryProfessor(
  20,
  [
    97, -55, 48, -22, 99, -46, 40, 11, 5, -61, 78, -20, 44, 22, -8, 82, 24, -62,
    0, 52, -79, 68, -73, -81, 33, 60, -99, -99, 59, -13, 90, -26, 84, 90, 76,
    36, -45, 79, 87, 48, 59, -36, 42, -6, -13, 21, -19, -21, 39, -40,
  ]
);
console.log(result);
