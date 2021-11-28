function oddEven(n) {
  let odd = 0;

  let even = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      odd += n[i] * 2;
    } else {
      even += n[i] * 2;
    }
  }

  return `Ganjil : ${even}\nGenap : ${odd}`;
}

const hasil = oddEven([1, 2, 3, 4, 5]);

console.log(hasil);
