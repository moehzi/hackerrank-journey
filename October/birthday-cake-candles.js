function birthdayCakeCandles(candles) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) {
      count++;
    }
  }
  return count;
}
const result = birthdayCakeCandles([5, 5, 5, 2, 1, 3, 3]);
console.log(result);
