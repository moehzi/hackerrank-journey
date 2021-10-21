function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length == b.length) {
      return a > b ? 1 : -1;
    }
    return a.length - b.length;
  });
}

const result = bigSorting([1, 2, 5, 3, 7]);
console.log(result);
