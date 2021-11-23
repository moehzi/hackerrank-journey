function camelcase(s) {
  let sum = 1;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      sum++;
    }
  }
  return sum;
}
console.log(camelcase("saveChangesInTheEditor"));
