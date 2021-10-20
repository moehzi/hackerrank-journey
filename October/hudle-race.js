function hurdleRace(k, height) {
  let max = height[0];
  height.forEach((element) => {
    if (element > max) max = element;
    max = max;
  });

  if (max > k) return max - k;
  return 0;
}
const result = hurdleRace(7, [1, 6, 3, 5, 2]);
console.log(result);
