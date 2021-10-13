function migratoryBirds(arr) {
  let sortedArr = arr.slice().sort();
  let sum = 1;
  const duplicatesArr = [];
  let resultArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
      sum++;
    } else {
      duplicatesArr.push(sum);
      resultArr.push(sortedArr[i]);
      sum = 1;
    }
  }
  for (let i = 0; i < duplicatesArr.length; i++) {
    if (Math.max(...duplicatesArr) == duplicatesArr[i]) {
      return resultArr[i];
    } else {
      const index = duplicatesArr.findIndex(
        (num) => num === Math.max(...duplicatesArr)
      );
      return resultArr[index];
    }
  }
}
const result = migratoryBirds([
  1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
]);
console.log(result);
