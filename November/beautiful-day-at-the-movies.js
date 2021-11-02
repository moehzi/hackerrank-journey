function beautifulDays(i, j, k) {
  let beautiful = 0;
  for (let start = i; start <= j; start++) {
    start = start + "";
    const numReverse = Number(start.split("").reverse().join(""));
    const result = (start - numReverse) / k;
    if (result % 1 == 0) beautiful++;
  }
  return beautiful;
}
console.log(beautifulDays(20, 23, 6));
