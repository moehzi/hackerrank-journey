function equalizeArray(arr) {
  //   cari dulu max
  const sortedArr = arr.sort();
  const maxArr = [];
  let sum = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      sum++;
    } else {
      maxArr.push(sum);
      sum = 0;
    }
  }
  // terus max nya dikurangi dengan lengthnya
  return sortedArr.length - (Math.max(...maxArr) + 1);
}
equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);
