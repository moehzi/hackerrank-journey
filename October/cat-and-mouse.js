function catAndMouse(x, y, z) {
  const a = Math.abs(x - z);
  const b = Math.abs(y - z);

  if (a < b) return "Cat A";
  if (b < a) return "Cat B";
  else return "Mouse C";
}
console.log(catAndMouse(2, 5, 4));
