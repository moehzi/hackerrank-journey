function findDigits(n) {
  const output = [];
  const ntoStr = n.toString();
  let count = 0;
  for (let i = 0; i < ntoStr.length; i++) {
    if (n % ntoStr.charAt(i) === 0) {
      count++;
    }
  }
  return count;
}
const result = findDigits(12);
console.log(result);
