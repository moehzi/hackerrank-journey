function permutationEquation(p) {
  const result = [];
  for (let x = 1; x <= p.length; x++) {
    for (let j = 0; j < p.length; j++) {
      if (p[j] === x) {
        const index = p.indexOf(j + 1);
        result.push(index + 1);
      }
    }
  }
  return result;
}

const result = permutationEquation([5, 2, 1, 3, 4]);
console.log(result);
