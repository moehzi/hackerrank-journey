function cutTheSticks(arr) {
  let sortedArr = arr.sort();
  const newArr = [arr.length];
  for (let i = 0; i < arr.length; i++) {
    const cutStick = sortedArr.filter((number) => {
      return number !== Math.min(...sortedArr);
    });
    sortedArr = cutStick;
    newArr.push(sortedArr.length);
    if (sortedArr.length === 0) {
      return newArr.filter((number) => {
        return number !== 0;
      });
    }
  }
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
