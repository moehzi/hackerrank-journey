function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const jumlApel = apples
    .map((num) => num + a)
    .filter((num) => num >= s && num <= t).length;
  const jumlJeruk = oranges
    .map((num) => num + a)
    .filter((num) => num >= s && num <= t).length;
  console.log(jumlApel);
  console.log(jumlJeruk);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
