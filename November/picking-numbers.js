function pickingNumbers(a) {
  a = a.map(Number);

  let sorted = a.sort(function (a, b) {
    return a - b;
  });

  let i = 0;
  let j = 1;

  while (i < sorted.length && j < sorted.length) {
    if (Math.abs(sorted[i] - sorted[j]) > 1) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return Math.abs(i - j);
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
