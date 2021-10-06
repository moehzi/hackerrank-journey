function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let sumHigh = 0;
  let sumLow = 0;
  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (highestScore < scores[i]) {
      highestScore = scores[i];
      sumHigh++;
    }
    if (lowestScore > scores[i]) {
      lowestScore = scores[i];
      sumLow++;
    }
  }
  result.push(sumHigh, sumLow);
  return result;
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
