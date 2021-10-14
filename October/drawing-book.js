function pageCount(n, p) {
  let result = [];
  let sum = 0;
  const page = [];
  let startfromP = 0;

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  for (let i = 1; i < p; i++) {
    sum++;
  }
  //   Check if p is even or odd
  if (p % 2 !== 0) {
    startfromP = Math.ceil((n - p) / 2);
  } else {
    startfromP = Math.floor((n - p) / 2);
  }

  page.push(Math.ceil(sum / 2), startfromP);

  return Math.min(...page);
}
console.log(pageCount(5, 5));
