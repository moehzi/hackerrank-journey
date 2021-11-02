function utopianTree(n) {
  let height = 0;
  const result = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      height += 1;
      result.push(height);
    } else if (i % 2 !== 0) {
      height += height;
      result.push(height);
    }
  }
  return result[result.length - 1];
}
console.log(utopianTree(5));
