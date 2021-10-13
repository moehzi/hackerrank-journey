// Reverse Array
function reverseArray(a) {
  const numOfArr = a.length - 1;
  const reverseArr = [];
  for (let i = numOfArr; i >= 0; i--) {
    reverseArr.push(a[i]);
  }
  return reverseArr;
}
console.log(reverseArray([1, 2, 3]));
