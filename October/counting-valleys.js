function countingValleys(steps, path) {
  let valley = 0;
  let sealevel = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      sealevel++;
      if (sealevel == 0) {
        valley++;
      }
    } else {
      sealevel -= 1;
    }
  }
  return valley;
}
console.log(countingValleys(12, "DDUUDDUDUUUD"));
