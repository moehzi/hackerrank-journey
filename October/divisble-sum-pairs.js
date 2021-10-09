function divisibleSumPairs(n, k, ar) {
  const sumArr = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      sum = ar[i] + ar[j];
      if (sum % k == 0) sumArr.push(ar[i] + ar[j]);
    }
  }
  return sumArr.length;
}

const result = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
console.log(result);
